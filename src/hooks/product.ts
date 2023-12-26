import { getProductsAPI } from "@/api/apiProduct";
import { PRODUCTS } from "@/constants/query/keys";
import useSWR, { SWRResponse } from "swr";

export const useGetProducts = () => {
  return useSWR(PRODUCTS, getProductsAPI);
};
