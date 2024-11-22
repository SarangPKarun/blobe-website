import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './sections/Home';
import About from "./sections/About";

import NavBar from './sections/NavBar';

// import Contact from "./sections/Contact";
// import Download from "./sections/Download";

const App = () => {
  return (
    <Router>
        <div className="w-screen h-screen flex flex-col scroll-smooth">
        {/* Navigation Bar */}
        <NavBar />

        {/* Content Area */}
        <div className="flex-1">   {/* overflow-y-auto snap-y snap-mandatory */}
          
          <section id="home" className="h-screen snap-start">
            <Home />
          </section>
          <section id="about" className="h-screen snap-start">
            <About />
          </section>
          {/* <section id="contact" className="h-screen snap-start">
            <Contact />
          </section>
          <section id="download" className="h-screen snap-start">
            <Download />
          </section> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
