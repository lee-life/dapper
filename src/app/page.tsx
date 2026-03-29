import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      {/* 메인 배너 */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/banners/main-banner.jpg"
          alt="Main"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <p className="text-[11px] tracking-[3px] mb-3">2026 NEW COLLECTION</p>
          <h1 className="text-[28px] md:text-[36px] font-medium mb-2">
            편하게, 멋있게
          </h1>
          <p className="text-[13px] text-white/80 mb-6">2026 SPRING COLLECTION</p>
          <Link
            href="/products"
            className="border border-white text-[12px] px-6 py-2 hover:bg-white hover:text-black transition-all"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* BEST 상품 */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[15px] font-bold mb-1">BEST ITEM</h2>
            <p className="text-[11px] text-[#888]">가장 많이 찾는 인기 상품</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {products.slice(0, 4).map((product, idx) => (
              <ProductCard key={product.id} product={product} showRank={idx + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* 카테고리 배너 */}
      <section className="bg-[#f8f8f8] py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <Link href="/products?category=상의" className="relative aspect-[4/5] overflow-hidden group">
              <Image
                src="/images/banners/category-top.jpg"
                alt="상의"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-[14px] font-medium">TOP</p>
              </div>
            </Link>
            <Link href="/products?category=하의" className="relative aspect-[4/5] overflow-hidden group">
              <Image
                src="/images/banners/category-bottom.jpg"
                alt="하의"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-[14px] font-medium">BOTTOM</p>
              </div>
            </Link>
            <Link href="/products?category=아우터" className="relative aspect-[4/5] overflow-hidden group">
              <Image
                src="/images/banners/category-outer.jpg"
                alt="아우터"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-[14px] font-medium">OUTER</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW 상품 */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[15px] font-bold mb-1">NEW ARRIVAL</h2>
            <p className="text-[11px] text-[#888]">새로 입고된 상품</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {products.slice(2, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-block border border-[#333] text-[12px] px-8 py-2.5 hover:bg-[#333] hover:text-white transition-all"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* 중간 배너 */}
      <section className="relative h-[200px] md:h-[280px]">
        <Image
          src="/images/banners/event-banner.jpg"
          alt="Event"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <p className="text-[10px] tracking-[2px] mb-2">MEMBER ONLY</p>
          <h2 className="text-[20px] md:text-[26px] font-medium mb-1">
            신규가입 15% 할인
          </h2>
          <p className="text-[12px] text-white/70">가입 즉시 쿠폰 지급</p>
        </div>
      </section>

      {/* 전체 상품 */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[15px] font-bold mb-1">ALL ITEMS</h2>
            <p className="text-[11px] text-[#888]">전체 상품 보기</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-block border border-[#333] text-[12px] px-8 py-2.5 hover:bg-[#333] hover:text-white transition-all"
            >
              MORE
            </Link>
          </div>
        </div>
      </section>

      {/* 하단 안내 */}
      <section className="border-t border-[#eee] py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-[11px] text-[#333] font-medium">무료배송</p>
              <p className="text-[10px] text-[#999] mt-0.5">5만원 이상</p>
            </div>
            <div>
              <p className="text-[11px] text-[#333] font-medium">당일출고</p>
              <p className="text-[10px] text-[#999] mt-0.5">16시 이전</p>
            </div>
            <div>
              <p className="text-[11px] text-[#333] font-medium">무료교환</p>
              <p className="text-[10px] text-[#999] mt-0.5">7일 이내</p>
            </div>
            <div>
              <p className="text-[11px] text-[#333] font-medium">카톡상담</p>
              <p className="text-[10px] text-[#999] mt-0.5">10-18시</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
