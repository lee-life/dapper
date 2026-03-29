import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "MENSWEAR - 남성 의류 전문 쇼핑몰",
  description: "트렌디하고 합리적인 가격의 남성 의류 전문 쇼핑몰입니다. 상의, 하의, 아우터 등 다양한 남성 패션 아이템을 만나보세요.",
  keywords: "남성의류, 남자옷, 남성패션, 티셔츠, 청바지, 자켓, 코트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
