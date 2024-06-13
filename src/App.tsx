import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeWeb from 'Homepage/HomeWeb';
import Blogweb from 'BlogPage/Blogweb';
import Aboutp from 'AboutPage/Aboutp';
function App() {
  return (
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeWeb />} />
              <Route path="/home" element={<HomeWeb />} />
              <Route path="/blog" element={<Blogweb />} />
              <Route path="/about" element={<Aboutp />} />
            </Routes>
      </BrowserRouter>
  );
}


export default App
