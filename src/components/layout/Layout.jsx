import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X, HeartHandshake, CalendarDays, MessageCircleQuestion, User2, Home as HomeIcon, ShieldCheck } from "lucide-react";

/**
 * KOMOREBI｜オンラインカウンセリング
 * 共通レイアウト（ヘッダー／フッター）
 *
 * 使い方（手順）
 * 1) 本ファイルを src/layouts/Layout.jsx として保存
 * 2) ルーティングで <Layout> を親にして子ルートを表示
 *    例：
 *    import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 *    import Layout from './layouts/Layout'
 *    import Home from './pages/Home'
 *    const router = createBrowserRouter([
 *      {
 *        element: <Layout />,
 *        children: [
 *          { path: '/', element: <Home /> },
 *          // そのほかのページを追加
 *        ]
 *      }
 *    ])
 *
 * 3) ロゴ・メニュー・フッターの表記は下の CONFIG を変更
 * 4) CTA（予約ボタン）のリンク先は CONFIG.cta.href を変更
 */

// =========================
// 設定（サイト名・ナビ等）
// =========================
const CONFIG = {
  siteName: "KOMOREBI",
  logoText: "KOMOREBI",
  logoAlt: "KOMOREBI オンラインカウンセリング",
  cta: { label: "予約・相談する", href: "/booking" },
  nav: [
    { to: "/", label: "ホーム", icon: HomeIcon },
    { to: "/services", label: "サービス", icon: HeartHandshake },
    { to: "/counselors", label: "カウンセラー", icon: User2 },
    { to: "/pricing", label: "料金", icon: ShieldCheck },
    { to: "/faq", label: "よくある質問", icon: MessageCircleQuestion },
  ],
  socials: [
    { label: "LINE", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X(Twitter)", href: "#" },
  ],
  company: {
    name: "DECOST株式会社",
    address: "東京都〇〇区〇〇 0-0-0",
    hours: "受付 9:00–20:00（土日祝対応）",
    mail: "info@example.com",
    phone: "0120-000-000",
  },
  legal: [
    { label: "特定商取引法に基づく表記", to: "/legal/tokushoho" },
    { label: "プライバシーポリシー", to: "/legal/privacy" },
    { label: "利用規約", to: "/legal/terms" },
  ],
};

// =========================
// レイアウト本体
// =========================
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
      
        <Outlet />
      
  
      </main>
      <Footer />
    </div>
  );
}

// =========================
// ヘッダー
// =========================
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 ${
      scrolled ? "shadow-sm" : ""
    }`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ */}
          <Link to="/" className="flex items-center gap-2 group" aria-label={CONFIG.logoAlt}>
            <div className="h-8 w-8 rounded-xl bg-emerald-500/90 group-hover:bg-emerald-500 transition-colors" />
            <span className="font-bold text-lg tracking-wide">{CONFIG.logoText}</span>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-1">
            {CONFIG.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 ${
                    isActive ? "text-emerald-700" : "text-gray-700"
                  }`
                }
              >
                <item.icon className="h-4 w-4" aria-hidden />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* CTA ＆ ハンバーガー */}
          <div className="flex items-center gap-3">
            <Link
              to={CONFIG.cta.href}
              className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 active:scale-[0.98] transition"
            >
              <CalendarDays className="h-4 w-4" />
              {CONFIG.cta.label}
            </Link>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 active:scale-95 transition"
              aria-label="メニュー"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-1">
            {CONFIG.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                <item.icon className="h-4 w-4" aria-hidden />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
            <Link
              to={CONFIG.cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
            >
              <CalendarDays className="h-4 w-4" />
              {CONFIG.cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// =========================
// フッター
// =========================
export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-gray-50/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* 上段：概要 & ナビ */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 会社・連絡先 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-emerald-500/90" />
              <span className="font-bold text-lg">{CONFIG.siteName}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              こころに、やわらかな木漏れ日を。オンラインで安心して相談できるカウンセリングサービスです。
            </p>
            <dl className="mt-3 text-sm text-gray-700 space-y-1">
              <div className="flex gap-2"><dt className="font-medium">住所</dt><dd>{CONFIG.company.address}</dd></div>
              <div className="flex gap-2"><dt className="font-medium">受付時間</dt><dd>{CONFIG.company.hours}</dd></div>
              <div className="flex gap-2"><dt className="font-medium">メール</dt><dd><a className="underline underline-offset-4" href={`mailto:${CONFIG.company.mail}`}>{CONFIG.company.mail}</a></dd></div>
              <div className="flex gap-2"><dt className="font-medium">電話</dt><dd><a className="underline underline-offset-4" href={`tel:${CONFIG.company.phone}`}>{CONFIG.company.phone}</a></dd></div>
            </dl>
          </div>

          {/* サイトマップ */}
          <div>
            <h3 className="mb-3 font-semibold">メニュー</h3>
            <ul className="space-y-2 text-sm">
              {CONFIG.nav.map((item) => (
                <li key={item.to}>
                  <Link className="hover:underline underline-offset-4" to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ご利用ガイド */}
          <div>
            <h3 className="mb-3 font-semibold">ご利用ガイド</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:underline underline-offset-4" to="/how-to">はじめての方へ</Link></li>
              <li><Link className="hover:underline underline-offset-4" to="/flow">ご利用の流れ</Link></li>
              <li><Link className="hover:underline underline-offset-4" to="/contact">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* 法務リンク */}
          <div>
            <h3 className="mb-3 font-semibold">法務</h3>
            <ul className="space-y-2 text-sm">
              {CONFIG.legal.map((l) => (
                <li key={l.to}><Link className="hover:underline underline-offset-4" to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
            {/* SNS */}
            <div className="mt-4">
              <h4 className="mb-2 text-sm font-semibold">SNS</h4>
              <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
                {CONFIG.socials.map((s) => (
                  <li key={s.label}><a className="hover:underline underline-offset-4" href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 下段：コピーライト */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {CONFIG.company.name} / {CONFIG.siteName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-block rounded-full bg-emerald-100 px-2 py-1 font-medium text-emerald-700">オンライン相談</span>
            <span className="inline-block rounded-full bg-emerald-100 px-2 py-1 font-medium text-emerald-700">個人情報は厳重管理</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
