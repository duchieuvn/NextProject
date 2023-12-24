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

import { CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import useSWR from "swr";
import { getProductsAPI } from "@/api/apiProduct";
import ProductSelectCard from "./ProductSelectCard";

export default function OrderFormProducts() {
  const { data, error, isLoading } = useSWR(
    "products",
    async (key: string) => await getProductsAPI()
  );

  return (
    <Flex vertical>
      {/* Nest Form.List */}
      <Form.Item>
        <Form.List name={["products"]}>
          {(subFields, subOpt) => (
            <Flex vertical>
              {subFields.map((subField) => (
                <ProductSelectCard
                  key={subField.key}
                  subField={subField}
                  subOpt={subOpt}
                />
              ))}
              <Button type="dashed" onClick={() => subOpt.add()} block>
                + Thêm sản phẩm
              </Button>
            </Flex>
          )}
        </Form.List>
      </Form.Item>
    </Flex>
  );
}
