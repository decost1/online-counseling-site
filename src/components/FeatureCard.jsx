// src/components/FeatureCard.jsx
import { Link } from "react-router-dom";

export default function FeatureCard({
  icon,
  title,
  desc,
  to = "/",
  cta = "くわしく",
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm ring-1 ring-slate-200/70 hover:ring-slate-300 hover:shadow-md transition">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>

      {/* ← これが “Features の CTA” */}
      <div className="mt-5">
        <Link
          to={to}
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-emerald-700 text-white shadow hover:bg-emerald-800
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
