import React from 'react';
import './slider.css';
const { useState, useEffect, useRef } = React;

const TOTAL_SLIDES = 3;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);

  const next = () => {
    if (current === TOTAL_SLIDES) return;
    else setCurrent(current + 1);
  };

  const prev = () => {
    if (current === 0) return;
    else setCurrent(current - 1);
  };

  useEffect(() => {
    ref.current.style.transition = 'all 1s linear';
    ref.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  return (
    <div className="wrapper">
      <div className="frame">
        <div className="box-container" ref={ref}>
          <div className="box">
            <p>Hello</p>
          </div>
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </div>
      </div>
      <div className="button-container">
        <div className="button" onClick={prev}>
          Left
        </div>
        <div className="button" onClick={next}>
          Right
        </div>
      </div>
    </div>
  );
};
export default Slider;
