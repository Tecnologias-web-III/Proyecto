import { createContext, useContext, useEffect, useState } from "react";
import {
  browserLocalPersistence,
  deleteUser,
  onAuthStateChanged,
  setPersistence,
  signOut,
} from "firebase/auth";
import {
  deleteDoc,
  doc,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";

const AuthContext = createContext(null);
const SESSION_TIMEOUT_MS = 15 * 60 * 1000;
const ACTIVITY_STORAGE_PREFIX = "auth:last-activity:";
const ROLES = new Set([
  "ciudadano",
  "admin_municipal",
  "admin_salud",
  "admin_farmacia",
]);
const ROLES_ADMIN = new Set(["admin_municipal", "admin_salud", "admin_farmacia"]);
const NOMBRES_ENTE = {
  ciudadano: "Ciudadano",
  admin_municipal: "Municipalidad Cantonal",
  admin_salud: "Centro de Salud",
  admin_farmacia: "Farmacia Comunitaria",
};
let persistencePromise;

function normalizarRol(rol) {
  const valor = typeof rol === "string" ? rol.trim().toLowerCase() : "";
  return ROLES.has(valor) ? valor : "ciudadano";
}

export async function verificarUltimaCuentaInstitucional(rol) {
  if (!ROLES_ADMIN.has(rol)) return;

  const cuentas = await getDocs(
    query(collection(db, "usuarios"), where("rol", "==", rol)),
  );
  if (cuentas.size <= 1) {
    throw new Error(
      "No se puede eliminar esta cuenta: debe existir al menos otro usuario activo con el mismo rol institucional en la plataforma.",
    );
  }
}

function asegurarPersistenciaLocal() {
  if (!persistencePromise) {
    persistencePromise = setPersistence(auth, browserLocalPersistence);
  }

  return persistencePromise;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarPerfilFirestore = async (firebaseUser) => {
    if (!firebaseUser) {
      setUserData(null);
      return;
    }

    const userRef = doc(db, "usuarios", firebaseUser.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      setUserData(userSnap.data());
    } else {
      const nuevoPerfil = {
        uid: firebaseUser.uid,
        nombre: firebaseUser.displayName || "Usuario Comunitario",
        correo: firebaseUser.email || "",
        telefono: "",
        canton: "Orotina",
        photoURL: firebaseUser.photoURL || "",
        rol: "ciudadano",
        creadoEn: serverTimestamp(),
      };
      await setDoc(userRef, nuevoPerfil);
      setUserData(nuevoPerfil);
    }
  };

  useEffect(() => {
    let unsubscribe;
    let unsubscribePerfil;
    let cancelled = false;
    let lastObservedUid = null;

    const escucharCambiosDeAutenticacion = () =>
      onAuthStateChanged(auth, async (currentUser) => {
        if (lastObservedUid && lastObservedUid !== currentUser?.uid) {
          localStorage.removeItem(`${ACTIVITY_STORAGE_PREFIX}${lastObservedUid}`);
        }
        lastObservedUid = currentUser?.uid || null;
        unsubscribePerfil?.();
        unsubscribePerfil = null;
        setUser(currentUser);
        try {
          await cargarPerfilFirestore(currentUser);
          if (!cancelled && currentUser && auth.currentUser?.uid === currentUser.uid) {
            unsubscribePerfil = onSnapshot(
              doc(db, "usuarios", currentUser.uid),
              (snapshot) => setUserData(snapshot.exists() ? snapshot.data() : null),
              (error) => console.error("Error al escuchar el perfil:", error),
            );
          }
        } catch (error) {
          console.error("Error al sincronizar perfil:", error);
        } finally {
          if (!cancelled) setLoading(false);
        }
      });

    asegurarPersistenciaLocal()
      .catch((error) => {
        console.error("Error al configurar la persistencia de sesión:", error);
      })
      .then(() => {
        if (!cancelled) {
          unsubscribe = escucharCambiosDeAutenticacion();
        }
      });

    return () => {
      cancelled = true;
      unsubscribe?.();
      unsubscribePerfil?.();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      return undefined;
    }

    const activityKey = `${ACTIVITY_STORAGE_PREFIX}${user.uid}`;
    const savedActivity = Number(localStorage.getItem(activityKey));
    let lastActivity =
      Number.isFinite(savedActivity) && savedActivity > 0
        ? Math.min(savedActivity, Date.now())
        : Date.now();
    let lastActivityWrite = lastActivity;
    let timeoutId;

    const signOutAfterInactivity = () => {
      const savedTimestamp = Number(localStorage.getItem(activityKey));
      if (Number.isFinite(savedTimestamp) && savedTimestamp > lastActivity) {
        lastActivity = savedTimestamp;
      }

      const remainingTime = SESSION_TIMEOUT_MS - (Date.now() - lastActivity);
      if (remainingTime <= 0) {
        localStorage.removeItem(activityKey);
        signOut(auth).catch((error) => {
          console.error("Error al cerrar la sesión inactiva:", error);
        });
        return;
      }

      timeoutId = window.setTimeout(signOutAfterInactivity, remainingTime);
    };

    const recordActivity = () => {
      lastActivity = Date.now();
      if (lastActivity - lastActivityWrite >= 1000) {
        localStorage.setItem(activityKey, String(lastActivity));
        lastActivityWrite = lastActivity;
      }
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(signOutAfterInactivity, SESSION_TIMEOUT_MS);
    };

    const syncActivity = (event) => {
      if (event.key !== activityKey || !event.newValue) {
        return;
      }

      const savedTimestamp = Number(event.newValue);
      if (Number.isFinite(savedTimestamp) && savedTimestamp > lastActivity) {
        lastActivity = savedTimestamp;
        lastActivityWrite = savedTimestamp;
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(
          signOutAfterInactivity,
          Math.max(0, SESSION_TIMEOUT_MS - (Date.now() - lastActivity)),
        );
      }
    };

    if (Date.now() - lastActivity >= SESSION_TIMEOUT_MS) {
      signOutAfterInactivity();
    } else {
      localStorage.setItem(activityKey, String(lastActivity));
      timeoutId = window.setTimeout(
        signOutAfterInactivity,
        SESSION_TIMEOUT_MS - (Date.now() - lastActivity),
      );
    }

    window.addEventListener("pointerdown", recordActivity);
    window.addEventListener("pointermove", recordActivity);
    window.addEventListener("keydown", recordActivity);
    window.addEventListener("touchstart", recordActivity);
    window.addEventListener("scroll", recordActivity);
    window.addEventListener("storage", syncActivity);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("pointerdown", recordActivity);
      window.removeEventListener("pointermove", recordActivity);
      window.removeEventListener("keydown", recordActivity);
      window.removeEventListener("touchstart", recordActivity);
      window.removeEventListener("scroll", recordActivity);
      window.removeEventListener("storage", syncActivity);
    };
  }, [user]);

  const refreshUserData = async () => {
    if (auth.currentUser) {
      await cargarPerfilFirestore(auth.currentUser);
    }
  };

  const logout = async () => {
    await signOut(auth);
    if (user) {
      localStorage.removeItem(`${ACTIVITY_STORAGE_PREFIX}${user.uid}`);
    }
    setUser(null);
    setUserData(null);
  };

  const deleteAccount = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error("No hay una sesión activa para eliminar.");
    }

    const userRef = doc(db, "usuarios", currentUser.uid);
    const userSnap = await getDoc(userRef);
    const rolActual = normalizarRol(userSnap.exists() ? userSnap.data().rol : "ciudadano");
    await verificarUltimaCuentaInstitucional(rolActual);
    if (userSnap.exists()) {
      await deleteDoc(userRef);
    }

    try {
      await deleteUser(currentUser);
    } catch (error) {
      if (userSnap.exists()) {
        try {
          await setDoc(userRef, userSnap.data());
        } catch (restoreError) {
          console.error("No se pudo restaurar el perfil tras fallar la eliminación:", restoreError);
        }
      }

      throw error;
    }

    setUser(null);
    setUserData(null);
  };

  const rol = normalizarRol(userData?.rol);
  const esAdmin = ROLES_ADMIN.has(rol);
  const nombreEnte = NOMBRES_ENTE[rol];

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        rol,
        esAdmin,
        nombreEnte,
        loading,
        logout,
        refreshUserData,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
