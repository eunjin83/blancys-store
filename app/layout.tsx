import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./components/CartContext";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BLANCYS | 블랑시스",
    template: "%s | BLANCYS",
  },
  description:
    "BLANCYS 블랑시스 공식 온라인 스토어. 일상에 자연스럽게 스며드는 감각적인 디자인의 가방과 액세서리를 만나보세요.",
  keywords: [
    "BLANCYS",
    "블랑시스",
    "블랑시스 가방",
    "여성 가방",
    "숄더백",
    "호보백",
    "백팩",
    "가방 브랜드",
  ],
  openGraph: {
    title: "BLANCYS | 블랑시스",
    description:
      "BLANCYS 블랑시스 공식 온라인 스토어. 일상에 자연스럽게 스며드는 감각적인 디자인의 가방과 액세서리를 만나보세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "BLANCYS",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>

      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
         <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
