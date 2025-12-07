/// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking"; // ← ここ大事！

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // トップページ
      { index: true, element: <Home /> },
      // サービス紹介
      { path: "services", element: <Services /> },
      // ★ 予約フォームページ
      { path: "booking", element: <Booking /> },
      // それ以外 → 404
      {
        path: "*",
        element: <div style={{ padding: 40 }}>見つかりません</div>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
