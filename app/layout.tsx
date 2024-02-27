"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppContextProvider } from "@/states";

import "@/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Rihla",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppContextProvider>
                    {children}
                </AppContextProvider>
            </body>
        </html>
    );
}
