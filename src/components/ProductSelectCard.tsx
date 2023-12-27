"use client";
import {
  Flex,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Card,
  FormListFieldData,
  FormListOperation,
} from "antd";

import { CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import useSWR from "swr";
import { getProductsAPI } from "@/api/apiProduct";
import OrderFormInfo from "@/components/OrderFormInfo";
import { useGetProducts } from "@/hooks/product";

export default function ProductSelectCard({
  key,
  subField,
  subOpt,
}: {
  key: number;
  subField: FormListFieldData;
  subOpt: FormListOperation;
}) {
  const { data, error, isLoading } = useGetProducts();
  console.log(data);
  return (
    <Card key={key}>
      {/* Reference to order_product table */}
      <Form.Item label="Tên sản phẩm" name={[subField.name, "product_id"]}>
        <Select>
          {data?.map((p) => {
            return (
              <Select.Option key={p.name} value={p.id}>
                {p.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="số lượng" name={[subField.name, "quantity"]}>
        <InputNumber />
      </Form.Item>
      <CloseOutlined
        onClick={() => {
          subOpt.remove(subField.name);
        }}
      />
    </Card>
  );
}
