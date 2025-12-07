// src/pages/Booking.jsx
import React from "react";

export default function Booking() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("送信データ:", data);
    alert("お問い合わせありがとうございます。内容を送信しました。");
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          予約・相談フォーム
        </h1>
        <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed">
          初回カウンセリングのご予約・ご相談はこちらから承っています。
          ご入力いただいた内容をもとに、カウンセラーより
          <span className="font-medium">24時間以内</span> を目安に
          日程調整のご連絡を差し上げます。
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6"
        >
          {/* ■ お名前 */}
          <div>
            <label className="block text-sm font-medium text-slate-800">
              お名前 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="山田 花子"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* ■ メールアドレス */}
          <div>
            <label className="block text-sm font-medium text-slate-800">
              メールアドレス <span className="text-rose-500 text-xs">必須</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <p className="text-xs text-slate-500 mt-1">
              予約確定や日程調整のご連絡に使用します。
            </p>
          </div>

          {/* ■ 年齢（任意） */}
          <div>
            <label className="block text-sm font-medium text-slate-800">
              年齢（任意）
            </label>
            <input
              type="number"
              name="age"
              min="0"
              placeholder="例：28"
              className="mt-1 w-32 rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* ■ 相談方法 */}
          <div>
            <label className="block text-sm font-medium text-slate-800">
              相談方法 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <select
              name="method"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option>オンライン（ビデオ通話）</option>
              <option>チャット相談</option>
              <option>電話相談</option>
            </select>
          </div>

          {/* ■ 希望日時 */}
          <div>
            <label className="block text-sm font-medium text-slate-800">
              希望日時 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <p className="text-xs text-slate-500 mt-1">
              可能な範囲で、第3希望までご記入ください。
            </p>

            <div className="mt-2 space-y-2">
              <input
                type="text"
                name="date1"
                required
                placeholder="第1希望：例）○月○日（○）19:00〜21:00"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />

              <input
                type="text"
                name="date2"
                placeholder="第2希望（任意）"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />

              <input
                type="text"
                name="date3"
                placeholder="第3希望（任意）"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* ■ 相談内容 */}
          <div>
            <label className="block text-sm font-medium text-slate-800">
              相談内容 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="ご相談内容をご自由にお書きください。"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm leading-relaxed
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* ■ カウンセリング経験（任意） */}
          <div>
            <p className="block text-sm font-medium text-slate-800 mb-1">
              カウンセリング経験（任意）
            </p>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="experience" value="ない" defaultChecked />
                ない
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="experience" value="ある" />
                ある
              </label>
            </div>
          </div>

          {/* ■ 同意 */}
          <div className="border-t border-slate-200 pt-4">
            <label className="flex items-start gap-2 text-xs text-slate-600">
              <input type="checkbox" name="agree" required className="h-4 w-4" />
              <span>
                利用規約およびプライバシーポリシーに同意します。
                <br />※必ず内容をご確認のうえ、チェックを入れてください。
              </span>
            </label>
          </div>

          {/* ■ 送信ボタン */}
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center rounded-xl px-4 py-3 text-sm
            font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
          >
            この内容で送信する
          </button>

          <p className="text-[11px] text-slate-500 text-center">
            ※送信後すぐに自動返信メールは届きません。内容確認のうえ、カウンセラーより個別にご連絡いたします。
          </p>
        </form>
      </div>
    </main>
  );
}
