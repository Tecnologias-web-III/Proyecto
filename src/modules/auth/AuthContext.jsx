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
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";

const AuthContext = createContext(null);
let persistencePromise;

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
        rol: "Ciudadano",
        creadoEn: serverTimestamp(),
      };
      await setDoc(userRef, nuevoPerfil);
      setUserData(nuevoPerfil);
    }
  };

  useEffect(() => {
    let unsubscribe;
    let cancelled = false;

    const escucharCambiosDeAutenticacion = () =>
      onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser);
        try {
          await cargarPerfilFirestore(currentUser);
        } catch (error) {
          console.error("Error al sincronizar perfil:", error);
        } finally {
          setLoading(false);
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
    };
  }, []);

  const refreshUserData = async () => {
    if (auth.currentUser) {
      await cargarPerfilFirestore(auth.currentUser);
    }
  };

  const logout = async () => {
    await signOut(auth);
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

  return (
    <AuthContext.Provider
      value={{ user, userData, loading, logout, refreshUserData, deleteAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
