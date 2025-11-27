import React from "react";
import "./celebration.css";

const CelebrationEffects = () => {
  return (
    <div className="effect-container">
      {/* Hearts */}
      <div className="heart">💖</div>
      <div className="heart">💜</div>
      <div className="heart">💛</div>

      {/* Balloons */}
      <div className="balloon red"></div>
      <div className="balloon blue"></div>
      <div className="balloon green"></div>

      {/* Confetti */}
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>

      {/* Fireworks */}
      <div className="firework fire1"></div>
      <div className="firework fire2"></div>
      <div className="firework fire3"></div>
    </div>
  );
};

export default CelebrationEffects;
