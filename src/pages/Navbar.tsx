import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Theme";
import { dark } from "@mui/material/styles/createPalette";
export const Navbar = () => {
  const {theme,toggleTheme} = useContext(ThemeContext);

 
  return (
    <div className ='nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/AboutMe">AboutMe</Link>
        </li>
        <li>
          <Link to="/Testimonials">Testimonials</Link>
        </li>
       
      </ul>
    </div>
  )
 
}
