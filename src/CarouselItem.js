import React from "react";
import "./CarouselItem.css";

/**
 * Renders item for display in Carousel
 *
 * Props
 * -- srcMd, srcLg: "" -> image src for medium, and large files
 * -- altText: "" -> alt text for image
 * -- activeIdx: num -> idx of active image displayed in carousel
 * -- idx: num -> idx of this image
 *
 * App -> Routes -> Projects -> Carousel -> CarouselItem
 */

function CarouselItem({ srcMd, srcLg, altText, activeIdx, idx }) {

  return (
    idx === activeIdx
      ?
      <div className="CarouselItem active">
        <picture>
          <source srcSet={srcLg} media="screen and (min-width: 900px)"></source>
          <img
            className="carousel-img"
            src={srcMd}
            alt={altText}>
          </img>
        </picture>
      </div>
      :
      <div className="CarouselItem inactive"></div>
  );
}

export default CarouselItem;