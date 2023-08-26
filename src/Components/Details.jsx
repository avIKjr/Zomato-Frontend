import React, { useEffect, useState } from "react";
import DemoCarousel from "./carousal";
import Navbar from "./Navbar";
import "../Components/Styles/details.css";
import DemoTab from "./Tabs";
import axios from "axios";

const Details = () => {
  const [Restaurants, setRestaurants] = useState([{}]); //it has the particular restaurant data

  useEffect(() => {
    // const qs = queryString.parse(props.history.location.search);

    // const { restaurant } = qs;
    const restaurants = new URLSearchParams(window.location.search).get(
      "restaurant"
    ); //in this method we are getting the restaurant id which we passed in wallpaper component

    axios
      .get(`http://localhost:8080/getRestaurantsById/${restaurants}`) //here we are getting the particular restaurant data by searching the restaurant by its id
      .then((response) => {
        setRestaurants(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <DemoCarousel restaurantData={Restaurants} />
      <DemoTab restaurantData={Restaurants} />
      {/*here we are passing the restaurant data which we got from back end to tabs component as props */}
    </div>
  );
};
export default Details;
