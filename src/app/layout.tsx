import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MenuBar from "@/components/MenuBar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuBar />
        {children}
        <div className="fixed right-0 bottom-0 w-60 h-60">
          <Image src="/cover/medical-5459630_1280.png" alt="support" fill />
        </div>
      </body>
    </html>
  );
}
