import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
const LeftSection = (props) => {
  const { locationsData } = props; //getting the location data from Filter component
  const { locationId, setLocationId, mealTypeId } = props;
  const { setFilterRestaurant } = props;
  const [cuisineId, setCuisineId] = useState();
  const [hCost, sethCost] = useState();
  const [lCost, setlCost] = useState();

  const handleLocation = (event) => {
    const LocationId = event.target.value; //getting the location id from the dropdown
    setLocationId(LocationId);
    //console.log(LocationId);
  };

  const handleCuisineId = (id) => {
    setCuisineId(id);
    if (!locationId) {
      //if there is no location id selected then it should filter the restaurant based on cuisine type
      axios
        .get(
          `http://localhost:8080/getFilteredRestaurants/${mealTypeId}/${Number(
            id
          )}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (locationId) {
      axios
        .get(
          `http://localhost:8080/getFilteredRestaurants/${mealTypeId}/${Number(
            id
          )}/${Number(locationId)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //
  const handleCost = (hCost, lCost) => {
    sethCost(hCost);
    setlCost(lCost);
    if (locationId && cuisineId) {
      axios
        .get(
          `http://localhost:8080/getFilteredRestaurants/${mealTypeId}/${Number(
            cuisineId
          )}/${Number(locationId)}/${Number(hCost)}/${Number(lCost)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (!locationId && !cuisineId) {
      axios
        .get(
          `http://localhost:8080/getFilteredRestaurantss/${mealTypeId}/${Number(
            hCost
          )}/${Number(lCost)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (!locationId && cuisineId) {
      axios
        .get(
          `http://localhost:8080/getFilteredRestaurantsc/${mealTypeId}/${Number(
            cuisineId
          )}/${Number(hCost)}/${Number(lCost)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (locationId && !cuisineId) {
      axios
        .get(
          `http://localhost:8080/getFilteredRestaurantsl/${mealTypeId}/${Number(
            locationId
          )}/${Number(hCost)}/${Number(lCost)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSort = (no) => {
    if (locationId && cuisineId && !lCost && !hCost) {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMin_price/${mealTypeId}/${Number(
            cuisineId
          )}/${Number(locationId)}/${Number(no)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (locationId && cuisineId && lCost && hCost) {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMin_pricehlcl/${mealTypeId}/${Number(
            hCost
          )}/${Number(lCost)}/${Number(no)}/${Number(cuisineId)}/${Number(
            locationId
          )}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (locationId && !cuisineId && !lCost && !hCost) {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMin_pricel/${mealTypeId}/${Number(
            no
          )}/${Number(locationId)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (!locationId && cuisineId && !lCost && !hCost) {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMin_pricec/${mealTypeId}/${Number(
            no
          )}/${Number(cuisineId)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (!locationId && cuisineId && lCost && hCost) {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMin_pricehlc/${mealTypeId}/${Number(
            hCost
          )}/${Number(lCost)}/${Number(no)}/${Number(cuisineId)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (locationId && !cuisineId && lCost && hCost) {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMin_pricehll/${mealTypeId}/${Number(
            hCost
          )}/${Number(lCost)}/${Number(no)}/${Number(locationId)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (!locationId && !cuisineId && lCost && hCost) {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMin_pricehl/${mealTypeId}/${Number(
            hCost
          )}/${Number(lCost)}/${Number(no)}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `http://localhost:8080/getRestaurantsByMin_price/${mealTypeId}/${Number(
            no
          )}`
        )
        .then((response) => {
          setFilterRestaurant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleReset = () => {
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
  };
  return (
    <div className="col-3 col-sm-11 col-md-11 col-lg-3 col-xl-3 col-xxl-3  container shadow py-3 mb-5 text-start ">
      <div className=" container  py-3">
        <form action="">
          {/* 1st section */}
          <div className="">
            <div className="fs-2 sm-fs-3 md-fs-3 py-3 fw-bold">Filters</div>
            <div className="fs-3 sm-fs-4 md-fs-4 py-3 fw-semibold text-muted">
              Select location
            </div>
            <select
              className="p-3 fw-normal rounded text-center text-muted fs-4"
              onChange={handleLocation}
            >
              <option value="">==Select==</option>
              {/*using location data and using map to display all the location in the drop down */}
              {locationsData.map((item) => {
                return (
                  <option
                    value={item.location_id} //passing location id as value
                    key={item.location_id}
                    className="text-muted px-2 "
                  >
                    {`${item.name}, ${item.city}`}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="fs-3 py-3 fw-semibold sm-fs-4 md-fs-4">Cuisine</div>
          {/* 2nd section */}
          <div className="px-3 fs-4 sm-fs-4 md-fs-4 check">
            <input
              type="radio"
              name="cuisine"
              className="mx-3 form-check-input"
              onClick={() => handleCuisineId(1)} //we are passing the cuisine id in this function
            />
            North Indian
            <br />
            <input
              type="radio"
              name="cuisine"
              className="mx-3 form-check-input"
              onClick={() => handleCuisineId(2)}
            />
            South Indian
            <br />
            <input
              type="radio"
              className="mx-3 form-check-input"
              name="cuisine"
              onClick={() => handleCuisineId(3)}
            />
            Chinese
            <br />
            <input
              type="radio"
              className="mx-3 form-check-input"
              name="cuisine"
              onClick={() => handleCuisineId(4)}
            />
            Fast-food
            <br />
            <input
              type="radio"
              className="mx-3 form-check-input"
              name="cuisine"
              onClick={() => handleCuisineId(5)}
            />
            Street-food
          </div>
          <br />
          {/* 3rd section */}
          <div className="fs-3 py-1 sm-fs-4 md-fs-4 fw-semibold">
            Cost for two
          </div>
          <div className="px-3 fs-4 sm-fs-5 md-fs-5 check">
            <input
              type="radio"
              name="CostForTwo"
              className="mx-3 form-check-input"
              onClick={() => handleCost(500, 1)}
            />
            Less than $500
            <br />
            <input
              type="radio"
              name="CostForTwo"
              className="mx-3 form-check-input"
              onClick={() => handleCost(1000, 500)}
            />
            $500 to $1000
            <br />
            <input
              type="radio"
              name="CostForTwo"
              className="mx-3 form-check-input"
              onClick={() => handleCost(1500, 1000)}
            />
            $1000 to $1500
            <br />
            <input
              type="radio"
              name="CostForTwo"
              className="mx-3 form-check-input"
              onClick={() => handleCost(2000, 1500)}
            />
            $1500 to $2000
            <br />
            <input
              type="radio"
              name="CostForTwo"
              className="mx-3 form-check-input"
              onClick={() => handleCost(100000, 2000)}
            />
            $2000+
          </div>
          <br />
          {/* 4th section */}
          <div className="fs-3 sm-fs-4 md-fs-4 py-1 fw-semibold">Sort</div>
          <div className="px-3 fs-4 sm-fs-5 md-fs-5 mb-4 check">
            <input
              type="radio"
              name="cost"
              className="mx-3 form-check-input"
              onChange={() => handleSort(1)}
            />
            Price low to high
            <br />
            <input
              type="radio"
              name="cost"
              className="mx-3 form-check-input"
              onChange={() => handleSort(-1)}
            />
            Price high to low
            <br />
            <div className="text-center">
              <button
                type="reset"
                className="btn px-4 mx-1 btn-outline-dark m-5 "
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(LeftSection);
