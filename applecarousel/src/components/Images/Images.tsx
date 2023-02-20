import classes from "./Images.module.css";
import { useState, useEffect } from "react";

const images = [
  "https://via.placeholder.com/1000x400/0000FF/FFFFFF?text=Image+1",
  "https://via.placeholder.com/1000x400/FF0000/FFFFFF?text=Image+2",
  "https://via.placeholder.com/1000x400/00FF00/FFFFFF?text=Image+3",
];

export default function Images(props: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  useEffect(() => {
    setPrevIndex(getPrevIndex(activeIndex));
    setNextIndex(getNextIndex(activeIndex));
  }, [activeIndex]);

  const getPrevIndex = (index: number) => {
    if (index === 0) {
      return images.length - 1;
    } else {
      return index - 1;
    }
  };

  const getNextIndex = (index: number) => {
    if (index === images.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  };

  return (
    <div className={classes.img_container}>
      <img
        className={`${classes.img} ${classes.prev} ${
          activeIndex > prevIndex ? classes.prev_out : classes.prev_in
        }`}
        src={images[prevIndex]}
        alt="img"
      ></img>
      <img
        className={`${classes.img} ${classes.active} ${
          activeIndex > prevIndex ? classes.active_right : classes.active_left
        }`}
        src={images[activeIndex]}
        alt="img"
      ></img>
      <img
        className={`${classes.img} ${classes.next} ${
          activeIndex > prevIndex ? classes.next_in : classes.next_out
        }`}
        src={images[nextIndex]}
        alt="img"
      ></img>
    </div>
  );
}
