import { supabase } from "../../config/supabaseClient";

export async function subirImagen(archivo, bucket) {
  if (!supabase) {
    throw new Error("Las credenciales de Supabase no estan configuradas en el archivo .env.");
  }

  if (!archivo) {
    throw new Error("No se selecciono ningun archivo de imagen.");
  }

  const extension = archivo.name.split(".").pop();
  const nombreUnico = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${extension}`;

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
  return data.publicUrl;
}