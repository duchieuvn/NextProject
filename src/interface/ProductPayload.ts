export type ProductResponse = ProductModal;

export interface ProductModal {
  id: number;
  name: string;
  retail_price: number;
  original_price: number;
  created_at: Date;
}
