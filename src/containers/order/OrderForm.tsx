"use client";
import { Flex, Button, Form, Card, Typography, Divider, Alert } from "antd";

import useSWR, { mutate } from "swr";
import OrderFormInfo from "@/components/OrderFormInfo";
import OrderFormProducts from "@/components/OrderFormProducts";
import { createOneOrderAPI } from "@/api/apiOrders";
import { useCreateOrder } from "@/hooks/order";
import { OrderRequest } from "@/interface/OrderPayload";
import { ORDERS_QUERY_KEY } from "@/constants/query/keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function OrderForm() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createOneOrderAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ORDERS_QUERY_KEY] });
    },
  });
  const [form] = Form.useForm();

  return (
    <>
      <Alert message="Success Tips" type="success" showIcon />
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 8 }}
        form={form}
        name="order_form"
        autoComplete="off"
        initialValues={{}}
        onFinish={() => {
          const formInput = form.getFieldsValue();
          const {
            phone_number,
            customer_name,
            location,
            ship_price,
            discount,
            expected_date,
          } = formInput;

          const orderData: OrderRequest = {
            phone_number,
            customer_name,
            location,
            ship_price,
            discount,
            expected_date,
            expected_time: null,
          };
          mutate(orderData);
        }}
      >
        <Card size="small" title={`Đơn hàng`}>
          <Flex vertical>
            <OrderFormInfo />
            <OrderFormProducts />
          </Flex>
        </Card>

        <Form.Item wrapperCol={{ offset: 2, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item noStyle shouldUpdate>
          {() => (
            <Typography>
              <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
            </Typography>
          )}
        </Form.Item>
      </Form>
    </>
  );
}
