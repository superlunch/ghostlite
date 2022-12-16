import React from "react";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import ReactSimplyCarousel from "react-simply-carousel";

function Home() {
  const [regLogin, setRegLogin] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const toggleRegLogin = () => {
    setRegLogin((current) => !current);
  };

  return (
    <div className="landing-cont">
      <div className="landing-left">
        <div className="blurb">
          Your most-used stage <br /> management tools, <br /> all in one place.
        </div>
        <div>
          {regLogin ? (
            <div>
              <Register />
              <div className="p-container">
                Have an account?
                <p className="home-toggle-link" onClick={toggleRegLogin}>
                  Login
                </p>
              </div>
            </div>
          ) : (
            <div>
              <Login />
              <div className="p-container">
                Need to sign up?
                <p className="home-toggle-link" onClick={toggleRegLogin}>
                  Register
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="landing-right">
        <div className="carousel">
          {/* Need to get different/plainer carousel images */}
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
              style: {
                alignSelf: "center",
                background: "none",
                opacity: 0.75,
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                textAlign: "center",
              },
              children: <span>{<i class="bx bxs-chevron-right"></i>}</span>,
            }}
            backwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: "center",
                background: "none",
                opacity: 0.75,
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                textAlign: "center",
              },
              children: <span>{<i class="bx bxs-chevron-left"></i>}</span>,
            }}
          >
            <div className="carousel-slide">
              <img src="ai1.jpg" alt="ai1" className="carousel-img" />
              <div className="carousel-text">
                Create & share calls, reports, and more via form
              </div>
            </div>
            <div className="carousel-slide">
              <img src="ai2.jpg" alt="ai2" className="carousel-img" />
              <div className="carousel-text">
                Easy access to rehearsal schedules
              </div>
            </div>
            <div className="carousel-slide">
              <img src="ai4.jpg" alt="ai3" className="carousel-img" />
              <div className="carousel-text">
                Download documents in PDF format
              </div>
            </div>
            <div className="carousel-slide">
              <img src="ai3.jpg" alt="ai4" className="carousel-img" />
              <div className="carousel-text">
                Collect cast & crew contact information
              </div>
            </div>
          </ReactSimplyCarousel>
        </div>
      </div>
    </div>
  );
}

export default Home;