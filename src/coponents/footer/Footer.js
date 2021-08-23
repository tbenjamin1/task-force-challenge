import React, { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h5>REACH ME</h5>
        <div className className={classes.address}>
          <span>
            <h6>email</h6>
            <p>tbenpollyl@gmail.com</p>
          </span>
          <span>
            <h6>phone</h6>
            <p>+250787438701</p>
          </span>
          <span>
            <h6>profile</h6>
            <a href="https://www.w3schools.com/">GitHub</a>
          </span>
        </div>
        <div className={classes["footer-bottom"]}>
          <h1>develop by <strong>TUYISINGIZE BENJAMIN</strong></h1>
         
        </div>
      </header>
    </Fragment>
  );
};

export default Footer;
