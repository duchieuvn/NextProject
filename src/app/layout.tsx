"use client";
import { Inter } from "next/font/google";
import { Layout } from "antd";

import StyledComponentsRegistry from "../lib/AntdRegistry";
import NavBar from "@/containers/NavBar";

const inter = Inter({ subsets: ["latin"] });
const { Header, Content, Footer } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              <NavBar />
            </Header>
            <Content
              style={{
                background: "white",
              }}
            >
              {children}
            </Content>
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
