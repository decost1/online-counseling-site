// src/pages/Flow.jsx
import { Link } from "react-router-dom";

export default function Flow() {
  const steps = [
    {
      n: "01",
      title: "予約・事前ヒアリング",
      body: "予約ページから日時を選択し、簡単な事前ヒアリングを入力します。",
    },
    {
      n: "02",
      title: "当日：オンライン相談",
      body: "予約時間になったら相談を開始。安心して話せる場所からご参加ください。",
    },
    {
      n: "03",
      title: "振り返り・次回の検討",
      body: "相談後は必要に応じて、次回の予約やテーマの整理を行います。",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold">ご利用の流れ</h1>
        <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
          はじめての方でも迷わないように、予約から相談までの流れをまとめました。
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
            >
              <div className="text-emerald-700 font-extrabold tracking-wider">
                {s.n}
              </div>
              <h2 className="mt-2 text-lg font-bold">{s.title}</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
          >
            予約・相談をはじめる
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            よくある質問を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
