import React from "react";
import { withRouter } from "react-router-dom";
const Cards = (props) => {
  const { title, description, img, mealType } = props; //getting the dynamic data from QuickSearch component to load everything dynamically

  const handleClick = (title, mealType) => {
    props.history.push(`/filter?mealType=${title}&mealTypeId=${mealType}`); //passing the mealType name and id to the path so that in filter page we can get it
  };

  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12"
      onClick={() => handleClick(title, mealType)}
    >
      {/*  */}
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-4">
            <button className="newb">
              {" "}
              <img src={img} className="img-fluid rounded-start j" alt="..." />
            </button>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default withRouter(Cards);
