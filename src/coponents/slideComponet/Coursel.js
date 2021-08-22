import React, { useEffect } from "react";
import classes from "./Coursel.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SelectedCountry } from "../redux/actions/AllCountriesAction";

export default function Coursel() {
  const continets = useSelector((state) => state.allcontinets.continents);

  const dispatch = useDispatch();
  console.log(continets);
  const fetchContinents = async () => {
    const response = await axios
      .get("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
      .then((response) => {
        const data = response.data;
        dispatch(SelectedCountry(data));
        // console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchContinents();
  }, []);
  return (
    <div className={classes.title}>
      <h3>Per Continents</h3>
    </div>
  );
}
