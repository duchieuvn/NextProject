"use client";
import { Flex, Button, Form, Card, Typography, Divider, Alert } from "antd";

import useSWR from "swr";
import OrderFormInfo from "@/components/OrderFormInfo";
import OrderFormProducts from "@/components/OrderFormProducts";
import { createOneOrderAPI } from "@/api/apiOrders";

export default function OrderForm() {
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
          console.log(form.getFieldsValue());
          const formOrder = form.getFieldsValue();
          createOneOrderAPI(formOrder);
          // createOneOrderAPI()
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
