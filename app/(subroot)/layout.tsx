import type { Metadata } from "next";

import PageLayout from "@/layouts/pageLayout";

export const metadata: Metadata = {
  title: "Shawon Telecom WLL - Mobile wholesale accessories",
  description: "Shawon Telecom WLL - Mobile wholesale accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout root={false}>{children}</PageLayout>;
}
