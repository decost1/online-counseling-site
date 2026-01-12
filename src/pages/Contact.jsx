// src/pages/Contact.jsx
export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">お問い合わせ</h1>
      <p className="text-slate-600 mb-8">
        KOMOREBI（こもれび）オンラインカウンセリングへのお問い合わせはこちらからお願いいたします。
        サービス内容・料金・ご利用方法など、お気軽にご相談ください。
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">お名前</label>
          <input
            type="text"
            className="w-full rounded-lg border px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">メールアドレス</label>
          <input
            type="email"
            className="w-full rounded-lg border px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">お問い合わせ種別</label>
          <select className="w-full rounded-lg border px-3 py-2">
            <option>サービス内容について</option>
            <option>料金について</option>
            <option>カウンセリングについて</option>
            <option>予約・日程について</option>
            <option>その他</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">お問い合わせ内容</label>
          <textarea
            rows="5"
            className="w-full rounded-lg border px-3 py-2"
            placeholder="ご質問やご不明点をご記入ください。"
            required
          />
        </div>

        <button className="rounded-xl bg-emerald-700 px-6 py-3 text-white font-medium hover:bg-emerald-800">
          送信する
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500">
        ※通常2営業日以内にご返信いたします。<br />
        ※緊急性の高いご相談には対応できません。
      </p>
    </section>
  );
}
