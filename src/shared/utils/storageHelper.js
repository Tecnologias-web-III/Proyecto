import { supabase } from "../../config/supabaseClient";

const bucketsPermitidos = new Set([
  "avatars",
  "reportes",
  "nutricion",
  "medicamentos",
]);

export async function subirImagen(archivo, bucket) {
  if (!supabase) {
    throw new Error("Las credenciales de Supabase no estan configuradas en el archivo .env.");
  }

  if (!bucketsPermitidos.has(bucket)) {
    throw new Error(`El bucket "${bucket}" no esta permitido.`);
  }

  if (!archivo) {
    throw new Error("No se selecciono ningun archivo de imagen.");
  }

  if (!archivo.type?.startsWith("image/")) {
    throw new Error("El archivo seleccionado no es una imagen.");
  }

  const extension = archivo.name?.match(/\.[a-z0-9]+$/i)?.[0]?.toLowerCase() || "";
  const identificador =
    globalThis.crypto?.randomUUID?.() ||
    `${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const nombreUnico = `${identificador}${extension}`;

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(nombreUnico, archivo, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Error al subir archivo a Supabase: ${uploadError.message}`);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(nombreUnico);
  if (!data.publicUrl) {
    throw new Error("Supabase no devolvio una URL publica para la imagen.");
  }

  return data.publicUrl;
}