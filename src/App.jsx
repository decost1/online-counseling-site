// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Counselors from "./pages/Counselors";
import Booking from "./pages/Booking";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // トップページ
      { index: true, element: <Home /> },

      // 各ページ
      { path: "services", element: <Services /> },
      { path: "counselors", element: <Counselors /> },
      { path: "pricing", element: <Pricing /> },
      { path: "faq", element: <FAQ /> },

      // 予約
      { path: "booking", element: <Booking /> },

      // 404
      {
        path: "*",
        element: (
          <div style={{ padding: 40 }}>
            <h1>ページが見つかりません</h1>
            <p>URLをご確認ください。</p>
          </div>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
