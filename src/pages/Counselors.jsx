import { useEffect, useState } from "react";
import { client } from "../sanityClient";

function plainTextFromPortableText(blocks) {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (!block || !Array.isArray(block.children)) return "";
      return block.children.map((child) => child.text || "").join("");
    })
    .filter(Boolean);
}

export default function Counselors() {
  const [counselors, setCounselors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "counselor"] | order(name asc) {
          _id,
          name,
          role,
          bio,
          specialty
        }`
      )
      .then((data) => {
        setCounselors(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCounselors([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: 40 }}>読み込み中...</p>;
  if (counselors.length === 0)
    return <p style={{ padding: 40 }}>カウンセラーが登録されていません</p>;

  return (
    <section style={{ padding: 40 }}>
      <h1 style={{ marginBottom: 24 }}>カウンセラー紹介</h1>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {counselors.map((c) => {
          const bioLines = plainTextFromPortableText(c.bio);

          return (
            <li
              key={c._id}
              style={{
                background: "#ffffff",
                borderRadius: 14,
                padding: 24,
                border: "1px solid #e5e7eb",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {/* 名前（色＋太字） */}
              <h2
                style={{
                  color: "#2f855a",
                  fontWeight: 800,
                  fontSize: 22,
                  margin: "0 0 10px 0",
                }}
              >
                {c.name}
              </h2>

              {/* 肩書き */}
              {c.role ? (
                <p style={{ margin: "0 0 14px 0", fontWeight: 700 }}>
                  {c.role}
                </p>
              ) : null}

              {/* プロフィール本文 */}
              {bioLines.length > 0 ? (
                <div style={{ lineHeight: 1.8 }}>
                  {bioLines.map((line, idx) => (
                    <p key={idx} style={{ margin: "0 0 10px 0" }}>
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}

              {/* 専門分野 */}
              {Array.isArray(c.specialty) && c.specialty.length > 0 ? (
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontWeight: 800, marginBottom: 8 }}>
                    専門分野
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {c.specialty.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 12,
                          padding: "6px 10px",
                          borderRadius: 999,
                          background: "#f3f4f6",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
