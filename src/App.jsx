import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import WhyChooseUs from "./Pages/WhyChooseUs";
import Market from "./Pages/Market";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-us" element={<WhyChooseUs />} />
        <Route path="/market" element={<Market />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

