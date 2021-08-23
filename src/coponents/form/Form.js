import React, { Fragment, useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import classes from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCountries } from "../redux/actions/AllCountriesAction";

const Form = (props) => {
  const { country, date } = props.searchData;
  const [test, setTest] = useState({});

  const countries = useSelector((state) => state.allCountries.countries);
  const dispatch = useDispatch();
  console.log(countries);

  const fetchCountry = async () => {
    console.log(country);
    const response = await axios
      .get(
        `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query%20`
      )
      .then((response) => {
        const data = response.data;
        setTest(data);
        dispatch(setCountries(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCountry();
  }, [country]);

  console.log(test);
  return (
    <section className={classes.summary}>
      <div className={classes.cumulatively}>
<h1>{test.cases}</h1>
<p>cumulatively</p>

        </div>

      <div className={classes.total}>
        <div className={classes.card}>
          <p>{test.tests}</p>

          <h2>tests</h2>
          <h3>{test.testsPerOneMillion}</h3>
        </div>
        <div className={classes.card}>
          <p>{test.tests}</p>
          <h2>positive cases</h2>
          <h3>{test.tests}</h3>
        </div>
        <div className={classes.card}>
          <p>{test.tests}</p>
          <h2>hospitalized</h2>
          <h3>{test.tests}</h3>
        </div>

        <div className={classes.card}>
          <p>{test.tests}</p>
          <h2>Recovered</h2>
          <h3>{test.tests}</h3>
        </div>
        <div className={classes.card}>
          <p>{test.tests}</p>
          <h2>Deaths</h2>
          <h3>{test.tests}</h3>
        </div>
        <div className={classes.card}>
          <p>{test.tests}</p>
          <h2>vaccineted</h2>
          <h3>{test.tests}</h3>
        </div>
       
      </div>
    </section>
  );
};

export default Form;
