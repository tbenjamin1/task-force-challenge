import { Fragment } from "react";
import classes from "./SlideContinent.module.css";
import Coursel from "../slideComponet/Coursel";

const SlideContinent = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Coursel />
      </header>
    </Fragment>
  );
};

export default SlideContinent;
