"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* 상단 프로모션 배너 */}
      <div className="bg-black text-white text-center py-2.5 text-xs">
        <span className="hidden sm:inline">🎁 신규가입 즉시 <strong className="text-yellow-300">15% 할인쿠폰</strong> 지급 | </span>
        <span>16시 이전 주문 시 <strong>당일출고</strong></span>
        <span className="hidden sm:inline"> | 5만원↑ <strong>무료배송</strong></span>
      </div>

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* 메인 헤더 */}
          <div className="flex items-center justify-between h-14">
            {/* 모바일 메뉴 버튼 */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* 로고 */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-black tracking-tight">DAPPER</span>
            </Link>

            {/* 데스크탑 네비게이션 */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/products" className="text-[13px] text-gray-700 hover:text-black transition-colors">
                전체상품
              </Link>
              <Link href="/products?category=상의" className="text-[13px] text-gray-700 hover:text-black transition-colors">
                상의
              </Link>
              <Link href="/products?category=하의" className="text-[13px] text-gray-700 hover:text-black transition-colors">
                하의
              </Link>
              <Link href="/products?category=아우터" className="text-[13px] text-gray-700 hover:text-black transition-colors">
                아우터
              </Link>
              <span className="text-[13px] text-red-500 font-medium">SALE</span>
            </nav>

            {/* 우측 아이콘들 */}
            <div className="flex items-center space-x-1">
              {/* 검색 */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* 로그인 */}
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors hidden sm:block">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* 장바구니 */}
              <Link href="/cart" className="p-2 hover:bg-gray-50 rounded-full transition-colors relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* 검색바 */}
          {isSearchOpen && (
            <div className="py-3 border-t border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="찾으시는 상품을 검색해보세요"
                  className="w-full px-4 py-2.5 bg-gray-50 text-sm focus:outline-none focus:bg-gray-100 transition-colors"
                  autoFocus
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="mt-2 flex items-center gap-3 text-xs">
                <span className="text-gray-400">추천:</span>
                <button className="text-gray-600 hover:text-black">반팔티</button>
                <button className="text-gray-600 hover:text-black">데님</button>
                <button className="text-gray-600 hover:text-black">슬랙스</button>
                <button className="text-gray-600 hover:text-black">자켓</button>
              </div>
            </div>
          )}

          {/* 모바일 메뉴 */}
          {isMenuOpen && (
            <nav className="lg:hidden py-3 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                <Link href="/products" className="text-sm text-gray-700 hover:text-black py-1.5" onClick={() => setIsMenuOpen(false)}>
                  전체상품
                </Link>
                <Link href="/products?category=상의" className="text-sm text-gray-700 hover:text-black py-1.5" onClick={() => setIsMenuOpen(false)}>
                  상의
                </Link>
                <Link href="/products?category=하의" className="text-sm text-gray-700 hover:text-black py-1.5" onClick={() => setIsMenuOpen(false)}>
                  하의
                </Link>
                <Link href="/products?category=아우터" className="text-sm text-gray-700 hover:text-black py-1.5" onClick={() => setIsMenuOpen(false)}>
                  아우터
                </Link>
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <Link href="/about" className="text-sm text-gray-500 hover:text-black py-1.5 block" onClick={() => setIsMenuOpen(false)}>
                    회사소개
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
