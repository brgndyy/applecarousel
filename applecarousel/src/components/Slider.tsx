import { useEffect, useState } from "react";
import "./Slider.css";

export default function Slider({ images }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  const getPrevIndex = (index: any) => {
    if (index === 0) {
      return images.length - 1;
    } else {
      return index - 1;
    }
  };

  const getNextIndex = (index: any) => {
    if (index === images.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  };
  return (
    <>
      <div className="carousel-container">
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              opacity: index === activeIndex ? 1 : 0.5,
              zIndex: index === activeIndex ? 1 : 0,
            }}
          ></div>
        ))}
        <div
          className="prev-slide"
          style={{
            backgroundImage: `url(${images[getPrevIndex(activeIndex)]})`,
          }}
        ></div>
        <div
          className="next-slide"
          style={{
            backgroundImage: `url(${images[getNextIndex(activeIndex)]})`,
          }}
        ></div>
      </div>
    </>
  );
}
