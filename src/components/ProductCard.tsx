"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  showRank?: number;
}

export default function ProductCard({ product, showRank }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] mb-2">
          <Image
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
          />

          {/* 랭킹 */}
          {showRank && (
            <div className="absolute top-0 left-0 w-6 h-6 bg-black text-white text-[11px] font-bold flex items-center justify-center">
              {showRank}
            </div>
          )}

          {/* 배지 */}
          {product.tags && product.tags.length > 0 && (
            <div className="absolute top-1 right-1 flex flex-col gap-0.5">
              {product.tags.includes("BEST") && (
                <span className="bg-[#ff3b3b] text-white text-[9px] px-1 py-0.5">BEST</span>
              )}
              {product.tags.some(t => t.includes("신상")) && (
                <span className="bg-[#00c73c] text-white text-[9px] px-1 py-0.5">NEW</span>
              )}
            </div>
          )}
        </div>
      </Link>

      <div className="px-0.5">
        <Link href={`/products/${product.id}`}>
          <p className="text-[12px] text-[#333] leading-[1.4] mb-1 line-clamp-2">
            {product.name}
          </p>
        </Link>

        <div className="flex items-center gap-1">
          {discountPercent > 0 && (
            <span className="text-[#ff3b3b] text-[13px] font-bold">{discountPercent}%</span>
          )}
          <span className="text-[13px] font-bold text-[#111]">
            {product.price.toLocaleString()}원
          </span>
        </div>

        {product.originalPrice && (
          <p className="text-[11px] text-[#999] line-through">
            {product.originalPrice.toLocaleString()}원
          </p>
        )}
      </div>
    </div>
  );
}
