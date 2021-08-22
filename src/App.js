import React, { Fragment } from 'react';
import classes from './App.module.css'
import Continent from './coponents/continent/Continent';
import Header from './coponents/layout/Header';
import MyProfile from './coponents/profile/MyProfile';
import Footer from './coponents/footer/Footer';



function App() {
  return (
    <Fragment>
      <div classes={classes.container} >
      <Header/>
      
     
      </div>
      <Continent/>
      
    </Fragment>
    
  );
}

export default App;
