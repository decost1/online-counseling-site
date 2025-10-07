// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Counselors from "../pages/Counselors";
import CounselorDetail from "../pages/CounselorDetail";
import FAQ from "../pages/FAQ";
import Booking from "../pages/Booking";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/counselors" element={<Counselors />} />
        <Route path="/counselors/:slug" element={<CounselorDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Layout>
  );
}
