import classes from "./Images.module.css";
const images = [
  "https://via.placeholder.com/1000x400/0000FF/FFFFFF?text=Image+1",
  "https://via.placeholder.com/1000x400/FF0000/FFFFFF?text=Image+2",
  "https://via.placeholder.com/1000x400/00FF00/FFFFFF?text=Image+3",
];

export default function Images(props: any) {
  return (
    <>
      <div className={classes.img_container}>
        <img
          className={`${classes.img} ${classes.prev}`}
          src={images[0]}
          alt="img"
        ></img>
      </div>
      <div className={classes.img_container}>
        <img
          className={`${classes.img} ${classes.active}`}
          src={images[1]}
          alt="img"
        ></img>
      </div>
      <div className={classes.img_container}>
        <img
          className={`${classes.img} ${classes.next}`}
          src={images[2]}
          alt="img"
        ></img>
      </div>
    </>
  );
}
