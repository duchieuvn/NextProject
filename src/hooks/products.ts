import { PRODUCTS } from "@/app/constants/queryKey";
import { getProductsApi } from "@/services/apiProduct";
import useSWR from "swr";

export const useGetProducts = () => {
  return useSWR(PRODUCTS, async (key: string) => {
    return await getProductsApi();
  });
};
