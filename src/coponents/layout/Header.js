import React, { useState,Fragment } from "react"; 

import ChooseCountry from "../form/ChooseCountry";
import Form from '../form/Form'


import classes from './Header.module.css';

const Header = (props) => {
  const [Filter, setFilter] = useState("");

  const onSelected= (selectedData) => {
    setFilter(selectedData);
  };
  console.log("onSelected");
  console.log(Filter);
  return (
    <Fragment>
      <header className={classes.header} >
     
     <div className={classes['header-top']}>
     <h1>COVICALC</h1> 
     
      <button>contact</button>
     </div>
     
     <div className={classes['header-bottom']}>
       
         <h2>updates</h2>
         <p>search country</p>
       
     <ChooseCountry filterData={onSelected} />
       <Form searchData={Filter}  />
     </div>
      
      </header>
      
    </Fragment>
  );
};

export default Header;
