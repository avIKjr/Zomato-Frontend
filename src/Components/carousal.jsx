import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
const DemoCarousel = (props) => {
  const { restaurantData } = props;
  const [placeOrderModal, setPlaceOrderModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#F8F9F9",
      width: "90%",
      borderRadius: "10px",
      marginInline: "1px",
    },
  };
  const closeModal = () => {
    setPlaceOrderModal(false);
  };
  const openModal = () => {
    setPlaceOrderModal(true);
  };
  return (
    <div className="details__div">
      <div
        className="container-fluid text-center  open__carousal "
        onClick={openModal}
      >
        Click to see the image gallery
      </div>
      <Modal
        isOpen={placeOrderModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <i
          className="fa fa-times fa-2x close-icon text-center"
          onClick={closeModal}
        ></i>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          dynamicHeight={true}
          className="case mx-5"
        >
          {restaurantData[0].thumb && restaurantData[0]
            ? restaurantData[0].thumb.map((item, index) => {
                return (
                  <div>
                    <img src={item} alt="" />
                  </div>
                );
              })
            : null}
        </Carousel>
      </Modal>
    </div>
  );
};
export default withRouter(DemoCarousel);
