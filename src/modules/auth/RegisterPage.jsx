import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../../config/firebaseConfig";
import { AuthCarousel } from "./AuthCarousel";
import { GoogleIcon } from "../../shared/components/GoogleIcon";

export function RegisterPage() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [canton, setCanton] = useState("Orotina");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);

    try {
      const credencial = await createUserWithEmailAndPassword(auth, correo, password);
      await updateProfile(credencial.user, { displayName: nombre });

      await setDoc(doc(db, "usuarios", credencial.user.uid), {
        uid: credencial.user.uid,
        nombre,
        correo,
        telefono,
        canton,
        photoURL: "",
        rol: "Ciudadano",
        creadoEn: serverTimestamp(),
      });

      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Este correo electrónico ya se encuentra registrado.");
      } else if (err.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres.");
      } else {
        setError(`No se pudo completar el registro (${err.code || "error"}).`);
      }
    } finally {
      setCargando(false);
    }
  };

  const handleRegistroGoogle = async () => {
    setError("");
    setCargando(true);

    try {
      const resultado = await signInWithPopup(auth, googleProvider);
      const userRef = doc(db, "usuarios", resultado.user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: resultado.user.uid,
          nombre: resultado.user.displayName || "Usuario Comunitario",
          correo: resultado.user.email || "",
          telefono: "",
          canton: canton || "Orotina",
          photoURL: resultado.user.photoURL || "",
          rol: "Ciudadano",
          creadoEn: serverTimestamp(),
        });
      }

      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        setError("Se cerró la ventana de Google antes de finalizar.");
      } else if (err.code === "auth/popup-blocked") {
        setError("El navegador bloqueó la ventana emergente de Google.");
      } else if (err.code === "auth/operation-not-allowed") {
        setError("El proveedor de Google no está habilitado en Firebase Authentication.");
      } else {
        setError(`No se pudo registrar con Google (${err.code || "error"}).`);
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="auth-split-layout reverse">
      <AuthCarousel />

      <section className="auth-form-panel">
        <div className="auth-form-box">
          <div className="auth-title-block">
            <h1>Crear cuenta</h1>
            <p>Regístrate para gestionar tus reportes y servicios en línea</p>
          </div>

          {error && <div className="alert-error">{error}</div>}

          <button
            type="button"
            className="btn-google"
            onClick={handleRegistroGoogle}
            disabled={cargando}
          >
            <GoogleIcon />
            <span>Registrarse con Google</span>
          </button>

          <div className="divider">
            <span>o completa tus datos</span>
          </div>

          <form onSubmit={handleRegistro} className="form-stack">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Valeria Mora Solís"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="8742-1930"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="canton">Cantón</label>
                <input
                  id="canton"
                  type="text"
                  value={canton}
                  onChange={(e) => setCanton(e.target.value)}
                  placeholder="Orotina"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="correo"
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="valeria.mora@correo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                required
              />
            </div>

            <button type="submit" className="btn-primary" disabled={cargando}>
              {cargando ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </form>

          <p className="auth-footer">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
