import supabase from "./supabase";

export async function getProductsAPI() {
  const { data, error } = await supabase.from("product").select("*");
  if (error) {
    console.error(error);
    throw new Error("Products could not be load");
  }
  return data;
}
