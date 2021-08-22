import React from 'react';
import classes from './Card.module.css';

const Card = ({data}) => {
    return (
        <div className={classes.card}>
       
         {data}
        
        
        </div>
    )
};

export default Card;
