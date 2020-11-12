import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { navbarFirstPlane, navbarSecondPlane, FotoCV } from "../../assets";
import MyImage from "../MyImage";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { useSpring, animated } from "react-spring";
import styles from "./Hero.module.css";

const Hero = ({ children }) => {
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
  const props3 = useSpring({
    // config: { duration: 500 },

    opacity: 1,
    delay: 850,
    from: { opacity: 0 },
  });

  return (
    <>
      {/* <div
        style={{
          backgroundColor: "#2c475a",
          width: "2%",
          height: "120vh",
          zIndex: 3000,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div> */}
      <div class="hero ">
        <div
          class={styles.herobackground}
          style={
            {
              // backgroundColor: "#c4cec9",
              // backgroundSize: "cover",
              // height: 235,
            }
          }
        >
          <animated.div
            className={`column is-9 is-offset-3 is-flex ${styles.heroFirstName} }`}
            style={{ ...props, justifyContent: "center" }}
          >
            <span
              style={
                {
                  // fontFamily: "Bebas Neue, cursive",
                  // fontSize: "3.8rem",
                  // letterSpacing: "1.5px",
                  // position: "absolute",
                  // top: "77px",
                  // color: "#2c475a",
                }
              }
            >
              EFRAÍN JARED
            </span>
          </animated.div>

          <div
            class={styles.heroSecondPlane}
            style={{
              // backgroundColor: "none",
              background: [`url(${navbarSecondPlane})`],
              // backgroundSize: "cover",
              // height: 160,
              // position: "relative",
              // top: "75px",
              // backgroundPositionX: "center",
              // right: 0,
              // width: "100%",
            }}
          >
            <div className="columns is-mobile">
              <animated.div
                id="firstplane"
                className={`column is-9  is-offset-3 is-flex is-mobile ${styles.heroLastName} `}
                style={{ ...props2, justifyContent: "center" }}
              >
                <span
                  className="has-text-white"
                  style={
                    {
                      // fontFamily: "Bebas Neue, cursive",
                      // fontSize: "6vw",
                      // letterSpacing: "1.5px",
                      // position: "absolute",
                      // top: "120px",
                    }
                  }
                >
                  RAMÍREZ DÍAZ
                </span>
              </animated.div>
            </div>
          </div>
          <div
            class={`${styles.heroFirstPlane}`}
            style={{
              background: [`url(${navbarFirstPlane})`],
              // backgroundSize: "cover",
              // height: 165,
              // position: "relative",
              // top: "-90px",
              // backgroundPositionX: "right",
              // width: "100%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
