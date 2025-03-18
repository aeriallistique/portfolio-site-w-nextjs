import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "./components/Navbar";

const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ['200', '400', '700'] });

export const metadata: Metadata = {
  title: "Andrei TAZLAUANU",
  description: "My portfolio site",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={robotoSlab.className}>
          <div className="max-w-screen h-screen flex flex-col bg-white">
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
