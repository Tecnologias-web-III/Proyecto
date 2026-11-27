import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { auth, db, googleProvider } from "../../config/firebaseConfig";
import { AuthCarousel } from "./AuthCarousel";
import { GoogleIcon } from "../../shared/components/GoogleIcon";

export function LoginPage() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const asegurarPerfilGoogle = async (firebaseUser) => {
    const userRef = doc(db, "usuarios", firebaseUser.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: firebaseUser.uid,
        nombre: firebaseUser.displayName || "Usuario Comunitario",
        correo: firebaseUser.email || "",
        telefono: "",
        canton: "Orotina",
        photoURL: firebaseUser.photoURL || "",
        rol: "ciudadano",
        creadoEn: serverTimestamp(),
      });
    }
  };

  const handleLoginCorreo = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);

    try {
      await signInWithEmailAndPassword(auth, correo, password);
      navigate("/dashboard");
    } catch {
      setError("El correo o la contraseña son incorrectos.");
    } finally {
      setCargando(false);
    }
  };

  const handleLoginGoogle = async () => {
    setError("");
    setCargando(true);

    try {
      const resultado = await signInWithPopup(auth, googleProvider);
      await asegurarPerfilGoogle(resultado.user);
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        setError("Se cerró la ventana de inicio de sesión con Google.");
      } else if (err.code === "auth/popup-blocked") {
        setError("El navegador bloqueó la ventana emergente. Permite pop-ups e intenta de nuevo.");
      } else if (err.code === "auth/operation-not-allowed") {
        setError("El proveedor de Google no está habilitado en Firebase Authentication.");
      } else {
        setError(`Error al iniciar con Google (${err.code || "desconocido"}).`);
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="auth-split-layout auth-fullscreen-wrapper login-page">
      <AuthCarousel />

      <section className="auth-form-panel">
        <div className="auth-form-box">
          <div className="auth-card-brand">
            <img src="/img/Favicon.png" alt="" className="brand-logo" />
          </div>
          <div className="auth-title-block">
            <h1>Costa Rica Conecta</h1>
            <p>Ingresa a tu cuenta para continuar.</p>
          </div>

          {error && <div className="alert-error">{error}</div>}

          <form onSubmit={handleLoginCorreo} className="form-stack">
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <div className="auth-input-wrap">
                <Mail className="auth-input-icon" size={18} aria-hidden="true" />
                <input
                  id="correo"
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="tu-correo@ejemplo.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="auth-input-wrap">
                <LockKeyhole className="auth-input-icon" size={18} aria-hidden="true" />
                <input
                  id="password"
                  type={mostrarPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  required
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setMostrarPassword((mostrar) => !mostrar)}
                  aria-label={mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  aria-pressed={mostrarPassword}
                >
                  {mostrarPassword ? (
                    <EyeOff size={18} aria-hidden="true" />
                  ) : (
                    <Eye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary" disabled={cargando}>
              {cargando ? "Verificando..." : "Iniciar sesión"}
            </button>
          </form>

          <div className="divider">
            <span>O continúa con Google</span>
          </div>

          <button
            type="button"
            className="btn-google"
            onClick={handleLoginGoogle}
            disabled={cargando}
          >
            <GoogleIcon />
            <span>Continuar con Google</span>
          </button>

          <p className="auth-footer">
            ¿Aún no tienes cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
