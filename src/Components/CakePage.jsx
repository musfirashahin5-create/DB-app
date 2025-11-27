import React, { useState } from "react";
import CelebrationEffects from "./CelebrationEffects";
import cakeImg from "../assets/img/cake.png"; // your cake image

const CakePage = ({ onNext }) => {
  const [showEffects, setShowEffects] = useState(false);

  const handleCelebrate = () => {
    setShowEffects(true);

    setTimeout(() => {
      setShowEffects(false);
      onNext();   // Go to next page after effects
    }, 4000);
  };

  return (
    <div className="cake-page">
      <h1 className="cake-title">Cake Cutting 🎂</h1>

      <img src={cakeImg} alt="Cake" className="cake-img" />

      <button className="celebrate-btn" onClick={handleCelebrate}>
        Celebrate 🎉
      </button>

      {showEffects && <CelebrationEffects />}
    </div>
  );
};

export default CakePage;
