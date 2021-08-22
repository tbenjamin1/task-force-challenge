import React, { Fragment } from "react"; 
import Contact from "../contact/Contact";
import ChooseCountry from "../form/ChooseCountry";
import Form from '../form/Form'
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header} >
     
     <div className={classes['header-top']}>
     <h1>COVICALC</h1> 
     
      <Button>contact</Button>
     </div>
     
     <div className={classes['header-bottom']}>
       
         <h2>updates</h2>
         <p>search country</p>
       
     <ChooseCountry/>
       <Form/>
     </div>
      
      </header>
      
    </Fragment>
  );
};

export default Header;
