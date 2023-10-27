import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Portfolio } from "./pages/Portfolio";
import { Testimonials } from "./pages/Testimonials";
import Contact from "./pages/Contact";
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { ThemeContext, ThemeProvider } from "./pages/Theme";
import React,{useContext} from 'react';

const App = () => {
  const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KWV6_K_ZHUK66gpPa87rP8vibsQqf2ijNg&usqp=CAU"
              alt=""
              width="300"
            ></img>
          </div>
          <Navbar />
          <button onClick={toggleTheme}
            style={{
              fontSize: "20px",
              color: "purple",
              borderRadius: "12px",
              marginRight: "20px",
            }}
           
          >
             Switch to {theme ==='light'?'dark':'light'} mode
           
          </button>
          <button
            style={{
              fontSize: "20px",
              color: "purple",
              borderRadius: "12px",
              marginRight: "20px",
            }}
          >
            <Link to="/Contact">Contact</Link>
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
