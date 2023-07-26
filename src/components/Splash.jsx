import React from "react";
import vdo from "../assets/animation_lkibccup.mp4";

function Splash() {
  return (
    <div className="flex justify-center">
      <video src={vdo} autoPlay loop muted></video>
    </div>
  );
}

export default Splash;
