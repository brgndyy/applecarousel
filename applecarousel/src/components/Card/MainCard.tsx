import classes from "./MainCard.module.css";

export default function MainCard({ children }: any) {
  return <div className={classes.main_card_container}>{children}</div>;
}
