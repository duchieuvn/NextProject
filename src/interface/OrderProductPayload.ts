// export type OrderResponse = OrderModel;

export interface OrderProductModel {
  id: string;
  created_at: Date;
  order_id: string;
  product_id: string;
  quantity: number;
}

export type OrderProductResponse = OrderProductModel;

export type OrderProductRequest = Omit<OrderProductModel, "id" | "created_at">;

export type ProductOnly = Omit<OrderProductRequest, "order_id">;
