// src/pages/Home.jsx
console.log("🟢 Home render");

import { Link } from "react-router-dom";
import FlowCard from "../components/FlowCard";
import FeatureCard from "../components/FeatureCard";
// --- 追加ここから ---
import { useEffect, useState } from "react";
import { sanity } from "../../komorebi/lib/sanityClient";
import { siteSettingsQuery } from "../../komorebi/lib/queries";
// --- 追加ここまで ---


export default function Home() {
// --- 追加ここから ---
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    sanity
      .fetch(siteSettingsQuery)
      .then((data) => { if (!ignore) setSettings(data); })
      .catch((e) => setError(e?.message ?? String(e)))
      .finally(() => setLoading(false));
    return () => { ignore = true; };
  }, []);

  // 表示用：displayRate（25 など）があれば優先。なければ 0.25 を 25% に換算
  const rate =
    settings?.displayRate ??
    (settings?.serviceFee != null ? settings.serviceFee * 100 : null);
  // --- 追加ここまで ---  

  // ===== cotree風：悩みから探す（導線） =====
  const concerns = [
  { title: "恋愛・パートナー", desc: "不安やすれ違い、関係の整え方", topic: "love" },
  { title: "仕事・キャリア", desc: "職場のストレス、働き方の悩み", topic: "career" },
  { title: "メンタル・不安", desc: "気分の落ち込み、焦り、自己否定", topic: "mental" },
  { title: "家族・育児", desc: "家族関係、子育てでの孤独感", topic: "family" },
  { title: "生理・更年期", desc: "体調変化とこころの揺れ", topic: "women" },
  { title: "自己理解", desc: "自分の特性・価値観を整理したい", topic: "self" },
];

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-slate-800">
{/* ===== Hero ===== */}
<section className="relative z-10 pt-14 md:pt-18 pb-12 md:pb-16">

  <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
    <div>
      <p className="text-sm tracking-widest text-emerald-700 font-semibold mb-2">
        女性のためのオンラインカウンセリング・心理相談

      </p>
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
        KOMOREBI
        <br className="hidden md:block" />
        オンラインカウンセリング
      </h1>
      <div className="mt-4 text-slate-600 leading-relaxed space-y-4">
  <p>
    仕事のストレスや人間関係の悩み、
    育児や家庭との両立、不安や気分の落ち込みなど、
    ひとりで抱え込んでいませんか？
  </p>

  <p>
    KOMOREBIのオンラインカウンセリングでは、
    女性が抱えやすい心の悩みを、
    自宅から安心してご相談いただけます。
  </p>

  <p>
    予約から相談までオンライン完結。
    顔出し無しでもOKです。
  </p>
</div>

  

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/booking"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          予約・相談をはじめる
        </Link>
        <Link
          to="/faq"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          よくある質問を見る
        </Link>
      </div>
    </div>

    {/* 画像カラム */}
    <div className="relative">
      {/* 可視化デバッグ用の枠（必要なければ削除OK） */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-200 pointer-events-none"></div>

      <img
        src={"/photos/hero.jpg?v=1"}   // キャッシュ破棄用に ?v=1 を付与
        alt="オンラインでゆったり相談するイメージ"
        className="relative w-full rounded-2xl shadow-md object-cover aspect-[4/3] bg-slate-200 z-10"
        onError={(e) => {
          // 万一読み込めないときに背景色のみで枠が見えるようにする
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  </div>
</section>
<section className="py-12 md:py-16 border-t">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    <div className="flex items-end justify-between gap-4 flex-wrap">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">
          こんなお悩み、ありませんか？
        </h2>
        <p className="mt-2 text-slate-600">
          近いテーマから、気軽に探せます。
        </p>
      </div>

      <Link
        to="/services"
        className="text-sm font-semibold text-emerald-700 hover:underline"
      >
        テーマ一覧を見る →
      </Link>
    </div>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {concerns.map((c) => (
        <Link
          key={c.topic}
          to={`/services?topic=${c.topic}`}
          className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 hover:bg-white transition"
        >
          <div className="font-bold text-slate-900">{c.title}</div>
          <div className="mt-1 text-sm text-slate-600">{c.desc}</div>
          <div className="mt-3 text-sm font-semibold text-emerald-700">
            このテーマで探す →
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* ===== Features（選ばれる理由） ===== */}
      <section id="features" className="py-12 md:py-16 border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold">選ばれる理由</h2>
          <p className="mt-2 text-slate-600">
            どなたでも続けやすいよう、安心・明瞭・柔軟さを大切にしています。
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🌿"
              title="女性に寄り添う安心サポート"
              desc="生理・更年期・妊娠出産・育児・仕事の悩みなど、女性特有のテーマにも専門的に対応。"
              to="/about"
              cta="詳しく"
            />
            <FeatureCard
              icon="💬"
              title="オンライン完結・顔出し不要"
              desc="自宅から気軽に。音声のみ/チャット併用もOK。プライバシーにも配慮します。"
              to="/services"
              cta="サービスを見る"
            />
            <FeatureCard
              icon="💡"
              title="わかりやすい料金"
              desc="初回は無料ヒアリング。単発／回数パックなど、無理のないプランをご用意。"
              to="/pricing"
              cta="料金を見る"
            />
          </div>
        </div>
      </section>

      {/* ===== Flow（ご利用の流れ） ===== */}
      <section id="flow" className="py-12 md:py-16 border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold">ご利用の流れ</h2>
          <p className="mt-2 text-slate-600">
            初めての方も安心。流れにそって進めるだけでOKです。
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <FlowCard
              n="01"
              title="予約・事前ヒアリング"
              body="ご希望の日時を選び、簡単な事前アンケートにご回答ください。"
            />
            <FlowCard
              n="02"
              title="当日：オンライン相談"
              body="ビデオ/音声/チャットから選べます。プライバシーにも配慮しています。"
            />
            <FlowCard
              n="03"
              title="フィードバックと振り返り"
              body="次回に向けた簡単な振り返りメモを共有します。"
            />
          </div>
        </div>
      </section>

      {/* ===== 追加の導線（任意） ===== */}
      <section className="py-12 border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            お問い合わせ
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            サービスの想い
          </Link>
        </div>
      </section>
                      {/* --- Sanity（サイト設定）の表示 --- */}
      <div className="mt-6">
        {loading && <span className="text-gray-500 text-sm">読み込み中…</span>}
        {error && <span className="text-red-600 text-sm">エラー: {error}</span>}
        {!loading && !error && rate != null && (
          <p className="text-sm text-slate-700">
            手数料：{Number(rate).toFixed(2)}%
          </p>
        )}
      </div>

    {/* ここで outer の div を閉じる */}
  </div>
);   // return の閉じ
}     // コンポーネントの閉じ

