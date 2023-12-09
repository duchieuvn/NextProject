"use client";
import { Inter } from "next/font/google";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import {
  FundViewOutlined,
  FileDoneOutlined,
  GoldOutlined,
} from "@ant-design/icons";

import { useState } from "react";

import StyledComponentsRegistry from "../lib/AntdRegistry";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState("home");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <Layout className="layout">
            <Header
              style={{
                padding: 0,
                lineHeight: "50px",
                height: "auto",
              }}
            >
              <nav>
                <Menu
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                />
              </nav>
            </Header>
            <Content>{children}</Content>
            <Footer>
              <p>
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </p>
            </Footer>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
