import { Fragment } from "react";
import classes from "./Continent.module.css";
import MyProfile from '../profile/MyProfile';
import Footer from '../footer/Footer';
import SlideContinent from "../slideShow/SlideContinent";
import Header from "../layout/Header";


const Continent = () => {
    return (
        <Fragment>
        <header className={classes.header} >

        <Header/>
        <SlideContinent/>
       
       <MyProfile/>
       <Footer/>
        
      
        
        </header>
        
      </Fragment>
    )
}

export default Continent
