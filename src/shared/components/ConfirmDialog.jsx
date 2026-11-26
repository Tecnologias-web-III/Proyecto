import { useEffect, useRef } from "react";

export default function ConfirmDialog({
  open,
  title = "Confirmar",
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  confirmDisabled = false,
  danger = false,
  onConfirm,
  onCancel,
}) {
  const confirmButtonRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    confirmButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCancel?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      className="confirm-dialog-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onCancel?.();
        }
      }}
    >
      <section
        className="confirm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby={description ? "confirm-dialog-description" : undefined}
      >
        <h2 id="confirm-dialog-title">{title}</h2>
        {description && (
          <p id="confirm-dialog-description" className="confirm-dialog-description">
            {description}
          </p>
        )}
        <div className="confirm-dialog-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onCancel}
            disabled={confirmDisabled}
          >
            {cancelLabel}
          </button>
          <button
            ref={confirmButtonRef}
            type="button"
            className={danger ? "btn-danger" : "btn-primary"}
            onClick={onConfirm}
            disabled={confirmDisabled}
          >
            {confirmLabel}
          </button>
        </div>
      </section>
    </div>
  );
}
