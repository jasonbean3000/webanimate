// Animate.js
import React, { useEffect } from "react";
import { animateElements, animateElements2, animateElements3, animateElements4 } from "../../utilities/js/scrpit-1";
import "./animate.scss";
import topMountainPhoto from '../../resources/media/images/top-of-the-mtn.jpg'
import riverKayakingPhoto from '../../resources/media/images/river-kayaking.jpg'

export default function Animate() {
  useEffect(() => {
    animateElements();
    animateElements2();
    animateElements3();
    animateElements4();
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <div className="animate">
       <h3 className="scroll-animate-title">animated divs on scroll</h3>

      <div className="animated-div-container-1">
        <div className="div-1">
          <img src={topMountainPhoto} alt=""/>
        </div>
        <div className="div-2">
          <h2>Top of the world...</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="animated-div-container-2">
        <div className="div-3">
        <h2>Make your own path...</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="div-4">
          <img src={riverKayakingPhoto} alt=""/>
        </div>
      </div>
    </div>
  );
}
