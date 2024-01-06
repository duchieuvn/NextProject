"use client";
import { Button, Flex, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  FundViewOutlined,
  FileDoneOutlined,
  GoldOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/icon.png";
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
  const [navSelected, setNavSelected] = useState("home");
  const navClick: MenuProps["onClick"] = (e) => {
    setNavSelected(e.key);
  };
  return (
    <nav>
      <Flex
        vertical={false}
        style={{
          backgroundColor: "white",
          alignItems: "center",
          paddingLeft: 80,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
          }}
        >
          <Image
            src={LogoImage.src}
            alt="Picture of the author"
            height={30}
            width={100}
          />
        </Link>
        <Menu
          style={{
            backgroundColor: "inherit",
            color: "#393a35",
            fontWeight: "bold",
          }}
          onClick={navClick}
          selectedKeys={[navSelected]}
          mode="horizontal"
          items={items}
        />
        <Link href="/orders/create">
          <Button onClick={() => setNavSelected("")}>Tạo đơn hàng</Button>
        </Link>
      </Flex>
    </nav>
  );
}
