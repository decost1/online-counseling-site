// src/pages/HowTo.jsx
import { Link } from "react-router-dom";

export default function HowTo() {
  const cards = [
    {
      title: "1. 予約する",
      body: "ご希望の日時を選んで予約します。事前に簡単なヒアリングをご入力ください。",
      cta: { label: "予約ページへ", to: "/booking" },
    },
    {
      title: "2. 当日オンラインで相談",
      body: "予約時間になったらオンラインで相談を開始します。落ち着ける場所からご参加ください。",
      cta: { label: "カウンセラーを見る", to: "/counselors" },
    },
    {
      title: "3. 振り返り・次回の検討",
      body: "相談後は、必要に応じて次回の予約や相談テーマの整理を行います。",
      cta: { label: "料金を見る", to: "/pricing" },
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold">はじめての方へ</h1>
        <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
          KOMOREBIは、オンラインで安心して相談できるカウンセリングサービスです。
          はじめての方が迷わないように、ご利用の流れとよくある不安をまとめました。
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
            >
              <h2 className="text-lg font-bold">{c.title}</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">{c.body}</p>
              <div className="mt-5">
                <Link
                  to={c.cta.to}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  {c.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold">よくある不安</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">
            <li>何を話せばいいかわからない → うまく言葉にできなくても大丈夫です。</li>
            <li>相談内容がまとまっていない → 今の気持ちをそのままお話しください。</li>
            <li>不安が強い → 無理のないペースで進めます。</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-slate-300 text-slate-700 hover:bg-white"
            >
              FAQを見る
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
