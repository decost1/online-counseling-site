// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  // ✅ Apps Script WebアプリURL（あなたが貼ってくれたやつ）
  const ENDPOINT =
    "https://script.google.com/macros/s/AKfycbxjre1eu6iRny3IgQRZLdRIzNHy-E5QP3Gt6kBAUJdT__AcE4A5rjqCdMoboBfZKYgc/exec";

  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState("");

  // 入力
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("サービス内容について");
  const [message, setMessage] = useState("");

  // 同意
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setCategory("サービス内容について");
    setMessage("");
    setAgree(false);
    setAgreeError("");
    setSendError("");
    setIsSending(false);
    setSubmitted(false);
    if (formRef.current) formRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      setAgreeError("送信には、利用規約・プライバシーポリシーへの同意が必要です。");
      return;
    }
    setAgreeError("");
    setSendError("");

    setIsSending(true);
    setSubmitted(false);

    try {
      const body = new URLSearchParams({
        name,
        email,
        category,
        message,
      });

      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
      });

      // Apps Script は失敗時もHTML返すことがあるので、安全に読む
      const text = await res.text();
      let json = null;
      try {
        json = JSON.parse(text);
      } catch {
        // JSONじゃない＝何かしらエラー/HTML
      }

      if (!res.ok || !json?.ok) {
        throw new Error(
          json?.error || `送信に失敗しました（HTTP ${res.status}）`
        );
      }

      setSubmitted(true);
    } catch (err) {
      setSendError(err?.message || "送信に失敗しました。");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">お問い合わせ</h1>
      <p className="text-slate-600 mb-8">
        KOMOREBI（こもれび）オンラインカウンセリングへのお問い合わせはこちらからお願いいたします。
        サービス内容・料金・ご利用方法など、お気軽にご相談ください。
      </p>

      {submitted ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4">
          <p className="text-emerald-700 font-medium">
            送信しました。通常2営業日以内にご返信いたします。
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            自動返信メールが届かない場合は、迷惑メールフォルダもご確認ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm
              border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              別のお問い合わせを送る
            </button>

            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm
              bg-emerald-700 text-white hover:bg-emerald-800"
            >
              サービス内容を見る
            </a>

            <a
              href="/faq"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm
              border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              よくある質問を見る
            </a>
          </div>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              お名前 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="山田 花子"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              メールアドレス <span className="text-rose-500 text-xs">必須</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              お問い合わせ種別
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option>サービス内容について</option>
              <option>料金について</option>
              <option>カウンセリングについて</option>
              <option>予約・日程について</option>
              <option>その他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              お問い合わせ内容 <span className="text-rose-500 text-xs">必須</span>
            </label>
            <textarea
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="ご質問やご不明点をご記入ください。"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm leading-relaxed
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* 同意チェック */}
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
                を確認し、内容に同意の上で送信します。
              </span>
            </label>

            {agreeError && (
              <p className="mt-2 text-sm text-rose-600">{agreeError}</p>
            )}
          </div>

          {sendError && (
            <p className="text-sm text-rose-600">
              送信に失敗しました：{sendError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending || !agree}
            className="w-full inline-flex justify-center items-center rounded-xl px-4 py-3 text-sm
            font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800 disabled:opacity-60
            disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
          >
            {isSending ? "送信中..." : "送信する"}
          </button>
        </form>
      )}

      <p className="mt-6 text-sm text-slate-500">
        ※通常2営業日以内にご返信いたします。<br />
        ※緊急性の高いご相談には対応できません。
      </p>
    </section>
  );
}
