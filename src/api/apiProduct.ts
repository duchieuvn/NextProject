import supabase from "./supabase";
import { ProductResponse } from "@/interface/ProductPayload";

export async function getProductsAPI(): Promise<ProductResponse[] | null> {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .returns<ProductResponse[]>();
  if (error) {
    console.error(error);
    throw new Error("Products could not be load");
  }
  return data;
}
