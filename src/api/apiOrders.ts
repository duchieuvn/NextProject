import { OrderRequest, OrderResponse } from "@/interface/OrderPayload";
import supabase from "./supabase";
import { ORDER_TABLE } from "@/constants/table";

export async function getOrdersAPI() {
  const { data, error } = await supabase.from(ORDER_TABLE).select("*");
  if (error) {
    console.error(error);
    throw new Error("Orders could not be load");
  }
  return data;
}

export async function createOneOrderAPI(
  order?: OrderRequest
): Promise<OrderRequest> {
  const { data, error } = await supabase
    .from("order")
    .insert(order)
    .returns<OrderRequest>();
  if (error) {
    console.error(error);
    throw new Error("Order could not be create");
  }

  return data;
}
