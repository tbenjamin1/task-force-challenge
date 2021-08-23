import React, { useEffect, useRef } from "react";
import classes from "./Coursel.module.css";
import axios from "axios";
import Card from "../UI/Card";

import "./Slide.css";
import { useDispatch, useSelector } from "react-redux";
import { SelectedCountry } from "../redux/actions/AllCountriesAction";

export default function Coursel() {
  const continets = useSelector((state) => state.allcontinets.continents);
  // console.log(continents)
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
  //888888888888888888888888888888888888

  const nxt = useRef(null);
  const nxtbtn = useRef(null);

  let index = 0;
  const nextbtn = () => {
    index++;
    nxt.current.style.transform = `translateX(-${index * 1920}px)`;
    // const SlideshowTRanslate = nxt.current.style.transform.match(/-+[0-9]+/);
    // console.log(SlideshowTRanslate)
  };

  const prevbtn = () => {
    index--;
    nxt.current.style.transform = `translateX(-${index * 1920}px)`;
  };

  return (
    <div className={classes.title}>
      <h3>Per Continents</h3>

      <div className="outer-container">
        <div
          className="slide-show-container"
          ref={nxt}
          style={{ display: "flex" }}
        >

         {continets.map((continent)=>{
           return(
           <div className={classes.card} key={continent.continent}>
            <div className={classes.left}>
              <h1>
                {continent.continent}
              </h1>
              <div className={classes.bottom}>
                <h1>{continent.todayCases}</h1>
                <h2>new cases</h2>
                <p>All case:{continent.cases}</p>
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.middle}>
                <h1>{continent.deaths}</h1>
                <h2>new death</h2>
                <p> total death:{continent.deathsPerOneMillion}</p>
              </div>
              <div className={classes.header}>
                <h1>{continent.recovered}</h1>
               
                <h2>newly recovered</h2>
                <p>total recovered:{continent.recoveredPerOneMillion} </p>
              </div>
              <div className={classes.bottom}>
                <h1>1,878,564</h1>
                <h2>newly vaccineted</h2>
                <p>Total vaccinated: 14,784,254</p>
              </div>
            </div>
          </div>)
         })
          
           }


        </div>
        <div className={classes.nav}>
          <button className="prev" onClick={prevbtn}>
            {"  <==="}
          </button>
          <button className="next" onClick={nextbtn} ref={nxtbtn}>
            {"==>"}
          </button>
        </div>
      </div>
    </div>
  );
}
