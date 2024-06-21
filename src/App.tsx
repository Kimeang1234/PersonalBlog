import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeWeb from 'Homepage/HomeWeb';
import Blogweb from 'BlogPage/Blogweb';
import Aboutp from 'AboutPage/Aboutp';
import ContactP from 'ContactPage/ContactP';
import Firstcard from 'BlogPage/Firstcard';
import Secondcard from 'BlogPage/Secondcard';
import Thirdcardd from 'BlogPage/Thirdcardd';
import Fourthcard from 'BlogPage/Fourthcard';
import Fifthcard from 'BlogPage/Fifthcard';
import Sixthcard from 'BlogPage/Sixthcard';
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
      <Routes>
        <Route path="/Exploring-Cloud-Computing" element={<Firstcard />}/>
        <Route path="/Introduction-to-Cybersecurity" element={<Secondcard />}/>
        <Route path="/The-Fundamentals-Of-Networking" element={<Thirdcardd />}/>
        <Route path="/Basics-of-Databse-Management" element={<Fourthcard />}/>
        <Route path="/Introduction-to-Programming" element={<Fifthcard />}/>
        <Route path="/Understanding-It-Project" element={<Sixthcard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
