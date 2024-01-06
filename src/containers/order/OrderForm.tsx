"use client";
import { Flex, Button, Form, Card, Typography, message } from "antd";

import OrderFormInfo from "@/components/OrderFormInfo";
import OrderFormProducts from "@/components/OrderFormProducts";
import { createOrderWithProductsAPI } from "@/api/apiOrders";
import { OrderFormData, OrderRequest } from "@/interface/OrderPayload";
import { ORDERS_QUERY_KEY } from "@/constants/query/keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NoticeType } from "antd/es/message/interface";

export default function OrderForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const displayMessage = (messageType: NoticeType) => {
    messageApi.open({
      type: messageType,
      content: "Order created successfully",
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createOrderWithProductsAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ORDERS_QUERY_KEY] });
      displayMessage("success");
    },
  });

  const handleSubmit = () => {
    const formData: OrderFormData = form.getFieldsValue();
    mutate(formData);
  };

  return (
    <>
      {contextHolder}
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 8 }}
        form={form}
        name="order_form"
        autoComplete="off"
        initialValues={{}}
        onFinish={handleSubmit}
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
