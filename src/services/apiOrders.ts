import supabase from "./supabase";

export async function getOrders() {
  const { data, error } = await supabase.from("order").select("*");
  if (error) {
    console.error(error);
    throw new Error("Orders could not be load");
  }

  return data;
}

export async function createOneOrder(order: any) {
  const { data, error } = await supabase.from("order").insert(order);
  if (error) {
    console.error(error);
    throw new Error("Order could not be create");
  }

  return data;
}
