import type { Metadata } from "next";
import { Header } from "./components/shared/Header/Header";
import { Footer } from "./components/shared/Footer/Footer";
import { Ubuntu } from "next/font/google";
import "./globals.css";


const ubuntu = Ubuntu({ 
  weight: ["300","500","700"],
  subsets: ["latin-ext"]
 });

export const metadata: Metadata = {
  title: "Whereitis?",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
