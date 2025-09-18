import { useState } from "react";

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
      {/* Header */}
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
            onClick={() => setMenuOpen((v) => !v)}
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
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="py-1">{id.toUpperCase()}</a>
              ))}
            </Container>
          </div>
        )}
      </header>

      {/* Hero (写真 + メッセージ) */}
      <section className="py-10 md:py-16">
        <Container className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-sm text-stone-500">📅 更新日：{today}</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              “今のわたし”に合う答えを、一緒に見つけるオンラインカウンセリング
            </h1>
            <p className="mt-4 text-stone-600 max-w-2xl">
              自然体の対話で、絡まった気持ちをほどきます。キャリア、家族、関係性…
              誰にも言いづらいことこそ、安心して話せる場所で。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="rounded-2xl px-5 py-3 bg-emerald-700 text-white font-semibold shadow-md text-center">無料相談を予約</a>
              <a href="#about" className="rounded-2xl px-5 py-3 border border-stone-300 font-semibold text-center">はじめての方へ</a>
            </div>
          </div>
          <div className="md:col-span-1">
            {/* 画像は /public/images に配置。無い場合は非表示に */}
            <img
              src="/images/hero.jpg"
              alt="自然光の入る部屋で微笑む女性"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </Container>
      </section>

      {/* About / 共感ブロック */}
      <Section
        id="about"
        title="はじめての方へ"
        intro="まずは“いま”の状態を丁寧に伺い、あなたに合う進め方を一緒に設計します。無理にがんばらない、続けやすい伴走を大切にしています。"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "気持ちの整理をしたい",
            "自信を取り戻したい",
            "人間関係のパターンを変えたい",
          ].map((x) => (
            <div key={x} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="font-semibold">{x}</p>
              <p className="mt-2 text-stone-600 text-sm">
                いま感じていること・避けたいこと・叶えたいことを、言葉にするところから始めます。
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 特長 */}
      <Section
        id="features"
        title="3つの特長"
        intro="情報量をしぼり導線を整理。はじめてでも迷わない設計にしています。"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.t} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{f.t}</h3>
              <p className="mt-2 text-stone-600">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 流れ */}
      <Section id="flow" title="ご利用の流れ">
        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-emerald-700 font-bold">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-1 text-stone-600 text-sm">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* カウンセラー紹介（写真＋メッセージ） */}
      <Section id="counselor" title="カウンセラーについて">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
          <img
            src="/images/counselor.jpg"
            alt="カウンセラーの写真"
            className="rounded-3xl shadow-md w-full object-cover aspect-[4/5]"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div>
            <p className="text-stone-600">
              産業カウンセラー / 国家資格キャリアコンサルタント。企業人事・教育機関での相談対応を経て独立。
              “答えはあなたの中にある” を信念に、自己理解と小さな行動の積み重ねを支援します。
            </p>
            <ul className="mt-4 text-sm list-disc list-inside text-stone-600">
              <li>得意領域：自己肯定感、キャリア選択、関係性のリフレーミング</li>
              <li>対応時間：平日 19:00–22:00 / 土日 10:00–18:00</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 料金 */}
      <Section id="plans" title="料金プラン">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-lg">{p.name}</div>
              <div className="mt-2 text-2xl font-extrabold text-emerald-700">{p.price}</div>
              <ul className="mt-4 text-sm text-stone-600 space-y-1">
                {p.pts.map((x) => <li key={x}>• {x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-stone-500">※ 学生割・医療従事者割あり。詳細は無料相談でご案内します。</p>
      </Section>

      {/* お客様の声 */}
      <Section id="voices" title="お客様の声">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "話すだけで整理が進み、翌日から行動できました。（30代・女性）",
            "“頑張らないでいい”と言われて涙が出ました。（20代・女性）",
            "転職の軸が固まり、不安が期待に変わりました。（40代・女性）",
          ].map((t, i) => (
            <blockquote key={i} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm text-sm text-stone-700">
              “{t}”
            </blockquote>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="よくあるご質問">
        <div className="divide-y border-y border-stone-200 bg-white rounded-2xl">
          {faqs.map((f, i) => (
            <details key={i} className="p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-stone-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="無料相談のご予約">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-stone-600">
            まずは30分の無料ヒアリングから。ご希望の日時を第3希望までお知らせください。
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="mailto:info@example.com?subject=%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87%E3%81%AE%E4%BA%88%E7%B4%84&body=%E3%80%90%E3%81%8A%E5%90%8D%E5%89%8D%E3%80%91%0D%0A%E3%80%90%E7%94%9F%E5%B9%B4%E6%9C%88%E6%97%A5%E3%80%91%0D%0A%E3%80%90%E3%81%94%E5%B8%8C%E6%9C%9B%E6%97%A5%E6%99%82%EF%BC%88%E7%AC%AC1%E3%80%81%E7%AC%AC2%E3%80%81%E7%AC%AC3%E5%B9%85%EF%BC%89%E3%80%91%0D%0A%E3%80%90%E7%9B%B8%E8%AB%87%E3%81%97%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8%E3%80%91%0D%0A"
               className="rounded-2xl px-5 py-3 bg-emerald-700 text-white font-semibold shadow-md text-center">
              メールで予約する
            </a>
            <a href="#plans" className="rounded-2xl px-5 py-3 border border-stone-300 font-semibold text-center">料金を見る</a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-10 text-center text-sm text-stone-500">
        <Container>
          <div>© {new Date().getFullYear()} sola counseling</div>
          <div className="mt-2">守秘義務 / 個人情報保護方針 / 免責事項</div>
        </Container>
      </footer>

      {/* 画面右下の固定CTA */}
      <a
        href="#contact"
        className="fixed bottom-5 right-5 md:hidden rounded-full bg-emerald-700 text-white px-4 py-3 shadow-lg"
        aria-label="無料相談を予約"
      >
        無料相談
      </a>
    </div>
  );
}
