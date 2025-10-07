// src/components/FlowCard.jsx
// ご利用の流れカード

export default function FlowCard({ n, title, body }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow ring-1 ring-slate-100">
      {/* 番号とテキストのレイアウト */}
      <div className="flex items-start gap-4">
        {/* 番号バッジ */}
        <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
          {n}
        </div>

        {/* テキスト部分 */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-slate-600">{body}</p>
        </div>
      </div>
    </div>
  );
}

