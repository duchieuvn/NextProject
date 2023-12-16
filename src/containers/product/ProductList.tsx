"use client";
import { getProductsApi } from "@/services/apiProduct";
import { Avatar, Card, Flex } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import useSWR from "swr";
import { useGetProducts } from "@/hooks/products";

export default function ProductList() {
  const { data, error, isLoading } = useGetProducts();
  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <Flex gap="small" vertical>
        {data?.map((product) => {
          return (
            <Card
              key={product.id}
              style={{ width: 300, marginTop: 16 }}
              loading={false}
            >
              <Meta
                avatar={<Avatar icon={<RightSquareOutlined />} />}
                title={product.name}
                description={product.retail_price}
              />
            </Card>
          );
        })}
      </Flex>
    </>
  );
}
