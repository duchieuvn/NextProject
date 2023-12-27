import { createOneOrderAPI, getOrdersAPI } from "@/api/apiOrders";
import { ORDERS_QUERY_KEY } from "@/constants/query/keys";
import { OrderRequest } from "@/interface/OrderPayload";
import useSWR, { mutate } from "swr";

export const useGetOrders = () => {
  return useSWR(ORDERS_QUERY_KEY, getOrdersAPI);
};

export const useCreateOrder = async (order: OrderRequest) => {
  return await mutate<OrderRequest>("orders", () => createOneOrderAPI(order));
};

// carrying function
