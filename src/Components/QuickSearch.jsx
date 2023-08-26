import React from "react";
import Cards from "./QuickSContents";
import { withRouter } from "react-router-dom";

const QuickSearch = (props) => {
  const { meal } = props; //getting the dynamic data from home component to load everything dynamically and then passing it as props

  return (
    <div className="">
      <div className="container text-start p-3 py-5">
        <h2 className="fs-2">Quick Search</h2>
        <p className="text-muted fs-2">Discover restaurants by type of meal</p>
        <br />
        <div className="row ">
          {meal.map((item, index) => {
            return (
              //here passing the dynamic data as props
              <Cards
                key={index}
                title={item.name}
                description={item.content}
                mealType={item.meal_type}
                img={`./${item.image}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default withRouter(QuickSearch);
