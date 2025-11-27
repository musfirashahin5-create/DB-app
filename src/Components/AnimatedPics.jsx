import React from "react";
import img10 from "../assets/img/anim4.avif";
import img2 from "../assets/img/anim5.jpg";
import img3 from "../assets/img/anim6.jpg";
import img4 from "../assets/img/anim7.jpg";
import img5 from "../assets/img/anim8.webp";
import img6 from "../assets/img/anim9.jpg";
import img7 from "../assets/img/ani3.jpg";
import img8 from "../assets/img/anim2.jpg";
import img9 from "../assets/img/anim3.jpg";
import img1 from "../assets/img/ani.jpg";


export default function AnimatedPics() {
  const pics = [
   img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10
  ];

  return (
    <section className="animated-page">
      <h2 className="section-title">Animated Gallery</h2>
      <div className="animated-grid">
        {pics.map((src, i) => (
          <div key={i} className="anim-card" style={{ animationDelay: `${i * 120}ms` }}>
            <img src={src} alt={`anim-${i}`} />
            <div className="caption">Dreams  {i + 1} 💖</div>
          </div>
        ))}
      </div>
      <h1>Love You Soo Much My Zawj 💜💜💜</h1>
    </section>
  );
}

