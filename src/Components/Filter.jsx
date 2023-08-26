import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LeftSection from "./leftSection";
import RightSection from "./RightSection";
import "./Styles/filter.css";
import axios from "axios";

const FilterPage = () => {
  const [FilterRestaurant, setFilterRestaurant] = useState([{}]); //it has the filtered restaurant based on meal types
  const [location, setLocation] = useState([]); //this holds all the location data
  const [mealType, setMealType] = useState(); //it has the particular name of the meal type
  const [locationId, setLocationId] = useState(); //it has the location id which we select on the left section of the filter page
  const [mealTypeId, setMealTypeId] = useState(); //it has the mealTypeId
  // console.log(cuisineId);
  useEffect(() => {
    //getting the meal type name and id from the url
    const mealTypeId = new URLSearchParams(window.location.search).get(
      "mealTypeId"
    );
    setMealTypeId(mealTypeId);
    const mealType = new URLSearchParams(window.location.search).get(
      "mealType"
    );
    setMealType(mealType);

    // eslint-disable-next-line
    if (locationId != undefined) {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMealTypeID/${mealTypeId}/${Number(
            locationId
          )}`
        ) //here we are getting the particular restaurant data by searching the restaurant by mealType and locationId
        .then((response) => {
          // setMainFilterRestaurant(response.data);
          setFilterRestaurant(response.data);
          //console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:8080/getRestaurantsByMealTypeID/${mealTypeId}`) //here we are getting the particular restaurant data by searching the restaurant by mealType
        .then((response) => {
          // setMainFilterRestaurant(response.data);
          setFilterRestaurant(response.data);
          //console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    axios
      .get("http://localhost:8080/getAllLocations") //getting all locations from backend
      .then((response) => {
        setLocation(response.data); //storing all locations in Location State
      })
      .catch((error) => {
        console.log(error);
      });

    //console.log(New);
  }, [locationId]);

  return (
    <div>
      <Navbar />
      <div className="container mb-5">
        <div className="text-start fs-1 fw-bold">
          {mealType} places in mumbai
        </div>
      </div>
      <div className=" row  container-fluid px-5">
        <LeftSection
          locationsData={location}
          setLocationId={setLocationId}
          setFilterRestaurant={setFilterRestaurant}
          locationId={locationId}
          mealTypeId={mealTypeId}
          FilterRestaurant={FilterRestaurant}
        />
        <RightSection FilterRestaurant={FilterRestaurant} />
      </div>
    </div>
  );
};
export default FilterPage;
