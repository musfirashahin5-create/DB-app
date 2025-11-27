import React, { useState, useEffect } from "react";
import HeartSplash from "./Components/HeartSplash";
import FrontPage from "./Components/FrontPage";
import CakePage from "./Components/CakePage";
import CelebrationEffects from "./Components/CelebrationEffects";
import ImageGallery from "./Components/ImageGallery";
import AnimatedPics from "./Components/AnimatedPics";
import FinalWishes from "./Components/FinalWishes";

/*
  App.jsx - main router for the pages:
  0 - splash, 1 - front, 2 - cake, 3 - gallery, 4 - video, 5 - animated, 6 - final
*/

export default function App() {
  const [page, setPage] = useState(0);
  const [showEffects, setShowEffects] = useState(false);

  // show splash for 4s, then go to front page
  useEffect(() => {
    const t = setTimeout(() => setPage(1), 4000);
    return () => clearTimeout(t);
  }, []);

  

  function goNext() {
    setPage((p) => Math.min(6, p + 1));
  }
  function goPrev() {
    setPage((p) => Math.max(1, p - 1));
  }
  function goTo(n) {
    setPage(Math.max(0, Math.min(6, n)));
  }

  return (
    <div className="app-root">
      {/* Celebration effects overlay */}
      {showEffects && <CelebrationEffects />}

      {page === 0 ? (
        <HeartSplash />
      ) : (
        <div className="container">
          <header className="header">
            <div className="title">BD Wisher</div>
            <div className="nav">
              <button onClick={goPrev} className="btn" disabled={page <= 1}>Prev</button>
              <button onClick={goNext} className="btn" disabled={page >= 6}>Next</button>
            </div>
          </header>

          <main className="page-area">
            {page === 1 && <FrontPage onNext={() => goTo(2)} />}
            {page === 2 && (<CakePage onNext={() => goTo(3)} onCelebrate={() => setShowEffects(true)} />)}
            {page === 3 && <ImageGallery />}
            {page === 4 && <AnimatedPics />}
            {page === 5 && <FinalWishes />}
          </main>

          <footer className="footer">
            <div>Page {page} of 6</div>
            <div className="small-actions">
              <button className="link" onClick={() => goTo(1)}>Wish</button>
              <button className="link" onClick={() => goTo(2)}>Cake</button>
              <button className="link" onClick={() => goTo(3)}>Pics</button>
              <button className="link" onClick={() => goTo(4)}>Dreams</button>
              <button className="link" onClick={() => goTo(5)}>Once again</button>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
