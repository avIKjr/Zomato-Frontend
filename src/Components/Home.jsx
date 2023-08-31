import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Styles/home.css";
import Wallpaper from "./Wallpaper";
import QuickSearch from "./QuickSearch";
import axios from "axios";

const Home = () => {
  const [location, setLocation] = useState([]); //this holds all the location data
  const [meal, setMeal] = useState([]); //it has all the mealTypes data
  useEffect(() => {
    axios
      .get("https://backend-eg87.onrender.com/getAllLocations") //getting all locations from backend
      .then((response) => {
        setLocation(response.data); //storing all locations in Location State
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://backend-eg87.onrender.com/getAllMealTypes") //getting all mealTypes from backend
      .then((response) => {
        setMeal(response.data); //storing all meal-type data in Location State
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(location);
  return (
    <div className="bg1 row">
      <Navbar />
      <Wallpaper locationsData={location} />
      {/*passing the Location data to the wallpaper component through props */}
      <QuickSearch meal={meal} />
      {/*passing the melTypes data to the quickSearch component through props */}
    </div>
  );
};
export default Home;
