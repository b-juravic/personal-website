import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";
/**
 * Renders carousel of images for display
 *
 * Props
 * -- items: [{src: "", alt: ""}, {}, ...]
 *
 * App -> Routes -> Projects -> Carousel
 */
function Carousel({ items }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = function () {
    let newIdx = currentIdx === items.length - 1
      ? 0
      : currentIdx + 1;
    setCurrentIdx(newIdx);
  }

  const previous = function () {
    let newIdx = currentIdx === 0
      ? items.length - 1
      : currentIdx - 1;
    setCurrentIdx(newIdx);
  }

  const carouselItems = items.map(({ srcMd, srcLg, alt }, idx) => (
    <CarouselItem
      srcMd={srcMd}
      srcLg={srcLg}
      altText={alt}
      key={`${srcMd}.${alt}`}
      activeIdx={currentIdx}
      idx={idx}
    />
  ));

  return (
    <div className="Carousel carousel-container">
      {carouselItems}
      <button className="arrow prev" onClick={previous}>&#10094;</button>
      <button className="arrow next" onClick={next}>&#10095;</button>
    </div>
  );
}

export default Carousel;