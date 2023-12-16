"use client";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "../lib/AntdRegistry";

import AppLayout from "@/containers/layout/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <AppLayout>{children}</AppLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
