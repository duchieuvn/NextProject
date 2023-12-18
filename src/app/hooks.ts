import { getProductsAPI } from "@/api/apiProduct";
import useSWR from "swr";

export async function useGetProducts() {
  return await useSWR(
    "products",
    async (key: string) => await getProductsAPI()
  );
}
