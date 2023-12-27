import { getProductsAPI } from "@/api/apiProduct";
import { PRODUCTS_QUERY_KEY } from "@/constants/query/keys";
import useSWR, { SWRResponse } from "swr";

export const useGetProducts = () => {
  return useSWR(PRODUCTS_QUERY_KEY, getProductsAPI);
};
