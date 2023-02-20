import { useEffect, useState } from "react";
import "./Slider.css";
import Images from "./Images/Images";

const images = [
  "https://via.placeholder.com/1000x400/0000FF/FFFFFF?text=Image+1",
  "https://via.placeholder.com/1000x400/FF0000/FFFFFF?text=Image+2",
  "https://via.placeholder.com/1000x400/00FF00/FFFFFF?text=Image+3",
];

const Slider = () => {
  return (
    <div className="carousel-container">
      {images.map((image, index) => {
        return <Images url={image} key={index} />;
      })}
    </div>
  );
};

export default Slider;
