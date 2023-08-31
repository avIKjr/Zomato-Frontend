import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const RightSection = (props) => {
  const { FilterRestaurant } = props; //getting the data from filter page

  //*pagination
  const [currentPage, setCurrentPage] = useState(1); //this is for setting the current page
  const [postsPerPage] = useState(2); //this is for setting the number of posts per page
  const indexOfLastPost = currentPage * postsPerPage; //here we are getting the index of the first post
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //here we are getting the index of the last post
  const currentPost = FilterRestaurant.slice(indexOfFirstPost, indexOfLastPost); //here we are slicing the filterRestaurant
  const numberOfPages = Math.ceil(FilterRestaurant.length / postsPerPage); //here we are getting the numberOf pages
  const pageNumbers = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  } //here we are pushing the number of pages based on the number of posts

  const handlePagination = (number) => {
    setCurrentPage(number);
  }; //if we click on any page number it will show us the data of that pge

  const handleNextPage = () => {
    // eslint-disable-next-line
    if (currentPage != numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    // eslint-disable-next-line
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const selectingRestaurant = (id) => {
    props.history.push(`/details?restaurant=${id}`); //after getting the restaurant id we are pushing it in the history object as search param and here the id refers to the selected restaurant id
  };
  // eslint-disable-next-line
  if (FilterRestaurant.length == 0) {
    return (
      <div className=" col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 container text-center ">
        <h1> No results Found</h1>
      </div>
    );
  } else {
    return (
      <div className=" col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 container text-end ">
        {currentPost.map((item, index) => {
          return (
            <div
              className=" container right shadow p-4 fs-4 sm-fs-5 md-fs-5 mb-5"
              key={index}
              onClick={() => selectingRestaurant(item._id)}
            >
              <div className="row ">
                <div className="col-2  px-3">
                  <img src={item.image} className=" img rounded" alt="" />
                </div>
                <div className="col-10 px-5 py-3">
                  <div className=""> {item.name} </div>
                  <div className=""> {item.locality}</div>
                  <div className="text-muted"> {item.city}</div>
                </div>
              </div>
              <hr className="my-5" />
              <div className="row px-5">
                <div className="col-2 mb-5 text-start">
                  <div className="text-muted">CUISINES</div>
                  <div className="text-muted fs-5">COST FOR TWO</div>
                </div>
                <div className="col-10 px-5 text-end">
                  {item.cuisine ? (
                    <div>{item.cuisine.map((value) => value.name + " ")}</div>
                  ) : null}

                  <div className="fs-5">{item.min_price}</div>
                </div>
              </div>
            </div>
          );
        })}
        {FilterRestaurant.length > 0 ? (
          <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-center rounded pagination-lg my-3 py-3 b">
              <li className="page-item mx-2">
                <button className="page-link" onClick={() => handlePrevPage()}>
                  Previous
                </button>
              </li>
              {pageNumbers.map((number) => (
                <li className="page-item mx-2" key={number}>
                  <button
                    className="page-link"
                    href="!#"
                    onClick={() => handlePagination(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
              {/* here we are mapping the page numbers */}

              <li className="page-item mx-2">
                <button
                  className="page-link"
                  href="!#"
                  onClick={() => handleNextPage()}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    );
  }
};
export default withRouter(RightSection);
