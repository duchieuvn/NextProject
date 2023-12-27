export type OrderResponse = OrderModel;

export type OrderRequest = Pick<
  OrderModel,
  | "phone_number"
  | "customer_name"
  | "location"
  | "ship_price"
  | "discount"
  | "expected_date"
  | "expected_time"
>;

export interface OrderModel {
  id: number;
  created_at: Date;
  phone_number: string;
  customer_name: string;
  location: string | null;
  ship_price: number | null;
  discount: number | null;
  expected_date: Date | null;
  expected_time: string | null;
  is_paid: boolean;
  is_delivered: boolean;
}
