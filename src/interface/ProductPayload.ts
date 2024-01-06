export interface ProductModal {
  id: string;
  name: string;
  retail_price: number;
  original_price: number;
  created_at: Date;
}

export type ProductResponse = ProductModal;
