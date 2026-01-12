// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Counselors from "./pages/Counselors";
import Booking from "./pages/Booking";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Company from "./pages/Company";
import HowTo from "./pages/HowTo";
import Flow from "./pages/Flow";

import Tokushoho from "./pages/Tokushoho";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { path: "services", element: <Services /> },
      { path: "counselors", element: <Counselors /> },
      { path: "pricing", element: <Pricing /> },
      { path: "faq", element: <FAQ /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "company", element: <Company /> },
      { path: "How-to", element: <HowTo /> },
      { path: "flow", element: <Flow /> },

      { path: "booking", element: <Booking /> },

      // 法務（今の Layout のリンクが /legal/... なので合わせる）
      { path: "legal/tokushoho", element: <Tokushoho /> },
      { path: "legal/terms", element: <Terms /> },
      { path: "terms", element: <Terms /> },

     { path: "legal/privacy", element: <Privacy /> },
      { path: "privacy", element: <Privacy /> },


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
