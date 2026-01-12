// src/pages/Terms.jsx
export default function Terms() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-2xl md:text-3xl font-bold">利用規約</h1>

      {/* 第1条 */}
      <div className="space-y-4">
        <h3 className="font-semibold">第1条（適用）</h3>
        <p className="leading-relaxed text-slate-700">
          本規約は、利用者と運営者（DECOST株式会社）との間の当サービス利用に関わる
          一切の関係に適用されます。
        </p>
      </div>

      {/* 第2条 */}
      <div className="space-y-4">
        <h3 className="font-semibold">第2条（サービス内容）</h3>
        <p className="leading-relaxed text-slate-700">
          当サービスは、オンラインでの相談機会を提供するものです。
          医療行為・診断・処方等を行うものではありません。
        </p>
      </div>

      {/* 第3条 */}
      <div className="space-y-4">
        <h3 className="font-semibold">第3条（禁止事項）</h3>
        <p className="leading-relaxed text-slate-700">
          利用者は以下の行為をしてはなりません。
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>法令または公序良俗に違反する行為</li>
          <li>虚偽の情報を登録・送信する行為</li>
          <li>当サービスの運営を妨害する行為</li>
          <li>第三者の権利（著作権・プライバシー等）を侵害する行為</li>
          <li>無断での録音・録画・転載は禁止転用（※運営の許可がある場合を除く）</li>
          <li>他者への誹謗中傷、迷惑行為</li>
          <li>反社会的勢力に関与する行為</li>
        </ul>
      </div>

      {/* 第4条 */}
      <div className="space-y-4">
        <h3 className="font-semibold">第4条（予約・キャンセル）</h3>
        <p className="leading-relaxed text-slate-700">
          予約は当サイトの予約ページ等から行います。
          キャンセルや日時変更は、可能な限り早めにご連絡ください。
          無断キャンセルが続く場合、利用をお断りすることがあります。
        </p>
      </div>

      {/* 第5条 */}
      <div className="space-y-4">
        <h3 className="font-semibold">第5条（料金・支払い）</h3>
        <p className="leading-relaxed text-slate-700">
          料金、支払い方法、返金条件等は、料金ページまたは
          特定商取引法に基づく表記に定めます。
        </p>
      </div>

      {/* 第6条 */}
      <div className="space-y-4">
        <h3 className="font-semibold">第6条（免責事項）</h3>
        <p className="leading-relaxed text-slate-700">
          当サービスは、利用者の状態の改善や特定の結果を保証するものではありません。
          通信環境や機器トラブル等により、サービス提供が困難となる場合があります。
        </p>
        <p className="leading-relaxed text-slate-700">
          当サービスの利用により利用者に生じた損害について、
          運営者に故意または重過失がある場合を除き、責任を負いません。
        </p>
      </div>
    </section>
  );
}
