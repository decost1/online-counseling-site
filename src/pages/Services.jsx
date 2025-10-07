// src/pages/Services.jsx
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-slate-800">
      {/* ===== Hero ===== */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            サービス紹介
          </h1>
          <p className="text-slate-600">
            KOMOREBIでは、こころの不調や人間関係、キャリアの悩みなど、
            ひとりひとりに寄り添ったカウンセリングを行っています。
          </p>
        </div>
      </section>

      {/* ===== サービス一覧 ===== */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* 個人カウンセリング */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2">個人カウンセリング</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              気分の落ち込み・不安・職場ストレス・恋愛・家族関係など、
              あなたのペースで安心して話せる時間を提供します。
            </p>
          </div>

          {/* キャリア・ライフ相談 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2">キャリア・ライフ相談</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              転職やキャリアチェンジ、育児と仕事の両立など、
              女性ならではの視点からライフプランを一緒に整理します。
            </p>
          </div>

          {/* カップル・家族カウンセリング */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2">カップル・家族カウンセリング</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              パートナーや家族との関係性をより良くするために、
              対話を中心としたカウンセリングを行います。
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA（誘導） ===== */}
      <section className="py-12 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            あなたに合ったカウンセリングを見つけましょう
          </h3>
          <p className="text-slate-600 mb-6">
            初回ヒアリングは無料。お気軽にお問い合わせください。
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            予約・相談をはじめる
          </Link>
        </div>
      </section>
    </div>
  );
}
