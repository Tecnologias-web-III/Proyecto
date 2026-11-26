import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
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
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarConfirmarPassword, setMostrarConfirmarPassword] = useState(false);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmarPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

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
    <div className="auth-split-layout auth-fullscreen-wrapper reverse register-page">
      <AuthCarousel />

      <section className="auth-form-panel">
        <div className="auth-form-box">
          <div className="auth-card-brand">
            <img src="/img/Favicon.png" alt="" className="brand-logo" />
          </div>
          <div className="auth-title-block">
            <h1>Crear cuenta</h1>
            <p>Crea tu cuenta para usar los servicios de tu comunidad.</p>
          </div>

          {error && <div className="alert-error">{error}</div>}

          <form onSubmit={handleRegistro} className="form-stack">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <div className="auth-input-wrap">
                <UserRound className="auth-input-icon" size={18} aria-hidden="true" />
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <div className="auth-input-wrap">
                  <Phone className="auth-input-icon" size={18} aria-hidden="true" />
                  <input
                    id="telefono"
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="canton">Cantón</label>
                <div className="auth-input-wrap">
                  <MapPin className="auth-input-icon" size={18} aria-hidden="true" />
                  <input
                    id="canton"
                    type="text"
                    value={canton}
                    onChange={(e) => setCanton(e.target.value)}
                    placeholder="Cantón"
                    required
                  />
                </div>
              </div>
            </div>

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

            <div className="form-row auth-password-row">
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <div className="auth-input-wrap">
                  <LockKeyhole className="auth-input-icon" size={18} aria-hidden="true" />
                  <input
                    id="password"
                    type={mostrarPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    autoComplete="new-password"
                    minLength={6}
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

              <div className="form-group">
                <label htmlFor="confirmarPassword">Confirmar contraseña</label>
                <div className="auth-input-wrap">
                  <LockKeyhole className="auth-input-icon" size={18} aria-hidden="true" />
                  <input
                    id="confirmarPassword"
                    type={mostrarConfirmarPassword ? "text" : "password"}
                    value={confirmarPassword}
                    onChange={(e) => setConfirmarPassword(e.target.value)}
                    placeholder="Repite tu contraseña"
                    autoComplete="new-password"
                    minLength={6}
                    required
                  />
                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() =>
                      setMostrarConfirmarPassword((mostrar) => !mostrar)
                    }
                    aria-label={
                      mostrarConfirmarPassword
                        ? "Ocultar confirmación de contraseña"
                        : "Mostrar confirmación de contraseña"
                    }
                    aria-pressed={mostrarConfirmarPassword}
                  >
                    {mostrarConfirmarPassword ? (
                      <EyeOff size={18} aria-hidden="true" />
                    ) : (
                      <Eye size={18} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="btn-primary" disabled={cargando}>
              {cargando ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </form>

          <div className="divider">
            <span>O continúa con Google</span>
          </div>

          <button
            type="button"
            className="btn-google"
            onClick={handleRegistroGoogle}
            disabled={cargando}
          >
            <GoogleIcon />
            <span>Crear cuenta con Google</span>
          </button>

          <p className="auth-footer">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
