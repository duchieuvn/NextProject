import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
  FundViewOutlined,
  FileDoneOutlined,
  GoldOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
const items: MenuProps["items"] = [
  {
    label: <Link href="/">Tổng quan</Link>,
    key: "home",
    icon: <FundViewOutlined />,
  },
  {
    label: <Link href="/orders">Đơn hàng</Link>,
    key: "order",
    icon: <FileDoneOutlined />,
  },
  {
    label: <Link href="/products">Sản phẩm</Link>,
    key: "product",
    icon: <GoldOutlined />,
  },
];

export default function NavBar() {
  const [current, setCurrent] = useState("home");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <nav>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </nav>
  );
}
