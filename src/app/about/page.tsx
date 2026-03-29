import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600"
            alt="About hero"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MENSWEAR</h1>
          <p className="text-xl text-gray-200">트렌디한 남성 패션을 합리적인 가격으로</p>
        </div>
      </section>

      {/* 브랜드 스토리 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">브랜드 스토리</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              MENSWEAR는 2020년, &quot;모든 남성이 합리적인 가격으로 트렌디한 패션을 즐길 수 있어야 한다&quot;는
              신념 아래 시작되었습니다.
            </p>
            <p>
              우리는 고품질의 소재와 세심한 디테일에 집중하면서도, 불필요한 유통 단계를 줄여
              합리적인 가격을 실현합니다. 매 시즌 트렌드를 반영한 새로운 디자인과 함께,
              시대를 초월한 클래식 아이템까지 다양한 스타일을 제안합니다.
            </p>
            <p>
              고객 한 분 한 분의 만족이 우리의 가장 큰 목표입니다.
              MENSWEAR와 함께 자신만의 스타일을 완성해 보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">핵심 가치</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">품질</h3>
              <p className="text-gray-600">
                엄선된 소재와 꼼꼼한 마감으로 오래 입을 수 있는 제품을 만듭니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">합리적 가격</h3>
              <p className="text-gray-600">
                직접 생산과 온라인 판매로 중간 마진을 최소화합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">트렌드</h3>
              <p className="text-gray-600">
                최신 패션 트렌드를 빠르게 반영한 디자인을 제안합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 정보 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">회사 정보</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <table className="w-full text-left">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="py-4 pr-4 font-medium text-gray-900 w-32">상호명</th>
                  <td className="py-4 text-gray-600">멘즈웨어</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 font-medium text-gray-900">대표자</th>
                  <td className="py-4 text-gray-600">홍길동</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 font-medium text-gray-900">사업자등록번호</th>
                  <td className="py-4 text-gray-600">123-45-67890</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 font-medium text-gray-900">통신판매업신고</th>
                  <td className="py-4 text-gray-600">제2026-서울강남-00000호</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 font-medium text-gray-900">주소</th>
                  <td className="py-4 text-gray-600">서울특별시 강남구 테헤란로 123, 4층</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 font-medium text-gray-900">이메일</th>
                  <td className="py-4 text-gray-600">contact@menswear.co.kr</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 font-medium text-gray-900">고객센터</th>
                  <td className="py-4 text-gray-600">02-1234-5678 (평일 10:00 - 18:00)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">MENSWEAR와 함께하세요</h2>
          <p className="text-gray-300 mb-8">지금 바로 트렌디한 남성 패션을 만나보세요.</p>
          <Link
            href="/products"
            className="inline-block bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors"
          >
            쇼핑 시작하기
          </Link>
        </div>
      </section>
    </div>
  );
}
