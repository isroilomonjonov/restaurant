import Navbar from "@/components/Navbar/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Restaurant Layout</title>
      <meta name="description" content="Restaurant about web site" />
      <meta http-equiv="X-UA-Compatible" content="IE=7" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="keywords" content="Restaurant, Foods, WebSite" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
