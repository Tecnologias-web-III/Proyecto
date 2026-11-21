export default function ConfirmDialog({ open, title = "Confirmar", onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true">
      <p>{title}</p>
      <button type="button" onClick={onConfirm}>Confirmar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </div>
  );
}
