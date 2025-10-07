// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";   // ←ここだけあなたの構成に合わせる
import Home from "./pages/Home";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "*", element: <div style={{ padding: 40 }}>NOT FOUND</div> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
