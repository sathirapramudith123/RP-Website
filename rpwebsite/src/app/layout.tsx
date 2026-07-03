import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: `${site.projectId} · ${site.title}`,
  description: site.subtitle,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}