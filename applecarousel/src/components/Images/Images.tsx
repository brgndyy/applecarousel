import classes from "./Images.module.css";
import { useState, useEffect } from "react";
const images = [
  "https://via.placeholder.com/1000x400/0000FF/FFFFFF?text=Image+1",
  "https://via.placeholder.com/1000x400/FF0000/FFFFFF?text=Image+2",
  "https://via.placeholder.com/1000x400/00FF00/FFFFFF?text=Image+3",
];

export default function Images(props: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
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
    <>
      <div className={classes.img_container}>
        <img
          className={`${classes.img} ${classes.prev}`}
          src={images[getPrevIndex(activeIndex)]}
          alt="img"
        ></img>
      </div>
      <div className={classes.img_container}>
        <img
          className={`${classes.img} ${classes.active}`}
          src={images[activeIndex]}
          alt="img"
        ></img>
      </div>
      <div className={classes.img_container}>
        <img
          className={`${classes.img} ${classes.next}`}
          src={images[getNextIndex(activeIndex)]}
          alt="img"
        ></img>
      </div>
    </>
  );
}
