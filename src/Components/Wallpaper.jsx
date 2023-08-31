import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
//import LocationData from "./Home";

const Wallpaper = (props) => {
  // console.log(Location);
  const { locationsData } = props; //getting the location data from home component
  const [Restaurants, setRestaurants] = useState([]); //it has a array of restaurants based on location data
  const [Suggestions, setSuggestions] = useState([]); //it has the suggestions of restaurant name based on our search
  const [Text, setText] = useState(""); //it has the value that we wrote in input box for searching restaurants

  const handleLocation = (event) => {
    const locationId = event.target.value; //this method is getting the location id which is passed in select tag as value attribute
    //sessionStorage.setItem("locationId", locationId);
    // console.log(locationId);

    axios
      .get(`https://backend-eg87.onrender.com/getRestaurantsByLocationTypeID/${locationId}`) //it is searching the restaurants based on location id
      .then((response) => {
        setRestaurants(response.data); //after getting the the restaurant based on location id we are saving it in Restaurants state
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (event) => {
    let InputText = event.target.value; //this is getting the value of anything we write in the input box
    // console.log(InputText);
    setText(InputText);
    const suggestion = Restaurants.filter(
      (item) => item.name.toLowerCase().includes(Text.toLowerCase()) //this is filtering the Restaurants array and then checking if the restaurant includes the letter we write in input box, Which is stored in Text state
    );
    setSuggestions(suggestion); //now we are setting the suggestion of restaurant names in Suggestions state
  };
  // console.log(Suggestions);
  // console.log(Text);

  const showSuggestions = () => {
    //this is checking if suggestions has anything or not and returns value accordingly
    // eslint-disable-next-line
    if (Suggestions.length == 0 && Text == undefined) {
      return null;
    } // eslint-disable-next-line
    if (Suggestions.length > 0 && Text == "") {
      return null;
    } // eslint-disable-next-line
    if (Suggestions.length == 0 && Text) {
      return (
        <div className="text-center dropdown">
          <div className="my-1  black search rounded opacity-75 text-center ">
            No search results found
          </div>
        </div>
      );
    }
    const selectingRestaurant = (id) => {
      props.history.push(`/details?restaurant=${id}`); //after getting the restaurant id we are pushing it in the history object as search param and here the id refers to the selected restaurant id
    };
    // eslint-disable-next-line
    if (Suggestions.length > 0 && Text) {
      return (
        <div className="text-center ">
          {Suggestions.map((item, index) => (
            <div
              key={index}
              className="my-1 fs-3 black search opacity-75 rounded text-center"
              onClick={() => selectingRestaurant(item._id)} //onClick of the restaurant name we are passing the restaurant id in this call back method
            >
              <span>
                <img
                  src={item.image}
                  className="item-logo img rounded"
                  alt=""
                />
              </span>
              {item.name} - {item.locality},{item.city}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="div-main">
      {/* Logo */}
      <div className="col-12 text-center mt-5">
        <div className="logo fs-1 rounded-circle">e!</div>
      </div>
      {/* text */}
      <div className="col-12 mt-5">
        <div className="line">
          <h1 className="heading">Find the best Restaurants, Cafes and Bars</h1>
        </div>
      </div>
      {/* dropdown */}
      <div className="col-12 container my-5 py-5 text-center ">
        <div className="row justify-content-around">
          <div className=" col-5 col-lg-5 col-md-5 col-sm-10 ">
            <select
              type="text"
              className="col-6 rounded-4 w py-3 text-muted text-center fs-3"
              onChange={handleLocation}
            >
              <option className="text-muted">Select</option>{" "}
              {/*using location data and using map to display all the location in the drop down */}
              {locationsData.map((item) => {
                return (
                  <option
                    value={item.location_id}
                    key={item.location_id}
                    className="text-muted px-2 "
                  >
                    {`${item.name},${item.city}`}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Search bar */}
          <div className=" col-5 col-lg-5 col-md-5 col-sm-10">
            <input
              type="search"
              placeholder="Search for restaurants"
              className="rounded-4 py-3 fs-4 text-center w"
              onChange={handleSearch}
            />{" "}
            {showSuggestions()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Wallpaper);
