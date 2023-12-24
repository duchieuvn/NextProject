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

export default function ProductSelectCard({
  key,
  subField,
  subOpt,
}: {
  key: number;
  subField: FormListFieldData;
  subOpt: FormListOperation;
}) {
  const { data, error, isLoading } = useSWR(
    "products",
    async (key: string) => await getProductsAPI()
  );
  console.log(data);
  return (
    <Card key={key}>
      <Form.Item label="Tên sản phẩm" name={[subField.name, "product_name"]}>
        <Select>
          {data?.map((p) => {
            return (
              <Select.Option key={p.name} value={p.name}>
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
