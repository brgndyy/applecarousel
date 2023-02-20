import classes from "./Images.module.css";

export default function Images(props: any) {
  return (
    <div className={classes.img_container}>
      <img
        className={`${classes.img} ${classes.prev}`}
        src={props.url}
        alt="img"
      ></img>
    </div>
  );
}
