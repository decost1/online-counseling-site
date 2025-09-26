
// ===== Imports =====
import heroImg     from "./photos/pexels-anna-pou-8329864.jpg";
import readingImg  from "./photos/pexels-chuotanhls-17823747.jpg";
import sunlightImg from "./photos/pexels-ekaterina-bolovtsova-4049991.jpg";
import { useState } from "react";

// ===== 小コンポーネント =====
function CtaBand({ children, className = "" }) {
  return (
    <div className={`py-6 md:py-8 bg-emerald-700 text-white ${className}`}>
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left font-semibold">{children}</p>
        <a href="#contact" className="rounded-xl bg-white text-emerald-700 font-semibold px-5 py-3 shadow">
          無料相談を予約
        </a>
      </Container>
    </div>
  );
}

function Container({ children, className = "" }) {
  return <div className={`max-w-6xl mx-auto px-4 ${className}`}>{children}</div>;
}

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <Container>
        {title && <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>}
        {intro && <p className="mt-3 text-slate-600 max-w-3xl">{intro}</p>}
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

// ===== App =====
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const today = new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });

  const features = [
    { t: "女性に寄り添う姿勢", d: "キャリア・人間関係・ライフイベントなど、女性特有の悩みを丁寧に言語化。" },
    { t: "オンライン完結", d: "自宅から安心して。平日夜・土日枠あり。全国どこからでも受けられます。" },
    { t: "わかりやすい導線", d: "①無料相談 → ②目的の整理 → ③伴走セッション、のシンプルな流れ。" },
  ];

  const steps = [
    { n: "01", t: "無料ヒアリング", d: "今のモヤモヤ・理想の状態をお伺いし、ゴールを一緒に仮定義します。" },
    { n: "02", t: "プラン提案", d: "回数・ペース・予算感をご提案。不要ならここで終了でOK。" },
    { n: "03", t: "伴走セッション", d: "課題の分解→行動プラン→振り返りを、無理のないリズムで。" },
  ];

  const plans = [
    { name: "単発 60分", price: "6,600円(税込)", pts: ["まず試したい方向け", "オンライン(Zoom)"] },
    { name: "3回パック", price: "18,000円(税込)", pts: ["2ヶ月の伴走", "メール/チャット相談つき"] },
    { name: "6回パック", price: "34,800円(税込)", pts: ["4〜6ヶ月の伴走", "目標設計〜行動定着まで"] },
  ];

  const faqs = [
    { q: "相談内容はどこまで話せますか？", a: "仕事・家庭・人間関係・自己肯定感など幅広く。守秘義務を守ります。" },
    { q: "ビデオOFFでも大丈夫？", a: "はい。音声のみでも可能です。あなたの安心を最優先に進めます。" },
    { q: "キャンセル規定は？", a: "前日まで無料、当日キャンセルは1回分消化となります。" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-stone-800 scroll-smooth">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur">
        <Container className="py-3 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight">sola counseling</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-stone-950">はじめての方へ</a>
            <a href="#features" className="hover:text-stone-950">特長</a>
            <a href="#flow" className="hover:text-stone-950">流れ</a>
            <a href="#plans" className="hover:text-stone-950">料金</a>
            <a href="#faq" className="hover:text-stone-950">FAQ</a>
            <a href="#contact" className="rounded-xl px-4 py-2 bg-emerald-700 text-white font-semibold shadow-md">無料相談</a>
          </nav>
          <button
            className="md:hidden rounded-xl border px-3 py-2 text-sm"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            メニュー
          </button>
        </Container>
        {menuOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-stone-200 bg-white">
            <Container className="py-3 flex flex-col gap-3 text-sm">
              {["about","features","flow","plans","faq","contact"].map(id => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="py-1">
                  {id.toUpperCase()}
                </a>
              ))}
            </Container>
          </div>
        )}
      </header>

      {/* ===== Hero（左テキスト / 右画像） ===== */}
      <section id="hero" className="py-10 md:py-16 bg-white">
        <Container className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-stone-500">📅 更新日：{today}</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              “今のわたし”に合う答えを、一緒に見つけるオンラインカウンセリング
            </h1>
            <p className="mt-4 text-stone-600 max-w-2xl">
              自然体の対話で、絡まった気持ちをほどきます。キャリア、家族、関係性…
              誰にも言いづらいことこそ、安心して話せる場所で。
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="rounded-2xl px-5 py-3 bg-emerald-700 text-white font-semibold shadow-md text-center">無料相談を予約</a>
              <a href="#about" className="rounded-2xl px-5 py-3 border border-stone-300 font-semibold text-center">はじめての方へ</a>
            </div>
          </div>
          <div>
            <img
              src={heroImg}
              alt="オンラインカウンセリングのイメージ"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>
        </Container>
      </section>

      {/* ===== バナーCTA（任意） ===== */}
      {/* <CtaBand>はじめての方も安心。まずは30分の無料ヒアリングから。</CtaBand> */}

      {/* ===== About（画像＋サブ画像） ===== */}
      <Section
        id="about"
        title="はじめての方へ"
        intro="オンラインで安心して相談できる、やさしいカウンセリングをご提供します。"
      >
        <img
          src={heroImg}
          alt="オンラインカウンセリングの雰囲気"
          loading="lazy"
          className="mx-auto rounded-lg shadow w-full max-w-[720px] h-auto"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <img src={readingImg}  alt="落ち着いて読書する時間"   loading="lazy" className="rounded-xl shadow w-full h-auto object-cover" />
          <img src={sunlightImg} alt="自然光のポートレート"     loading="lazy" className="rounded-xl shadow w-full h-auto object-cover" />
          <img src={heroImg}     alt="相談風景"                 loading="lazy" className="rounded-xl shadow w-full h-auto object-cover" />
        </div>
      </Section>

      {/* ===== ここから features / flow / plans / voices / faq / contact / footer を続ける ===== */}
    </div>
  );
}

