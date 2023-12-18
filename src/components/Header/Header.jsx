// Your Header component
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { toggleNav } from "../../utilities/js/scrpit-1";

export default function Header() {
  
  const [isClipPathVisible, setIsClipPathVisible] = useState(true);
  
  const handleToggleNav = () => {
    setIsClipPathVisible((prev) => !prev);
    toggleNav(isClipPathVisible); // Pass the current visibility state to the function
  };
    

  return (
    <div className="header">
      <div className="container-top-left">
        <div id='hamburger-icon' className="hamburger" onClick={handleToggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <a href="/"><h3>web<span>animate</span></h3></a>
      </div>
      <nav id="nav">
        <div className="home-link-hover">
          <Link id="nav-link" to="/" onClick={handleToggleNav}>HOME</Link>
          <div className="underline-home"></div>
        </div>
        <div className="about-link-hover">
          <Link id="nav-link" to="/about" onClick={handleToggleNav}>About</Link>
          <div className="underline-about"></div>
        </div>
        <div className="animate-link-hover">
          <Link id="nav-link" to="/animate" onClick={handleToggleNav}>Animate</Link>  
          <div className="underline-animate"></div>
        </div>
      </nav>
    </div>
  );
}
