import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Levy Jr. | Software Developer",
  description: "Full-Stack web developer with 2+ years of experience building production-ready e-commerce projects, landing page and institutional websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
