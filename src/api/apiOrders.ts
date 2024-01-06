import {
  OrderFormData,
  OrderRequest,
  OrderResponse,
} from "@/interface/OrderPayload";
import supabase from "./supabase";
import { ORDER_TABLE } from "@/constants/table";
import { createMultipleOrderProductAPI } from "./apiOrderProduct";
import { OrderProductRequest } from "@/interface/OrderProductPayload";

export async function getOrdersAPI(orderBy: string = "created_at") {
  const { data, error } = await supabase
    .from(ORDER_TABLE)
    .select("*")
    .order(orderBy, { ascending: false })
    .returns<OrderResponse[]>();
  if (error) {
    console.error(error);
    throw new Error("Orders could not be load");
  }
  return data;
}

export async function createOnlyOrderAPI(
  order: OrderRequest
): Promise<OrderResponse> {
  console.log("order: ", order);
  const { data, error } = await supabase
    .from(ORDER_TABLE)
    .insert(order)
    .select()
    .returns<OrderResponse[]>();
  if (error) {
    console.error(error);
    throw new Error("Order could not be create");
  }

  const [response] = data;
  return response;
}

export async function createOrderWithProductsAPI(
  formData: OrderFormData
): Promise<any> {
  const {
    phone_number,
    customer_name,
    location,
    ship_price,
    discount,
    expected_date,
    expected_time,
    products,
  } = formData;

  const orderData: OrderRequest = {
    phone_number,
    customer_name,
    location,
    ship_price,
    discount,
    expected_date,
    expected_time,
  };

  console.log("-----create order API-------");
  const createdOrder = await createOnlyOrderAPI(orderData);
  console.log("created order: \n", createdOrder);
  if (createdOrder && products) {
    const orderProductRecords: OrderProductRequest[] = products.map((item) => ({
      ...item,
      order_id: createdOrder.id,
    }));
    console.log("order product");
    console.log(orderProductRecords);
    console.log("call order product API");
    createMultipleOrderProductAPI(orderProductRecords);
  }

  return createdOrder;
}
