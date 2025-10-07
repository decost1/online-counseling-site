// src/pages/CounselorDetail.jsx
import { useParams } from "react-router-dom";

export default function CounselorDetail() {
  const { slug } = useParams();
  return (
    <section>
      <h1>Counselor Detail</h1>
      <p>カウンセラーの詳細ページ（slug: <strong>{slug}</strong>）。</p>
    </section>
  );
}
