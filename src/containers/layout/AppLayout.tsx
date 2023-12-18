"use client";
import { Layout } from "antd";

import NavBar from "@/components/NavBar";

const { Header, Content, Footer } = Layout;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="layout">
      <Header
        style={{
          padding: 0,
          lineHeight: "50px",
          height: "auto",
        }}
      >
        <NavBar />
      </Header>
      <Content
        style={{
          background: "white",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {children}
      </Content>
      <Footer>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </Footer>
    </Layout>
  );
}
