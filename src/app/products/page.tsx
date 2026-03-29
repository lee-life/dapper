"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

function ProductList() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "전체");
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = selectedCategory === "전체"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const categoryNameMap: { [key: string]: string } = {
    "전체": "ALL ITEMS",
    "상의": "TOP",
    "하의": "BOTTOM",
    "아우터": "OUTER"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 브레드크럼 */}
      <nav className="text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-black">HOME</Link>
        <span className="mx-2">/</span>
        <span className="text-black">{categoryNameMap[selectedCategory] || selectedCategory}</span>
      </nav>

      {/* 페이지 타이틀 */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold mb-2">
          {categoryNameMap[selectedCategory] || selectedCategory}
        </h1>
        <p className="text-sm text-gray-500">{sortedProducts.length} items</p>
      </div>

      {/* 필터 & 정렬 */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-gray-100">
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs transition-colors ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-black"
              }`}
            >
              {categoryNameMap[category] || category}
            </button>
          ))}
        </div>

        {/* 정렬 */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 text-xs border border-gray-200 focus:outline-none focus:border-black bg-white"
        >
          <option value="latest">최신순</option>
          <option value="price-low">낮은 가격순</option>
          <option value="price-high">높은 가격순</option>
          <option value="name">상품명순</option>
        </select>
      </div>

      {/* 상품 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 상품이 없을 때 */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">해당 카테고리에 상품이 없습니다.</p>
          <button
            onClick={() => setSelectedCategory("전체")}
            className="text-sm text-black underline"
          >
            전체 상품 보기
          </button>
        </div>
      )}

      {/* 더보기 버튼 */}
      {sortedProducts.length > 0 && (
        <div className="text-center mt-12">
          <button className="border border-black px-12 py-3 text-sm hover:bg-black hover:text-white transition-colors">
            VIEW MORE
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
      <ProductList />
    </Suspense>
  );
}
