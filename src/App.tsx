import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeWeb from 'Homepage/HomeWeb';
import Blogweb from 'BlogPage/Blogweb';
import Aboutp from 'AboutPage/Aboutp';
import ContactP from 'ContactPage/ContactP';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWeb />} />
        <Route path="/blog" element={<Blogweb />} />
        <Route path="/home" element={<HomeWeb />} />
        <Route path="/about" element={<Aboutp />} />
        <Route path="/contact" element={<ContactP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
