import React from "react";
import {
  MyImage,
  Hero,
  Sidebar,
  Sidenav,
  Contact,
  Profile,
  Works,
  Skills,
} from "../components";
import { useState, useEffect } from "react";
import { navbarFirstPlane, navbarSecondPlane, FotoCV } from "../assets";
// import MyImage from "./MyImage";

import { useSpring, animated } from "react-spring";

const HomePage = () => {
  const props = useSpring({
    // config: { duration: 500 },
    transform: "translate3d(0px,-40px,0)",
    opacity: 1,
    from: { transform: "translate3d(400px,-40px,0)", opacity: 0 },
  });
  const props2 = useSpring({
    // config: { duration: 500 },
    transform: "translate3d(0px,-115px,0)",
    opacity: 1,
    from: { transform: "translate3d(-400px,-115px,0)", opacity: 0 },
  });

  return (
    <>
      <div className="columns is-mobile" style={{ height: "100vh" }}>
        <div className="column is-narrow  pr-0">
          <Sidenav />
        </div>
        <div className="column is-narrow  px-0">
          <Sidebar />
        </div>
        <div
          className="column  p-0 overflowless"
          style={{ height: "100vh", position: "relative", top: "12px" }}
        >
          <Hero />
          <div className="columns mr-1 is-touch">
            <div
              className="column is-4 has-text-centered  p-0 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <MyImage
                foto={FotoCV}
                posicion="top"
                style={{ marginTop: "-110px" }}
              />
            </div>

            <Profile />
          </div>
          <div className="rows ">
            <Skills />

            <div className="row my-5">
              <div className="has-text-centered ">
                <span className="is-size-3 has-background-white px-2 has-text-primary is-bebas">
                  Trabajos de Diseño
                </span>
                <hr
                  className="has-background-primary"
                  style={{ marginTop: "-25px" }}
                />
                <Works className="pr-5 pl-3" />
              </div>
            </div>
            <div className="row my-2">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
