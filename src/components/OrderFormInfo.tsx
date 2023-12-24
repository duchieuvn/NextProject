"use client";
import {
  Flex,
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Card,
  Space,
  Typography,
} from "antd";

export default function OrderFormInfo() {
  return (
    <Flex vertical>
      <Form.Item label="Tên người nhận" name={["customer_name"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Số điện thoại" name={["phone_number"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Địa chỉ" name={["location"]}>
        <Input />
      </Form.Item>
      {/* <Form.Item label="Giờ hẹn" name={["expected_time"]}>
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item> */}

      <Form.Item label="Ngày hẹn" name={["expected_date"]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Phí vận chuyển" name={["ship_price"]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Giảm giá" name={["discount"]}>
        <InputNumber />
      </Form.Item>
    </Flex>
  );
}
