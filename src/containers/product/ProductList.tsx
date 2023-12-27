"use client";
import { Avatar, Card, Flex } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useQuery } from "@tanstack/react-query";
import { PRODUCTS_QUERY_KEY } from "@/constants/query/keys";
import { getProductsAPI } from "@/api/apiProduct";

export default function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: [PRODUCTS_QUERY_KEY],
    queryFn: getProductsAPI,
  });
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
                title={product?.name}
                description={product?.retail_price}
              />
            </Card>
          );
        })}
      </Flex>
    </>
  );
}
