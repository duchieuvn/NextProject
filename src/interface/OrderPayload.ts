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
  location: string;
  ship_price: number;
  discount: number;
  expected_date: Date;
  expected_time: string;
  is_paid: boolean;
  is_deliveried: boolean;
}
