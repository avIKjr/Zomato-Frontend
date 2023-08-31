/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
const DemoTab = (props) => {
  const [placeOrderModal, setPlaceOrderModal] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [menuItems, setMenuItems] = useState([{}]);
  const { restaurantData } = props; //this the restaurant data we got in details page and using it we are passing data dynamically
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      background: "#F8F9F9",
      borderRadius: "10px",
    },
  };

  const closeModal = () => {
    setPlaceOrderModal(false);
  };
  const openModal = () => {
    setPlaceOrderModal(true);
    setSubTotal(0);
    axios
      .get(
        `https://backend-eg87.onrender.com/getMenuItemsBasedOnRestaurantName/${restaurantData[0].name}`
      )
      .then((response) => {
        setMenuItems(response.data);
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCount = (index, operationType) => {
    let total = 0;
    const items = [...menuItems];
    const item = items[0].menu_items[index];

    if (operationType === "add") {
      item.qty += 1;
    } else {
      item.qty -= 1;
    }
    items[0].menu_items[index] = item;
    items[0].menu_items.map((item) => {
      return (total += item.qty * item.price);
    });
    setSubTotal(total);
    setMenuItems(items);
  };

  return (
    <div className="m-5">
      <div className="container-fluid d-flex justify-content-between mb-4">
        <div className="px-3">
          <img src={restaurantData[0].image} className=" img rounded" alt="" />
          <p className=" fs-1 d-inline-block mx-3">
            {restaurantData[0].name}
            <br />
            <p className="red fs-5">
              Ratings: {restaurantData[0].aggregate_rating}
            </p>
          </p>
        </div>
        <div>
          <button className="btn btn-danger fs-4 my-4" onClick={openModal}>
            Place Order Online
          </button>
        </div>
      </div>
      <Tabs className="text-start p-2 fs-3">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Contact</Tab>
        </TabList>
        <TabPanel>
          <h1 className="fw-semibold pb-5 pt-2">About This Place</h1>
          <p className="fw-semibold">Cuisine</p>
          <p className="text-muted pb-3">
            {restaurantData[0].cuisine ? (
              <>{restaurantData[0].cuisine.map((value) => value.name + " ")}</>
            ) : null}
          </p>
          <p className="fw-semibold">Average Cost</p>
          <p className="text-muted pb-3">
            Rs.{restaurantData[0].min_price} for two people (Approx)
          </p>
        </TabPanel>
        <TabPanel>
          <p className="fw-semibold">Phone Number</p>
          <p className="red pb-3">+91 {restaurantData[0].contact_number}</p>
          <p className="fw-semibold">{restaurantData[0].name}</p>
          <p className="text-muted pb-3">
            {restaurantData[0].locality} <br />
            {restaurantData[0].city}
          </p>
        </TabPanel>
      </Tabs>
      <div>
        <Modal
          isOpen={placeOrderModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="container-fluid p-3  ">
            <div className="d-flex fw-bold justify-content-between">
              <h1>{menuItems[0].restaurant_name}</h1>
              <i
                className="fa fa-times fa-2x close-icon text-end"
                onClick={closeModal}
              ></i>
            </div>
            <div>
              <h4>Subtotal: {subTotal}</h4>
            </div>
            <div className="mb-2">
              <button type="button" className="btn btn-info">
                Pay Now
              </button>
            </div>
            {menuItems[0].menu_items ? (
              <div>
                {menuItems[0].menu_items.map((item, index) => {
                  return (
                    <div className="card mb-2 xyz rounded" alt="" key={index}>
                      <div className="row g-0">
                        <div className="col-md-4 col-sm-4">
                          <img
                            src={item.image_url}
                            className="img-fluid rounded"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Price: ${item.price}</p>
                            {/* eslint-disable-next-line eqeqeq */}
                            {item.qty != 0 ? (
                              <div
                                className="btn-group btn-group-sm  text-center"
                                role="group"
                                aria-label="Small button group"
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-success btn-sm "
                                  onClick={() => handleCount(index, "add")}
                                >
                                  +
                                </button>
                                <button className="btn disabled">
                                  {item.qty}
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => handleCount(index, "subtract")}
                                >
                                  -
                                </button>
                              </div>
                            ) : (
                              <div className=" text-center">
                                <button
                                  className="btn btn-dark btn-sm"
                                  onClick={() => handleCount(index, "add")}
                                >
                                  Add
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default withRouter(DemoTab);
