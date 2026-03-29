export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <p className="text-gray-600 leading-relaxed">
          멘즈웨어(이하 &quot;회사&quot;)는 개인정보 보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
          개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
        </p>

        <section>
          <h2 className="text-xl font-bold mb-4">1. 개인정보의 수집 및 이용목적</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>회원 가입 및 관리:</strong> 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정이용 방지, 각종 고지·통지, 고충처리 등</li>
            <li><strong>재화 또는 서비스 제공:</strong> 물품배송, 서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제·정산 등</li>
            <li><strong>마케팅 및 광고 활용:</strong> 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공, 서비스의 유효성 확인 등</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. 수집하는 개인정보 항목</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>필수항목:</strong> 성명, 이메일주소, 비밀번호, 휴대전화번호, 주소</li>
            <li><strong>선택항목:</strong> 생년월일, 성별</li>
            <li><strong>자동수집항목:</strong> IP주소, 쿠키, 접속로그, 서비스 이용기록</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. 개인정보의 보유 및 이용기간</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>회원 정보: 회원 탈퇴 시까지 (단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보존)</li>
            <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
            <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
            <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. 개인정보의 파기</h2>
          <p className="text-gray-600 leading-relaxed">
            회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">5. 개인정보의 제3자 제공</h2>
          <p className="text-gray-600 leading-relaxed">
            회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>이용자들이 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">6. 개인정보의 처리 위탁</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left font-medium">수탁업체</th>
                  <th className="py-2 text-left font-medium">위탁업무 내용</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-2">CJ대한통운</td>
                  <td className="py-2">상품 배송</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">토스페이먼츠</td>
                  <td className="py-2">결제 처리</td>
                </tr>
                <tr>
                  <td className="py-2">카카오</td>
                  <td className="py-2">알림톡 발송</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">7. 이용자 및 법정대리인의 권리와 행사방법</h2>
          <p className="text-gray-600 leading-relaxed">
            이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리정지 요구</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">8. 개인정보 보호책임자</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg text-gray-600">
            <p><strong>개인정보 보호책임자</strong></p>
            <p>성명: 홍길동</p>
            <p>직책: 대표</p>
            <p>연락처: 02-1234-5678</p>
            <p>이메일: privacy@menswear.co.kr</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">9. 개인정보의 안전성 확보조치</h2>
          <p className="text-gray-600 leading-relaxed">
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
            <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
            <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">10. 개인정보처리방침의 변경</h2>
          <p className="text-gray-600 leading-relaxed">
            이 개인정보처리방침은 2026년 1월 1일부터 적용됩니다. 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
