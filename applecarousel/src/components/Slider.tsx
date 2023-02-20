import { useEffect, useState } from "react";

const images = [
  "https://via.placeholder.com/1000x400/0000FF/FFFFFF?text=Image+1",
  "https://via.placeholder.com/1000x400/FF0000/FFFFFF?text=Image+2",
  "https://via.placeholder.com/1000x400/00FF00/FFFFFF?text=Image+3",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Slide ${index}`}
          style={{
            marginLeft: index === 0 ? 0 : 20,
            marginRight: index === images.length - 1 ? 0 : 20,
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default Slider;
