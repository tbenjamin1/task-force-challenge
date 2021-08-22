import React, { Fragment } from "react";
import Card from "../UI/Card";
import { useEffect } from "react";
import axios from "axios";
import classes from './Form.module.css';
import { useSelector,useDispatch  } from "react-redux";
import{setCountries} from '../redux/actions/AllCountriesAction';


const Form = () => {
  const countries = useSelector((state => state.allCountries.countries));
  console.log(countries)
  const dispatch = useDispatch();

  const fetchCountry  = async() =>{
const response =await axios.get("https://corona.lmao.ninja/v2/countries/Rwanda?yesterday&strict&query%20")
.then((response)=>{
  const data = response.data;
  dispatch(setCountries( data));
}).catch((error)=>{
  console.log(error)
})




  }

useEffect(() => {
  
 fetchCountry();


}, []);
console.log(countries)

  return (
    <section className={classes.summary}>
      <div className={classes.cumulatively}>
      
      </div>
      <div className={classes.total}>
           <Card data={countries?.country}/>
           <Card data={countries?.todaycases}/>
           <Card data={countries?.deaths}/>
           <Card data={countries?.recovered}/>
           <Card data={countries?.active}/>
           <Card data={countries?.active}/>
       
       
      </div>
      
    </section>
  );
};

export default Form;
