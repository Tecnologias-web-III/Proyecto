import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";

const AuthContext = createContext(null);

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
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      try {
        await cargarPerfilFirestore(currentUser);
      } catch (error) {
        console.error("Error al sincronizar perfil:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
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

  return (
    <AuthContext.Provider
      value={{ user, userData, loading, logout, refreshUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
