export default function Tokushoho() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">特定商取引法に基づく表記</h1>
      <p className="mt-3 text-gray-600">
        本ページは「オンラインカウンセリング KOMOREBI」に関する特定商取引法に基づく表記です。
      </p>

      <div className="mt-8 rounded-2xl border bg-white p-6">
        <dl className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Item label="販売事業者" value="DECOST株式会社" />
          <Item label="サービス名" value="KOMOREBI（こもれび）オンラインカウンセリング" />
          <Item label="販売価格" value="各サービスページの料金表示をご参照ください。" />
          <Item label="商品代金以外の必要料金" value="通信料等はお客様のご負担となります。" />
          <Item label="お支払い方法" value="クレジットカード" />
          <Item label="お支払い時期" value="予約確定時にお支払いが確定します。" />
          <Item label="提供時期" value="ご予約日時にオンラインで提供します。" />
          <Item
            label="キャンセル・返金について"
            value="キャンセルポリシーは予約時に表示される条件に従います。提供済みサービスの返金は原則できません。"
          />
          <Item label="お問い合わせ" value="お問い合わせフォームよりご連絡ください。" />
        </dl>

        <p className="mt-6 text-sm text-gray-500">
          ※内容は予告なく変更される場合があります。最新情報は本ページをご確認ください。
        </p>
      </div>
    </section>
  );
}

function Item({ label, value }) {
  return (
    <div className="border-b pb-4 md:border-b-0 md:pb-0">
      <dt className="text-sm font-semibold text-gray-700">{label}</dt>
      <dd className="mt-1 text-gray-900">{value}</dd>
    </div>
  );
}
