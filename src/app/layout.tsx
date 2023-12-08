"use client";
import { Inter } from "next/font/google";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import { FundViewOutlined, FileDoneOutlined } from "@ant-design/icons";

import { useState } from "react";

import StyledComponentsRegistry from "../lib/AntdRegistry";
import "./globals.css";
import Home from "./page";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  {
    label: <Link href="/">Tổng quan</Link>,
    key: "home",
    icon: <FundViewOutlined />,
  },
  {
    label: <Link href="/order">Đơn hàng</Link>,
    key: "order",
    icon: <FileDoneOutlined />,
  },
  {
    label: "Sản phẩm",
    key: "product",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Layout className="layout">
            <nav>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
              />
            </nav>
            ;
            {/* <Header style={{ display: "flex", alignItems: "center" }}>
              <Menu />
            </Header> */}
            {children}
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
