import { OrderProductRequest } from "@/interface/OrderProductPayload";
import supabase from "./supabase";
import { ORDER_PRODUCT_TABLE } from "@/constants/table";

export async function createMultipleOrderProductAPI(
  records?: OrderProductRequest[]
): Promise<number> {
  const { data, error } = await supabase
    .from(ORDER_PRODUCT_TABLE)
    .insert(records)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Order could not be create");
  }

  console.log("order products created: \n", data);
  return data.length;
}
