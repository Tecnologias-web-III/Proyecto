import { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebaseConfig";
import { subirImagen } from "../../shared/utils/storageHelper";
import { useAuth, verificarUltimaCuentaInstitucional } from "./AuthContext";
import ConfirmDialog from "../../shared/components/ConfirmDialog";

export function ProfilePage() {
  const { user, userData, rol, nombreEnte, refreshUserData, deleteAccount } = useAuth();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [canton, setCanton] = useState("");
  const [archivoFoto, setArchivoFoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [confirmarEliminacion, setConfirmarEliminacion] = useState(false);
  const [eliminandoCuenta, setEliminandoCuenta] = useState(false);
  const [errorEliminacion, setErrorEliminacion] = useState("");

  useEffect(() => {
    if (userData) {
      setNombre(userData.nombre || user?.displayName || "");
      setTelefono(userData.telefono || "");
      setCanton(userData.canton || "Orotina");
      setPreviewUrl(userData.photoURL || user?.photoURL || "");
    }
  }, [userData, user]);

  useEffect(
    () => () => {
      if (previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    },
    [previewUrl],
  );

  const handleSeleccionArchivo = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setArchivoFoto(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleGuardarPerfil = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");
    setGuardando(true);

    try {
      if (!user || !auth.currentUser) {
        throw new Error("La sesión expiró. Inicia sesión nuevamente.");
      }

      let urlFinalFoto = userData?.photoURL || user?.photoURL || "";

      if (archivoFoto) {
        urlFinalFoto = await subirImagen(archivoFoto, "avatars");
      }

      await updateProfile(auth.currentUser, {
        displayName: nombre,
        photoURL: urlFinalFoto,
      });

      const userRef = doc(db, "usuarios", user.uid);
      await updateDoc(userRef, {
        nombre,
        telefono,
        canton,
        photoURL: urlFinalFoto,
        actualizadoEn: serverTimestamp(),
      });

      await refreshUserData();
      setArchivoFoto(null);
      setPreviewUrl(urlFinalFoto);
      setMensaje("Perfil y fotografia actualizados correctamente.");
    } catch (err) {
      setError(err.message || "Error al actualizar los datos del perfil.");
    } finally {
      setGuardando(false);
    }
  };

  const handleEliminarCuenta = async () => {
    setErrorEliminacion("");
    setEliminandoCuenta(true);

    try {
      await verificarUltimaCuentaInstitucional(rol);
      await deleteAccount();
      navigate("/login", { replace: true });
    } catch (err) {
      if (err.code === "auth/requires-recent-login") {
        setErrorEliminacion(
          "Por seguridad, cierra sesión, vuelve a ingresar y repite la eliminación para confirmar tu identidad.",
        );
      } else if (err.message?.includes("debe existir al menos otro usuario activo")) {
        setErrorEliminacion(err.message);
      } else {
        setErrorEliminacion(
          err.code
            ? `No se pudo eliminar la cuenta (${err.code}). Inténtalo nuevamente.`
            : err.message || "No se pudo eliminar la cuenta. Inténtalo nuevamente.",
        );
      }

      setConfirmarEliminacion(false);
    } finally {
      setEliminandoCuenta(false);
    }
  };

  return (
    <div className="page-container profile-page">
      <div className="page-header">
        <h2>Perfil de Usuario</h2>
        <p>Administra tu información personal y tu foto de perfil.</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar-section">
          {previewUrl ? (
            <img src={previewUrl} alt="Foto de perfil" className="avatar-large" />
          ) : (
            <div className="avatar-placeholder">
              {nombre ? nombre.charAt(0).toUpperCase() : "U"}
            </div>
          )}
          <div>
            <h3>{nombre || "Usuario"}</h3>
            <p className="text-muted">{user?.email}</p>
            <span className="badge-role">{nombreEnte}</span>
          </div>
        </div>

        {mensaje && <div className="alert-success">{mensaje}</div>}
        {error && <div className="alert-error">{error}</div>}

        <form onSubmit={handleGuardarPerfil} className="form-stack">
          <div className="form-group">
            <label htmlFor="foto">Actualizar fotografia personal</label>
            <input
              id="foto"
              type="file"
              accept="image/*"
              onChange={handleSeleccionArchivo}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefono">Telefono de contacto</label>
              <input
                id="telefono"
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="canton">Canton de residencia</label>
              <input
                id="canton"
                type="text"
                value={canton}
                onChange={(e) => setCanton(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary" disabled={guardando}>
            {guardando ? "Guardando cambios..." : "Guardar Cambios del Perfil"}
          </button>
        </form>
      </div>

      <section className="account-management" aria-labelledby="account-management-title">
        <div>
          <h2 id="account-management-title">Gestión de cuenta</h2>
          <p>
            La eliminación borra permanentemente tu perfil y tu acceso a la
            plataforma.
          </p>
        </div>
        {errorEliminacion && (
          <div className="alert-error" role="alert">
            {errorEliminacion}
          </div>
        )}
        <button
          type="button"
          className="btn-danger"
          onClick={() => {
            setErrorEliminacion("");
            setConfirmarEliminacion(true);
          }}
          disabled={eliminandoCuenta || guardando}
        >
          Eliminar mi cuenta
        </button>
      </section>

      <ConfirmDialog
        open={confirmarEliminacion}
        title="Eliminar cuenta"
        description="Se borrarán permanentemente tu perfil y tu acceso a Costa Rica Conecta. Esta acción no se puede deshacer."
        confirmLabel={eliminandoCuenta ? "Eliminando cuenta..." : "Eliminar mi cuenta"}
        cancelLabel="Conservar cuenta"
        confirmDisabled={eliminandoCuenta}
        danger
        onConfirm={handleEliminarCuenta}
        onCancel={() => {
          if (!eliminandoCuenta) {
            setConfirmarEliminacion(false);
          }
        }}
      />
    </div>
  );
}