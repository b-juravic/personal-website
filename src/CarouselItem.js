import React from "react";
import "./CarouselItem.css";

/**
 * Renders item for display in Carousel
 *
 * Props
 * -- src: "" -> image src
 * -- altText: "" -> alt text for image
 * -- activeIdx: num -> idx of active image displayed in carousel
 * -- idx: num -> idx of this image
 *
 * App -> Routes -> Projects -> Carousel -> CarouselItem
 */

function CarouselItem({ src, altText, activeIdx, idx }) {

  return (
    <div className={
      idx === activeIdx
        ? "CarouselItem active"
        : "CarouselItem inactive"
    }>
      <img className="carousel-img" src={src} alt={altText}></img>
    </div>
  );
}

export default CarouselItem;