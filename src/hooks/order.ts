import { createOneOrderAPI, getOrdersAPI } from "@/api/apiOrders";
import { ORDERS } from "@/constants/query/keys";
import { OrderRequest } from "@/interface/OrderPayload";
import useSWR, { mutate } from "swr";

export const useGetOrders = () => {
  return useSWR(ORDERS, getOrdersAPI);
};

export const useCreateOrder = () => {
  return (order: OrderRequest) => {
    return mutate<OrderRequest>("orders", () => createOneOrderAPI(order));
  };
};

// carrying function
