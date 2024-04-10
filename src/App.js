import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Home from "./Home";
import Service from "./Service";
import Features from "./Pages/Features";
import FAQs from "./Pages/FAQs";
import OurTeam from "./Pages/OurTeam";
import Testimonial from "./Pages/Testimonial";
import Features2 from "./Pages/Features2";
import Features3 from "./Pages/Features3";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/feature2" element={<Features2 />} />
          <Route path="/feature3" element={<Features3 />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
