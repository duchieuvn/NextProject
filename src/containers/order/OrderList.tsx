"use client";
import { getOrdersAPI } from "@/api/apiOrders";
import { ORDERS_QUERY_KEY } from "@/constants/query/keys";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "antd";

import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

export default function OrderList() {
  const { data, isLoading } = useQuery({
    queryKey: [ORDERS_QUERY_KEY],
    queryFn: getOrdersAPI,
  });
  console.log("don hang \n", data);

  return (
    <Flex gap="small" vertical>
      <h2>Tất cả đơn hàng</h2>
      {data?.map((order) => {
        const items: DescriptionsProps["items"] = [
          {
            key: "customer_name",
            label: "Tên khách hàng",
            children: order.customer_name,
          },
          {
            key: "phone_number",
            label: "Số điện thoại",
            children: order.phone_number,
          },
          {
            key: "location",
            label: "Địa chỉ",
            children: order.location,
          },
          {
            key: "ship_price",
            label: "Tiền ship",
            children: order.ship_price,
          },
          {
            key: "expected_date",
            label: "Ngày giao hàng",
            children: null,
          },
          {
            key: "is_paid",
            label: "Tình trạng thanh toán",
            children: order.is_paid,
          },
          {
            key: "is_delivered",
            label: "Tình trạng vận chuyển",
            children: order.is_delivered,
          },
          {
            key: "total_price",
            label: "Tổng tiền hàng",
            children: "132.000 VND",
          },
        ];
        return (
          <Descriptions
            key={order.id}
            title={order.customer_name}
            items={items}
          />
        );
      })}
    </Flex>
  );
}
