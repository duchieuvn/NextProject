import { getOrdersAPI } from "@/api/apiOrders";
import { ORDERS_QUERY_KEY } from "@/constants/query/keys";
import { useQuery } from "@tanstack/react-query";

export const useGetOrders = (sortBy: string) => {
  return useQuery({
    queryKey: [ORDERS_QUERY_KEY, sortBy],
    queryFn: () => getOrdersAPI(sortBy),
  });
};
