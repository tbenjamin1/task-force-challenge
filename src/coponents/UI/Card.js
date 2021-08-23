import React from 'react';
import classes from './Card.module.css';

const Card = ({data}) => {
    console.log(data);
    return (
        <div className={classes.card}>
       
       <h2 className="card-title">{data?.tests}</h2>
       <h2 className="card-title">sdddgvxvxzvzx</h2>
        </div>
    )
};

export default Card;
