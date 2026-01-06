// src/pages/Faq.jsx
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function Faq() {
  const faqs = useMemo(
    () => [
      {
        q: "オンラインカウンセリングは初めてでも大丈夫ですか？",
        a: "はい、大丈夫です。初回は不安や状況を丁寧にヒアリングし、進め方を一緒に決めます。無理に話さなくてもOKです。",
      },
      {
        q: "顔出しは必要ですか？",
        a: "いいえ、顔出しなしでもご利用いただけます。音声のみ・チャット併用など、ご希望に合わせて調整できます。",
      },
      {
        q: "どんな悩みを相談できますか？",
        a: "仕事のストレス、人間関係、育児や家庭との両立、不安や気分の落ち込み、自己理解など、幅広いテーマに対応しています。",
      },
      {
        q: "予約方法を教えてください。",
        a: "「予約・相談をはじめる」から希望日時を選び、必要事項を入力して送信してください。完了後、案内が表示（または通知）されます。",
      },
      {
        q: "相談時間はどれくらいですか？",
        a: "セッション時間はメニューによって異なります。料金ページの各プラン説明をご確認ください。",
      },
      {
        q: "料金はいくらですか？支払い方法は？",
        a: "料金は「料金」ページに掲載しています。支払い方法は提供形態により異なるため、予約時の案内をご確認ください。",
      },
      {
        q: "キャンセルや日時変更はできますか？",
        a: "可能です。直前の変更は対応できない場合がありますので、できるだけ早めにお問い合わせください。",
      },
      {
        q: "相談内容は外部に漏れませんか？",
        a: "プライバシーを最優先に扱います。詳細はプライバシーポリシーをご確認ください。",
      },
      {
        q: "緊急性が高い場合（自傷他害の恐れ等）は対応できますか？",
        a: "緊急性が高いケースはオンラインでの対応が難しい場合があります。命の危険がある場合は、地域の緊急窓口（119/110）や専門機関へ直ちにご相談ください。",
      },
      {
        q: "問い合わせはどこからできますか？",
        a: "お問い合わせページからご連絡ください。内容を確認のうえ、順次ご返信します。",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0);
  const [keyword, setKeyword] = useState("");

  const filtered = faqs.filter((item) => {
    if (!keyword.trim()) return true;
    const k = keyword.trim();
    return item.q.includes(k) || item.a.includes(k);
  });

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              よくある質問
            </h1>
            <p className="mt-2 text-gray-600">
              予約方法・料金・オンライン相談の進め方など、よくいただく質問をまとめました。
            </p>
          </div>

          <div className="w-full md:w-80">
            <label className="text-sm text-gray-600">キーワード検索</label>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="例：顔出し、料金、キャンセル"
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3">
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-gray-700">
                該当する質問が見つかりませんでした。別のキーワードでお試しください。
              </div>
            )}

            {filtered.map((item, idx) => {
              const isOpen = idx === openIndex;
              return (
                <div
                  key={item.q}
                  className="rounded-2xl border border-gray-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 text-left flex items-start justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="text-sm text-emerald-700 font-semibold">
                        Q.
                      </p>
                      <p className="mt-1 font-semibold text-gray-900">
                        {item.q}
                      </p>
                    </div>
                    <span className="mt-1 text-gray-500">
                      {isOpen ? "−" : "＋"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="mt-1 rounded-xl bg-emerald-50/60 p-4 text-gray-800 leading-relaxed">
                        <p className="text-sm text-emerald-700 font-semibold">
                          A.
                        </p>
                        <p className="mt-1 text-sm">{item.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <aside className="space-y-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="font-semibold">すぐに相談したい方へ</h2>
              <p className="mt-2 text-sm text-gray-600">
                予約ページから日時を選んでお申し込みください。
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
                >
                  予約・相談をはじめる
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h2 className="font-semibold">関連ページ</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="hover:underline underline-offset-4" to="/services">
                    サービス
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-4" to="/pricing">
                    料金
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-4" to="/company">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-4" to="/legal/privacy">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
