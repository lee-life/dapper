"use client";

import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const shippingFee = totalPrice >= 50000 ? 0 : 3000;
  const finalTotal = totalPrice + shippingFee;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-2xl font-bold mb-4">장바구니가 비어있습니다</h1>
        <p className="text-gray-600 mb-8">마음에 드는 상품을 담아보세요!</p>
        <Link
          href="/products"
          className="inline-block bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors"
        >
          쇼핑 계속하기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">장바구니</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 장바구니 상품 목록 */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}-${item.color}`}
              className="flex gap-4 p-4 border rounded-lg"
            >
              {/* 상품 이미지 */}
              <Link href={`/products/${item.product.id}`} className="flex-shrink-0">
                <div className="relative w-24 h-32 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              {/* 상품 정보 */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <Link href={`/products/${item.product.id}`} className="font-medium hover:underline">
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.color} / {item.size}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  {/* 수량 조절 */}
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 min-w-[40px] text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* 가격 */}
                  <div className="text-right">
                    <p className="font-bold">{(item.product.price * item.quantity).toLocaleString()}원</p>
                    {item.quantity > 1 && (
                      <p className="text-sm text-gray-500">
                        개당 {item.product.price.toLocaleString()}원
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 전체 삭제 */}
          <div className="flex justify-end">
            <button
              onClick={clearCart}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              장바구니 비우기
            </button>
          </div>
        </div>

        {/* 주문 요약 */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-4">주문 요약</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">상품 금액</span>
                <span>{totalPrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">배송비</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-green-600">무료</span>
                  ) : (
                    `${shippingFee.toLocaleString()}원`
                  )}
                </span>
              </div>
              {totalPrice < 50000 && (
                <p className="text-xs text-gray-500">
                  {(50000 - totalPrice).toLocaleString()}원 더 구매하시면 무료배송!
                </p>
              )}
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>총 결제 금액</span>
              <span>{finalTotal.toLocaleString()}원</span>
            </div>

            <button
              className="w-full bg-black text-white py-4 font-semibold hover:bg-gray-800 transition-colors rounded-lg"
              onClick={() => alert("결제 기능은 준비 중입니다.")}
            >
              결제하기
            </button>

            <Link
              href="/products"
              className="block text-center mt-4 text-gray-600 hover:text-black text-sm"
            >
              쇼핑 계속하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
