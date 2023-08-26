import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Styles/Router.css";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
//import GoogleLogin from "react-google-login";

const Navbar = () => {
  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  const [handleLoginModal, setHandleLoginModal] = useState(false);
  const [handleCreateModal, setHandleCreateModal] = useState(false);
  const href = window.location.pathname;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
    },
  };

  const color = {
    color: " #2a67cf",
  };

  const closeLoginModal = () => {
    setHandleLoginModal(false);
  };
  const openLoginModal = () => {
    setHandleLoginModal(true);
    setHandleCreateModal(false);
  };
  const closeCreateModal = () => {
    setHandleCreateModal(false);
  };
  const openCreateModal = () => {
    setHandleCreateModal(true);
    setHandleLoginModal(false);
  };
  // console.log(href);
  // eslint-disable-next-line
  if (href == "/") {
    return (
      <>
        <div className="">
          <nav className="navbar bg  py-3 div  ">
            <form className="container-fluid justify-content-end ">
              <button
                className="btn btn-outline-success me-2 "
                type="button"
                onClick={openLoginModal}
              >
                Login
              </button>
              <button
                className="btn btn-outline-danger me-2 "
                type="button"
                onClick={openCreateModal}
              >
                Create Account
              </button>
            </form>
          </nav>
        </div>
        {/* div for login and sign-up modals */}
        <div>
          <Modal
            isOpen={handleLoginModal}
            onRequestClose={closeLoginModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <div className="container-fluid p-3  ">
              <div className="d-flex fw-bold justify-content-between">
                <h1>Login</h1>
                <i
                  className="fa fa-times fa-2x close-icon text-end"
                  onClick={closeLoginModal}
                ></i>
              </div>
              <form>
                <div className="d-grid gap-2">
                  <input
                    type="email"
                    placeholder="Enter email-id"
                    className="p-1 my-1 rounded text-muted border-success"
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="p-1 my-1 rounded text-muted border-danger"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="login"
                    className="btn px-4 mx-1 btn-outline-warning my-1"
                  >
                    Login
                  </button>
                  <button
                    type="reset"
                    className="btn px-4 mx-1 btn-outline-dark my-1"
                  >
                    Reset
                  </button>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn  btn-outline-info my-1">
                    <i className="fa-brands fa-facebook mx-1" style={color}></i>
                    Login with facebook
                  </button>
                  <button className="btn  btn-outline-success my-1">
                    <i className="fa-brands fa-google mx-1" style={color}></i>
                    Login with Google
                  </button>
                </div>
              </form>

              <div className="text-muted">
                Did not have an account,
                {
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a onClick={openCreateModal}> Create an account</a>
                }
              </div>
            </div>
          </Modal>

          <Modal
            isOpen={handleCreateModal}
            onRequestClose={closeCreateModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <div className="container-fluid p-3  ">
              <div className="d-flex fw-bold justify-content-between">
                <h1>Sign Up</h1>
                <i
                  className="fa fa-times fa-2x close-icon text-end"
                  onClick={closeCreateModal}
                ></i>
              </div>
              <form>
                <div className="d-grid gap-2">
                  <input
                    type="name"
                    placeholder="Enter your name"
                    className="p-1 my-1 rounded text-muted border-info"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email-id"
                    className="p-1 my-1 rounded text-muted border-success"
                  />
                  <input
                    type="password"
                    placeholder="Create an password"
                    className="p-1 my-1 rounded text-muted border-danger"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="sign-up"
                    className="btn px-4 mx-1 btn-outline-warning my-1"
                  >
                    Sign Up
                  </button>
                  <button
                    type="reset"
                    className="btn px-4 mx-1 btn-outline-dark my-1"
                  >
                    Reset
                  </button>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn  btn-outline-info my-1">
                    <i className="fa-brands fa-facebook mx-1" style={color}></i>
                    Sign Up with facebook
                  </button>
                  <button className="btn btn-outline-success my-1">
                    <i className="fa-brands fa-google mx-1"></i>
                    Sign Up with Google
                  </button>
                </div>
              </form>
              <div className="text-muted">
                Already have an account,
                {
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a onClick={openLoginModal}> Login</a>
                }
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mb-5">
          <nav className="navbar bg myNav ">
            <form className="container-fluid ">
              <div className="ms-5">
                <button
                  class=" justify-content-start me-2 fs-3 logo logo1"
                  type="button"
                >
                  <Link to="/" className="lo">
                    e!
                  </Link>
                </button>
              </div>
              <div className="me-5">
                <button
                  className="btn button me-2 rounded"
                  type="button"
                  onClick={openLoginModal}
                >
                  Login
                </button>
                <button
                  className="btn button me-2 rounded"
                  type="button"
                  onClick={openCreateModal}
                >
                  Create Account
                </button>
              </div>
            </form>
          </nav>
        </div>
        {/* div for login and sign-up modals */}
        <div>
          <Modal
            isOpen={handleLoginModal}
            onRequestClose={closeLoginModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <div className="container-fluid p-3  ">
              <div className="d-flex justify-content-between">
                <h1 className="fw-bold">Login</h1>
                <i
                  className="fa fa-times fa-2x close-icon text-end"
                  onClick={closeLoginModal}
                ></i>
              </div>
              <form>
                <div className="d-grid gap-2">
                  <input
                    type="email"
                    placeholder="Enter email-id"
                    className="p-1 my-1 rounded text-muted border-success"
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="p-1 my-1 rounded text-muted border-danger"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="login"
                    className="btn px-4 mx-1 btn-outline-warning my-1"
                  >
                    Login
                  </button>
                  <button
                    type="reset"
                    className="btn px-4 mx-1 btn-outline-dark my-1"
                  >
                    Reset
                  </button>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn  btn-outline-info my-1">
                    <i className="fa-brands fa-facebook mx-1" style={color}></i>
                    Login with facebook
                  </button>
                  {/* <GoogleLogin
                    clientId="733979303484-krkkjrr17ec9mh9vvu2eubv3m4s0nkg9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                  />
                  {document.getElementById("googleButton")} */}
                  <button className="btn  btn-outline-success my-1">
                    <i className="fa-brands fa-google mx-1" style={color}></i>
                    Login with Google
                  </button>
                </div>
              </form>

              <div className="text-muted">
                Did not have an account,
                {
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a onClick={openCreateModal}> Create an account</a>
                }
              </div>
            </div>
          </Modal>

          <Modal
            isOpen={handleCreateModal}
            onRequestClose={closeCreateModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <div className="container-fluid p-3  ">
              <div className="d-flex justify-content-between">
                <h1 className="fw-bold">Sign Up</h1>
                <i
                  className="fa fa-times fa-2x close-icon text-end"
                  onClick={closeCreateModal}
                ></i>
              </div>
              <form>
                <div className="d-grid gap-2">
                  <input
                    type="name"
                    placeholder="Enter your name"
                    className="p-1 my-1 rounded text-muted border-info"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email-id"
                    className="p-1 my-1 rounded text-muted border-success"
                  />
                  <input
                    type="password"
                    placeholder="Create an password"
                    className="p-1 my-1 rounded text-muted border-danger"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="sign-up"
                    className="btn px-4 mx-1 btn-outline-warning my-1"
                  >
                    Sign Up
                  </button>
                  <button
                    type="reset"
                    className="btn px-4 mx-1 btn-outline-dark my-1"
                  >
                    Reset
                  </button>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn  btn-outline-info my-1">
                    <i className="fa-brands fa-facebook mx-1" style={color}></i>
                    Sign Up with facebook
                  </button>
                  <button className="btn btn-outline-success my-1">
                    <i class="fa-brands fa-google mx-1"></i>
                    Sign Up with Google
                  </button>
                </div>
              </form>
              <div className="text-muted">
                Already have an account,
                {
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a onClick={openLoginModal}> Login</a>
                }
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
};

export default withRouter(Navbar);
