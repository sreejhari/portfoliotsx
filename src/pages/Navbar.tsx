import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="nav">
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
