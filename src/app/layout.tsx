"use client";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import AppLayout from "@/containers/layout/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <AppLayout>{children}</AppLayout>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
