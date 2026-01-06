import React from "react";
import { Link } from "react-router-dom";

export default function Company() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-700">
          COMPANY
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
          会社概要
        </h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          KOMOREBI（オンラインカウンセリング）は、DECOST株式会社が運営しています。
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {/* 左：概要 */}
        <section className="md:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">運営会社情報</h2>

          <dl className="mt-5 divide-y divide-gray-100">
            <Row label="会社名" value="DECOST株式会社" />
            <Row label="サービス名" value="KOMOREBI（こもれび）オンラインカウンセリング" />
            <Row label="事業内容" value="オンラインカウンセリングサービスの企画・運営" />
            <Row label="お問い合わせ" value="お問い合わせフォームよりご連絡ください。" />
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              お問い合わせ
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-gray-200 text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              よくある質問
            </Link>
          </div>
        </section>

        {/* 右：関連リンク */}
        <aside className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
          <h3 className="text-sm font-semibold text-gray-900">関連ページ</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:underline underline-offset-4" to="/legal/tokushoho">
                特定商取引法に基づく表記
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" to="/legal/privacy">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" to="/legal/terms">
                利用規約
              </Link>
            </li>
          </ul>

          <p className="mt-6 text-xs text-gray-500 leading-relaxed">
            掲載内容は予告なく変更される場合があります。最新の情報は各ページをご確認ください。
          </p>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-4 sm:gap-4">
      <dt className="text-sm font-medium text-gray-700">{label}</dt>
      <dd className="text-sm text-gray-900 sm:col-span-3">{value}</dd>
    </div>
  );
}
