// src/pages/Pricing.jsx
import { Link } from "react-router-dom";

const plans = [
  {
    title: "単発（60分）",
    price: "3,500円",
    unit: "（税込）",
    badge: "おすすめ",
    desc: "まずは1回だけ試したい方向け。気軽に相談できます。",
    points: ["オンライン（音声/ビデオ）", "予約後に日程確定", "秘密厳守で安心"],
  },
  {
    title: "じっくり（90分）",
    price: "5,000円",
    unit: "（税込）",
    badge: null,
    desc: "話したいことが多い・初回で背景も整理したい方向け。",
    points: ["オンライン（音声/ビデオ）", "初回の状況整理に最適", "秘密厳守で安心"],
  },
  {
    title: "おためし（30分）",
    price: "1,800円",
    unit: "（税込）",
    badge: "まずは短く",
    desc: "相性や進め方を確認したい方向けの短時間プラン。",
    points: ["オンライン（音声/ビデオ）", "まずは様子見に", "秘密厳守で安心"],
  },
];

const packs = [
  {
    title: "3回パック（60分×3）",
    price: "10,000円",
    note: "（単発より約5%お得）",
    desc: "短期で整理したい・継続の第一歩に。",
  },
  {
    title: "6回パック（60分×6）",
    price: "19,500円",
    note: "（単発より約7%お得）",
    desc: "気持ちの波を整えながら、継続的に取り組みたい方に。",
  },
];

const faqs = [
  {
    q: "料金以外に追加費用はかかりますか？",
    a: "基本的に表示料金以外はかかりません。特殊な対応（資料作成など）が必要な場合は、事前にご案内します。",
  },
  {
    q: "支払い方法は何がありますか？",
    a: "現在はオンライン決済を予定しています。運用に合わせて順次拡充します（クレジットカード等）。",
  },
  {
    q: "キャンセルはできますか？",
    a: "予約の変更・キャンセルは可能です。なるべく早めにご連絡ください（直前キャンセルはご相談となる場合があります）。",
  },
  {
    q: "顔出しなし（音声のみ）でも大丈夫？",
    a: "大丈夫です。音声のみ・チャット併用など、ご希望に合わせて調整できます。",
  },
];

export default function Pricing() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <section className="border-b bg-gradient-to-b from-stone-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-sm font-semibold tracking-widest text-emerald-700">
            PRICING
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
            料金プラン
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
            まずは単発から。必要に応じて、短時間・長時間・パックをご用意しています。
            料金はわかりやすく、継続しやすい設計を大切にしています。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-emerald-700 text-white shadow hover:bg-emerald-800"
            >
              予約・相談をはじめる
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50"
            >
              よくある質問を見る
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            ※表示価格は目安です。運用に合わせて変更する場合があります。
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">基本プラン</h2>
          <p className="mt-2 text-gray-600">
            初めての方は「単発（60分）」がおすすめです。
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-3xl font-extrabold">
                      {p.price}
                      <span className="ml-2 text-sm font-medium text-gray-500">
                        {p.unit}
                      </span>
                    </p>
                  </div>

                  {p.badge && (
                    <span className="shrink-0 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.points.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[2px] inline-block h-4 w-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    to="/booking"
                    className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
                  >
                    このプランで予約する
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs */}
      <section className="py-12 md:py-16 border-t bg-stone-50/50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">回数パック</h2>
          <p className="mt-2 text-gray-600">
            継続しやすい方向けのパックです（短期集中・習慣化に）。
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {packs.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-3xl font-extrabold">{p.price}</p>
                    <p className="mt-1 text-sm text-gray-500">{p.note}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/booking"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
                  >
                    予約する
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50"
                  >
                    相談して決める
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500">
            ※回数パックの適用条件・有効期限は運用に合わせて整備します。
          </p>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 md:py-16 border-t">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold">ご利用の目安</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="leading-relaxed">
                ・初回：状況整理＋相談の進め方を決める（60〜90分がおすすめ）
              </li>
              <li className="leading-relaxed">
                ・継続：2週間〜1ヶ月に1回のペースが一般的（生活状況に合わせて調整）
              </li>
              <li className="leading-relaxed">
                ・短期集中：3回パックで課題の整理、6回パックで習慣化を目指す
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold">安心のために</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="leading-relaxed">・秘密は厳守します（個人情報は適切に管理）</li>
              <li className="leading-relaxed">・顔出しなし（音声のみ）でもOK</li>
              <li className="leading-relaxed">
                ・緊急性が高い場合は、医療機関・公的窓口の利用もご検討ください
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 border-t bg-stone-50/50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">料金に関するよくある質問</h2>

          <div className="mt-6 grid gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <summary className="cursor-pointer select-none font-semibold text-gray-900">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
            >
              予約・相談をはじめる
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50"
            >
              まずは問い合わせる
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
