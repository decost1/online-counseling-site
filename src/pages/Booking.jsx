// src/pages/Booking.jsx
import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Booking() {
  /**
   * あなたの Google Form
   * viewform のURLに入ってた ID（/d/e/●●●/viewform）
   */
  const FORM_ID = "1FAIpQLScRbC9pOKovONcctXYxZ3AwlSqKFG31Z8FYrPBwuUuIXC-_Dw";

  // 送信先（formResponse が重要）
  const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

  /**
   * ✅ entry対応（スクショの Form Data から）
   */
  const ENTRY = useMemo(
    () => ({
      name: "entry.209069688",
      email: "entry.930441619",

      method: "entry.1469325754",

      time1: "entry.307579682",
      time2: "entry.2089408309",

      date1y: "entry.102418911_year",
      date1m: "entry.102418911_month",
      date1d: "entry.102418911_day",

      date2y: "entry.67408525_year",
      date2m: "entry.67408525_month",
      date2d: "entry.67408525_day",

      message: "entry.181779593",
      other: "entry.168523998",
    }),
    []
  );

  const TIME_OPTIONS = [
    "09:00〜10:00",
    "10:00〜11:00",
    "11:00〜12:00",
    "14:00〜15:00",
    "15:00〜16:00",
    "19:00〜20:00",
    "20:00〜21:00",
  ];

  const METHOD_OPTIONS = [
    "ビデオ通話（Google Meet / Zoom /LINE 等）",
    "通話のみ（音声・顔出しなし）",
    "チャット相談（LINE・メール）",
  ];

  const iframeRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // フォーム入力（UI用）
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [method, setMethod] = useState(METHOD_OPTIONS[0]);

  const [date1, setDate1] = useState(""); // yyyy-mm-dd
  const [date2, setDate2] = useState("");

  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");

  const [message, setMessage] = useState("");
  const [other, setOther] = useState("");

  // ✅ 同意（必須）
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState("");

  // yyyy-mm-dd を {y,m,d} に分解
  const splitDate = (v) => {
    if (!v) return { y: "", m: "", d: "" };
    const [y, m, d] = v.split("-");
    return { y, m: String(Number(m)), d: String(Number(d)) };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ 同意必須（未チェックなら送信させない）
    if (!agree) {
      setAgreeError("利用規約・プライバシーポリシーへの同意が必要です。");
      return;
    }
    setAgreeError("");

    setIsSending(true);
    setSubmitted(false);

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 800);

    // 実際のPOSTは <form> がやる
    e.currentTarget.submit();
  };

  const d1 = splitDate(date1);
  const d2 = splitDate(date2);

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          予約・相談フォーム
        </h1>
        <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed">
          初回カウンセリングのご予約・ご相談はこちらから承っています。
          ご入力いただいた内容をもとに、カウンセラーより{" "}
          <span className="font-medium">24時間以内</span> を目安に
          日程調整のご連絡を差し上げます。
        </p>

        <form
          action={FORM_ACTION}
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6"
        >
          <iframe
            ref={iframeRef}
            name="hidden_iframe"
            title="hidden_iframe"
            className="hidden"
          />

          <input type="hidden" name="fvv" value="1" />
          <input type="hidden" name="partialResponse" value='[null,null,"-1"]' />
          <input type="hidden" name="pageHistory" value="0" />

          <div>
            <label className="block text-sm font-medium text-slate-800">
              お名前 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <input
              type="text"
              required
              placeholder="山田 花子"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <input type="hidden" name={ENTRY.name} value={name} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              メールアドレス <span className="text-rose-500 text-xs">必須</span>
            </label>
            <input
              type="email"
              required
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <p className="text-xs text-slate-500 mt-1">
              予約確定や日程調整のご連絡に使用します。
            </p>
            <input type="hidden" name={ENTRY.email} value={email} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              希望相談方法 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <select
              required
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {METHOD_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <input type="hidden" name={ENTRY.method} value={method} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              相談希望日（第1希望）{" "}
              <span className="text-rose-500 text-xs">必須</span>
            </label>
            <input
              type="date"
              required
              value={date1}
              onChange={(e) => setDate1(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <input type="hidden" name={ENTRY.date1y} value={d1.y} />
            <input type="hidden" name={ENTRY.date1m} value={d1.m} />
            <input type="hidden" name={ENTRY.date1d} value={d1.d} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              相談希望日（第2希望）{" "}
              <span className="text-rose-500 text-xs">必須</span>
            </label>
            <input
              type="date"
              required
              value={date2}
              onChange={(e) => setDate2(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <input type="hidden" name={ENTRY.date2y} value={d2.y} />
            <input type="hidden" name={ENTRY.date2m} value={d2.m} />
            <input type="hidden" name={ENTRY.date2d} value={d2.d} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              相談希望時間帯（第1希望）{" "}
              <span className="text-rose-500 text-xs">必須</span>
            </label>
            <select
              required
              value={time1}
              onChange={(e) => setTime1(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="" disabled>
                選択
              </option>
              {TIME_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <input type="hidden" name={ENTRY.time1} value={time1} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              相談希望時間帯（第2希望）{" "}
              <span className="text-rose-500 text-xs">必須</span>
            </label>
            <select
              required
              value={time2}
              onChange={(e) => setTime2(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="" disabled>
                選択
              </option>
              {TIME_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <input type="hidden" name={ENTRY.time2} value={time2} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              相談内容 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="ご相談したい内容を、差し支えない範囲でご記入ください。"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm leading-relaxed
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <input type="hidden" name={ENTRY.message} value={message} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800">
              その他お伝えしたいこと（任意）
            </label>
            <textarea
              rows={3}
              value={other}
              onChange={(e) => setOther(e.target.value)}
              placeholder="ご希望やご不安な点などがありましたら、自由にご記入ください。"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm leading-relaxed
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <input type="hidden" name={ENTRY.other} value={other} />
          </div>

          {/* ■ 同意（必須） */}
          <div className="pt-2">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                checked={agree}
                onChange={(e) => {
                  setAgree(e.target.checked);
                  if (e.target.checked) setAgreeError("");
                }}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-700 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-700 leading-relaxed">
                <Link
                  to="/legal/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  利用規約
                </Link>
                ・
                <Link
                  to="/legal/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  プライバシーポリシー
                </Link>
                を確認し、内容に同意の上で予約します。
              </span>
            </label>

            {agreeError ? (
              <p className="mt-2 text-sm text-rose-600">{agreeError}</p>
            ) : null}

            <p className="mt-2 text-[12px] text-slate-500 leading-relaxed">
              ※ 本サービスは医療行為・診断を行うものではありません。<br />
              ※ 予約後のキャンセル・変更については利用規約をご確認ください。
            </p>
          </div>

          <button
            type="submit"
            disabled={isSending || !agree}
            className="w-full inline-flex justify-center items-center rounded-xl px-4 py-3 text-sm
            font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800 disabled:opacity-60
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
          >
            {isSending ? "送信中..." : "この内容で送信する"}
          </button>

          {submitted && (
  <div className="mt-6 space-y-4 text-center">
    <p className="text-sm text-emerald-700">
      送信しました。ご連絡まで少々お待ちください。
    </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm
        border border-slate-300 text-slate-700 hover:bg-slate-50"
      >
        トップページに戻る
      </a>

      <a
        href="/faq"
        className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm
        border border-slate-300 text-slate-700 hover:bg-slate-50"
      >
        よくある質問を見る
      </a>

      <a
        href="/services"
        className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm
        bg-emerald-700 text-white hover:bg-emerald-800"
      >
        サービス内容を見る
      </a>
    </div>
  </div>
)}


          <p className="text-[11px] text-slate-500 text-center">
            ※送信後、自動返信はGoogleフォーム側（Apps Script）で送られます。
          </p>
        </form>
      </div>
    </main>
  );
}
