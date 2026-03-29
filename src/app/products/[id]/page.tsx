"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const product = getProductById(params.id as string);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">상품을 찾을 수 없습니다</h1>
        <Link href="/products" className="text-black underline">
          상품 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("사이즈를 선택해주세요.");
      return;
    }
    if (!selectedColor) {
      alert("색상을 선택해주세요.");
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("사이즈를 선택해주세요.");
      return;
    }
    if (!selectedColor) {
      alert("색상을 선택해주세요.");
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    router.push("/cart");
  };

  const averageRating = product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length;

  // 관련 상품 (같은 카테고리)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 브레드크럼 */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-black">전체상품</Link>
        <span className="mx-2">/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-black">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 이미지 섹션 */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-24 rounded-lg overflow-hidden ${
                    currentImageIndex === index ? "ring-2 ring-black" : ""
                  }`}
                >
                  <Image src={image} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 상품 정보 섹션 */}
        <div className="space-y-6">
          <div>
            <span className="text-sm text-gray-500">{product.category}</span>
            <h1 className="text-2xl font-bold mt-1">{product.name}</h1>
          </div>

          {/* 가격 */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">{product.price.toLocaleString()}원</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  {product.originalPrice.toLocaleString()}원
                </span>
                <span className="text-red-500 font-semibold">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>

          {/* 별점 */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>{star <= Math.round(averageRating) ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="text-gray-600">{averageRating.toFixed(1)}</span>
            <span className="text-gray-400">({product.reviews.length}개 리뷰)</span>
          </div>

          <hr />

          {/* 색상 선택 */}
          <div>
            <p className="font-medium mb-3">색상 {selectedColor && <span className="text-gray-500">: {selectedColor}</span>}</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg transition-colors ${
                    selectedColor === color
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* 사이즈 선택 */}
          <div>
            <p className="font-medium mb-3">사이즈 {selectedSize && <span className="text-gray-500">: {selectedSize}</span>}</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 border rounded-lg font-medium transition-colors ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* 수량 */}
          <div>
            <p className="font-medium mb-3">수량</p>
            <div className="flex items-center border border-gray-300 rounded-lg w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* 총 금액 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">총 상품 금액</span>
              <span className="text-2xl font-bold">{(product.price * quantity).toLocaleString()}원</span>
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-4 border-2 border-black text-black font-semibold hover:bg-gray-100 transition-colors rounded-lg"
            >
              장바구니
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors rounded-lg"
            >
              바로 구매
            </button>
          </div>

          {/* 장바구니 추가 메시지 */}
          {showAddedMessage && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
              장바구니에 상품이 추가되었습니다!
            </div>
          )}

          {/* 상품 설명 */}
          <div className="pt-6 border-t">
            <h3 className="font-bold mb-3">상품 설명</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* 배송 정보 */}
          <div className="pt-6 border-t space-y-2 text-sm text-gray-600">
            <p>• 50,000원 이상 구매 시 무료배송</p>
            <p>• 평일 오후 2시 이전 결제 완료 시 당일 발송</p>
            <p>• 교환/반품: 수령 후 7일 이내 가능</p>
          </div>
        </div>
      </div>

      {/* 리뷰 섹션 */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">고객 리뷰 ({product.reviews.length})</h2>
        <div className="space-y-6">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{review.author}</span>
                  <div className="flex text-yellow-400 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>{star <= review.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 관련 상품 */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">관련 상품</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-3">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{p.name}</h3>
                <span className="font-bold">{p.price.toLocaleString()}원</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
