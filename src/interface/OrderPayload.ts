export interface OrderResponse {
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

export interface OrderRequest {
  phone_number: string;
  customer_name: string;
  location: string;
  ship_price: number;
  discount: number;
  expected_date: Date;
  expected_time: string;
}
