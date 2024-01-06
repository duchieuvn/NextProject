"use client";
import { useGetOrders } from "@/hooks/order";
import { Flex, Select } from "antd";

import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { useState } from "react";

export default function OrderList() {
  const [sortBy, setSortBy] = useState("created_at");
  const { data, isLoading } = useGetOrders(sortBy);

  return (
    <Flex gap="small" vertical>
      <h2>Tất cả đơn hàng</h2>
      <Flex>
        <Select
          style={{ width: 200 }}
          placeholder="Sắp xếp theo"
          onChange={(value) => {
            setSortBy(value);
          }}
          options={[
            {
              label: "Ngày tạo",
              value: "created_at",
            },
            {
              label: "Tên khách hàng",
              value: "customer_name",
            },
          ]}
        />
      </Flex>
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
