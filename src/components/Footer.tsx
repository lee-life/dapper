import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* 메인 푸터 */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-black mb-4">DAPPER</h3>
            <div className="text-[11px] text-gray-500 space-y-0.5 leading-relaxed">
              <p>상호: Boldgrit | 대표: 이진혁</p>
              <p>사업자등록번호: 405-52-01130 <button className="underline ml-1">사업자정보확인</button></p>
              <p>통신판매업신고: 제2026-서울성동-0477호</p>
              <p>주소: 서울 송정동 73-950</p>
              <p>개인정보보호책임자: 이진혁</p>
            </div>
          </div>

          {/* 고객센터 */}
          <div>
            <h4 className="text-xs font-bold mb-3 text-gray-800">고객센터</h4>
            <p className="text-xl font-bold mb-1">02-1234-5678</p>
            <div className="text-[11px] text-gray-500 space-y-0.5">
              <p>평일 10:00 - 18:00</p>
              <p>점심 12:30 - 13:30</p>
              <p>주말/공휴일 휴무</p>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="text-[11px] px-3 py-1.5 border border-gray-300 hover:border-black transition-colors">
                1:1 문의
              </button>
              <button className="text-[11px] px-3 py-1.5 border border-gray-300 hover:border-black transition-colors">
                카톡 상담
              </button>
            </div>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="text-xs font-bold mb-3 text-gray-800">이용안내</h4>
            <ul className="text-[11px] text-gray-500 space-y-1.5">
              <li><Link href="/about" className="hover:text-black transition-colors">회사소개</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-colors">이용약관</Link></li>
              <li><Link href="/privacy" className="hover:text-black transition-colors font-medium text-gray-700">개인정보처리방침</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">배송/교환/반품 안내</a></li>
              <li><a href="#" className="hover:text-black transition-colors">자주 묻는 질문</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 하단 */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[10px] text-gray-400">
              &copy; 2026 DAPPER. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
