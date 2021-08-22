import React,{Fragment}from 'react';
import classes from './Myprofile.module.css';
import Card from '../UI/Card';
import me from'../../myprofile/me.jfif'

const MyProfile = () => {
    return (
        <Fragment>
        <header className={classes.header} >
   
       
        <div className={classes['card-image']} >
        <img src={me} alt="my profile" />;
        </div>
        <div className={classes['card-MyName']}>
<h4>TUYISINGINZE BENJAMIN</h4>
<p>SKILL</p>
<small>20 agoust 2021</small>
        </div>
        
        
      
        
        </header>
        </Fragment>
    )
}

export default MyProfile
