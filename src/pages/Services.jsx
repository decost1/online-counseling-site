// src/pages/Services.jsx
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-slate-800">
      {/* ===== Hero ===== */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm tracking-widest text-emerald-700 font-semibold mb-2">
              ONLINE COUNSELING
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              サービス紹介
              <br className="hidden md:block" />
              ひとりで抱え込まないために
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              KOMOREBIは、日常の不安や人間関係、仕事や育児の悩みなど、
              こころの負担にそっと寄り添うオンラインカウンセリングです。
              うまく言葉にできないままでも大丈夫。安心してお話しください。
            </p>

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

            <p className="mt-4 text-xs text-slate-500">
              ※ 顔出しなし（音声のみ）・チャット相談にも対応しています。
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-md">
  {/* 画像 */}
  <img
    src="/photos/services-hero.jpg"
    alt="オンラインで相談するイメージ"
    className="w-full object-cover aspect-[4/3] bg-slate-200"
    loading="lazy"
    decoding="async"
  />

  {/* ▼ 色味を揃えるグリーン系フィルター */}
  <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" />

  {/* ▼ ほんのり白を重ねてやさしく */}
  <div className="absolute inset-0 bg-white/10" />

  {/* 枠線 */}
  <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-200 pointer-events-none" />
</div>

        </div>
      </section>

      {/* ===== こんなお悩みに対応 ===== */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold">こんなお悩みに対応しています</h2>
          <p className="mt-2 text-slate-600 leading-relaxed max-w-3xl">
            KOMOREBIのオンラインカウンセリングでは、日常の中で感じる心の負担や、
            誰にも話せず抱え込んでしまう悩みに寄り添います。
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">気持ちが落ち込みやすい・不安が強い</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
                <li>理由は分からないけれど、ずっと不安を感じる</li>
                <li>気分の波があって、日常がしんどい</li>
                <li>ひとりで考えすぎてしまう</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">人間関係・家族・パートナーの悩み</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
                <li>職場や友人関係がつらい</li>
                <li>家族やパートナーと分かり合えない</li>
                <li>本音を言えず、疲れてしまう</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">仕事・キャリア・育児の両立</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
                <li>育児と仕事の両立に疲れてしまった</li>
                <li>今の働き方を変えたいけれど不安</li>
                <li>頑張りすぎて、休み方が分からない</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">「こんなことで相談していいのかな…」</h3>
              <p className="text-slate-700 leading-relaxed">
                うまく言葉にできなくても大丈夫です。まとまっていなくても、
                いまの気持ちをそのままお話しください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KOMOREBIのカウンセリング内容 ===== */}
      <section className="py-12 md:py-16 border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold">KOMOREBIのカウンセリング内容</h2>
          <p className="mt-2 text-slate-600 leading-relaxed max-w-3xl">
            無理に答えを出したり、気持ちを整理することを急がせたりすることはありません。
            今感じていることを、そのまま言葉にするところから始めていきます。
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-2">個人カウンセリング</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                不安・落ち込み・ストレス・人間関係など。安心して話せる時間を大切にします。
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-2">キャリア・ライフ相談</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                仕事・転職・働き方・育児との両立など。いまの状況を一緒に整理します。
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-2">カップル・家族カウンセリング</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                対話を通して関係を見つめ直し、より良い関わり方を一緒に探します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 安心してご利用いただくために（写真付き） ===== */}
      <section className="py-12 md:py-16 border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">安心してご利用いただくために</h2>
            <p className="mt-2 text-slate-600 leading-relaxed">
              安心してお話しいただける環境づくりを大切にしています。
            </p>

            <ul className="mt-6 space-y-3 text-slate-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>オンライン完結で自宅から相談できます</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>顔出しなし（音声のみ）・チャット相談にも対応</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>相談内容や個人情報は厳重に管理します</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>無理な継続や勧誘は一切ありません</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                料金を見る
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800"
              >
                予約・相談をはじめる
              </Link>
            </div>
          </div>

         <div className="relative overflow-hidden rounded-2xl shadow-md">
  {/* 画像 */}
  <img
    src="/photos/services-safe.jpg"
    alt="安心して相談できる雰囲気のイメージ"
    className="w-full object-cover aspect-[4/3] bg-slate-200"
    loading="lazy"
    decoding="async"
  />

  {/* ▼ 上と同じ emerald 系フィルター */}
  <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" />

  {/* ▼ やさしくするための白レイヤー */}
  <div className="absolute inset-0 bg-white/10" />

  {/* 枠線 */}
  <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-200 pointer-events-none" />
</div>

        </div>
      </section>

      {/* ===== CTA（誘導） ===== */}
      <section className="py-12 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            あなたに合った相談の形から、少しずつ
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            初回のご相談は、まずは状況を伺うところから。無理のないペースで進めます。
            お気軽にご利用ください。
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            予約・相談をはじめる
          </Link>
          <div className="mt-4">
            <Link
              to="/contact"
              className="text-sm text-slate-600 hover:underline underline-offset-4"
            >
              まずはお問い合わせだけしたい方はこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
