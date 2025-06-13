import { useState } from 'react';
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Blog from './components/blog/Blog';

function App() {
  const [isBlogOpen, setBlogOpen] = useState(false);

  const toggleBlogPanel = () => {
    setBlogOpen(!isBlogOpen);
    document.body.classList.toggle('blog-panel-open', !isBlogOpen);
  };

  return (
    <>
      <Header onBlogClick={toggleBlogPanel} />
      <main className='main'>
        <Home />
        <About onBlogClick={toggleBlogPanel} />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
      
      <div className={`blog__overlay ${isBlogOpen ? 'active' : ''}`} onClick={toggleBlogPanel}></div>
      <div className={`blog__panel ${isBlogOpen ? 'active' : ''}`}>
        <i className="uil uil-times blog__panel-close" onClick={toggleBlogPanel}></i>
        <Blog />
      </div>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
