import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 style={{ fontSize: 18, fontWeight: 800, margin: "18px 0 10px" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: 16, fontWeight: 800, margin: "16px 0 8px" }}>
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p style={{ margin: "0 0 10px 0", lineHeight: 1.9 }}>{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          margin: "12px 0",
          padding: "10px 12px",
          borderLeft: "4px solid #cbd5e1",
          background: "#f8fafc",
          borderRadius: 10,
          lineHeight: 1.9,
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ paddingLeft: 18, margin: "8px 0 12px" }}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol style={{ paddingLeft: 18, margin: "8px 0 12px" }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ margin: "6px 0", lineHeight: 1.9 }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ margin: "6px 0", lineHeight: 1.9 }}>{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 800 }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span style={{ textDecoration: "underline" }}>{children}</span>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>
        {children}
      </a>
    ),
  },
};

export default function Counselors() {
  const [counselors, setCounselors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "counselor"] | order(name desc) {
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
        {counselors.map((c) => (
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

            {c.role ? (
              <p style={{ margin: "0 0 14px 0", fontWeight: 700 }}>
                {c.role}
              </p>
            ) : null}

            {Array.isArray(c.bio) && c.bio.length > 0 ? (
              <div>
                <PortableText value={c.bio} components={portableTextComponents} />
              </div>
            ) : null}

            {Array.isArray(c.specialty) && c.specialty.length > 0 ? (
              <div style={{ marginTop: 14 }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>専門分野</div>
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
        ))}
      </ul>
    </section>
  );
}
