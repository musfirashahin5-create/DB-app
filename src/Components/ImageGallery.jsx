import React, { useState } from "react";
import one from "../assets/img/one.jpg";
import two from "../assets/img/two.jpg";
import three from "../assets/img/three.jpg";
import four from "../assets/img/four.jpg";

export default function ImageGallery() {
  const pics = [
    one,two,three,four
  ];
  const [index, setIndex] = useState(0);

  function next() { setIndex(i => (i + 1) % pics.length); }
  function prev() { setIndex(i => (i - 1 + pics.length) % pics.length); }

  return (
    <section className="gallery-page">
      <h2 className="section-title">Photos</h2>
      <div className="gallery-wrap">
        <div className="gallery-frame" role="list">
          {pics.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`pic-${i+1}`}
              className={`gallery-pic ${i === index ? "front" : "back"}`}
              style={{ zIndex: i === index ? 10 : 1 }}
            />
          ))}
        </div>
        <div className="row controls">
          <button className="btn" onClick={prev}>◀</button>
          <button className="primary" onClick={next}>▶</button>
        </div>
      </div>
    </section>
  );
}
