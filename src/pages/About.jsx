// src/pages/About.jsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Title */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-emerald-700">
            PHILOSOPHY
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
            サービスの想い
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-700 leading-relaxed">
            KOMOREBI（こもれび）は、仕事や人間関係、育児・家庭との両立、
            不安や気分の落ち込みなど、ひとりで抱え込みやすい心の悩みを
            自宅から安心して相談できるオンラインカウンセリングです。
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              予約・相談をはじめる
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            title="やわらかな木漏れ日のように"
            body="評価や正解を急がず、安心して気持ちを言葉にできる場を大切にします。話すことで少し呼吸がしやすくなる、そんな時間を目指します。"
          />
          <Card
            title="続けやすい、わかりやすい"
            body="料金や流れが明確で、無理なく続けられること。必要なときに、必要なペースで利用できる設計を大切にします。"
          />
          <Card
            title="オンラインでも、丁寧に"
            body="自宅からでも、対面と同じように丁寧な関わりを。プライバシーへの配慮と、安心して話せるコミュニケーションを徹底します。"
          />
        </div>

        {/* Sections */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-6 md:p-8">
            <h2 className="text-xl font-bold">こんなときに相談してください</h2>
            <ul className="mt-4 space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>仕事のストレスや、職場の人間関係で心が疲れている</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>育児・家庭・仕事の両立で、ひとりで頑張りすぎている</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>不安や落ち込みが続き、気持ちを整えたい</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>パートナー・家族との関係を見直したい</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />
                <span>自分の考え方のクセや、自己理解を深めたい</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold">KOMOREBIが大切にすること</h2>
            <div className="mt-5 space-y-4 text-gray-800 leading-relaxed">
              <p>
                私たちは「話したいことを、話せる形で」相談できることを大切にしています。
                ビデオ／音声／チャットなど、状況に合わせて選べる設計にし、
                はじめての方でも負担が少ない体験を目指します。
              </p>
              <p>
                また、安心して利用いただけるよう、個人情報の取り扱いとプライバシー配慮を重視します。
                詳細はプライバシーポリシーをご確認ください。
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link className="text-emerald-700 font-semibold hover:underline underline-offset-4" to="/legal/privacy">
                  プライバシーポリシー
                </Link>
                <Link className="text-emerald-700 font-semibold hover:underline underline-offset-4" to="/legal/terms">
                  利用規約
                </Link>
                <Link className="text-emerald-700 font-semibold hover:underline underline-offset-4" to="/legal/tokushoho">
                  特定商取引法に基づく表記
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* How to */}
        <div className="mt-14 rounded-3xl border border-gray-200 bg-white p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold">ご利用のイメージ</h2>
          <p className="mt-2 text-gray-700">
            予約から相談までオンラインで完結。まずは気軽に始められます。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step n="01" title="予約" body="空き枠から日時を選んで予約します。" />
            <Step n="02" title="相談" body="ビデオ／音声／チャットなどから選べます。" />
            <Step n="03" title="振り返り" body="必要に応じて次回の方針を整理します。" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800"
            >
              予約に進む
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              よくある質問を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, body }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
}

function Step({ n, title, body }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-gray-50/60 p-6">
      <div className="text-sm font-extrabold text-emerald-700">{n}</div>
      <div className="mt-2 text-lg font-bold">{title}</div>
      <p className="mt-2 text-sm text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
}
