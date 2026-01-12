// src/pages/Privacy.jsx
export default function Privacy() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* タイトル */}
        <h1 className="text-3xl font-bold mb-4">プライバシーポリシー</h1>
        <p className="text-slate-600 mb-10">
          KOMOREBI（オンラインカウンセリング）は、個人情報の重要性を認識し、
          以下の方針に基づき適切な管理と保護に努めます。
        </p>

        {/* 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">1. 取得する情報</h2>
          <p className="mb-3">
            当サービスでは、以下の情報を取得する場合があります。
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>氏名、メールアドレス、電話番号等の連絡先情報</li>
            <li>お問い合わせ・予約時に入力いただく内容</li>
            <li>サービス提供に必要な範囲の相談内容（任意入力を含む）</li>
            <li>アクセス情報（IPアドレス、ブラウザ情報、閲覧履歴等）</li>
          </ul>
        </section>

        {/* 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">2. 利用目的</h2>
          <p className="mb-3">
            取得した情報は、以下の目的で利用します。
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>予約受付・日程調整・サービス提供のため</li>
            <li>お問い合わせ対応のため</li>
            <li>本人確認、不正利用防止、セキュリティ確保のため</li>
            <li>サービス改善、品質向上、利用状況分析のため</li>
            <li>必要に応じた重要なお知らせの送付のため</li>
          </ul>
        </section>

        {/* 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">3. 第三者提供</h2>
          <p>
            法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供することはありません。
          </p>
        </section>

        {/* 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">4. 委託</h2>
          <p>
            予約管理、決済、メール配信、アクセス解析等の業務を外部事業者へ
            委託する場合があります。その場合、委託先の選定と監督を適切に行います。
          </p>
        </section>

        {/* 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">5. 安全管理</h2>
          <p>
            個人情報への不正アクセス、漏えい、改ざん、紛失等を防止するため、
            合理的な安全管理措置を講じます。
          </p>
        </section>

        {/* 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">6. 保管期間</h2>
          <p>
            個人情報は、利用目的の達成に必要な期間保管し、
            不要となった場合は適切な方法で廃棄します。
          </p>
        </section>

        {/* 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">
            7. 開示・訂正・削除等
          </h2>
          <p>
            本人からの個人情報の開示、訂正、利用停止、削除等の請求があった場合、
            本人確認の上、適切に対応します。
          </p>
        </section>
      </div>
    </section>
  );
}
