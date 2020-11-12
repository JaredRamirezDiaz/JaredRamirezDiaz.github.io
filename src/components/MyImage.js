import React from "react";
import { FotoCV } from "../assets";

import { useSpring, animated } from "react-spring";

const MyImage = ({ style, foto, posicion = "center", maxWidth = "300px" }) => {
  const props3 = useSpring({
    // config: { duration: 500 },

    opacity: 1,
    delay: 850,
    from: { opacity: 0 },
  });
  return (
    <>
      <animated.div
        className="column is-flex"
        style={{
          ...props3,
          // ...props3,
          // marginTop: "-90px",
          // backgroundColor: "none",
          // backgroundImage: [`url(${FotoCV})`],
          // backgroundPosition: "top",
          // backgroundSize: "cover",
          // border: "7px double white",
          // borderRadius: "50%",
          maxWidth: `${maxWidth}`,
          // zIndex: 1000,
        }}
      >
        <img
          class="image is-square "
          style={{
            ...style,
            width: "101%",
            backgroundColor: "red",
            borderRadius: "50%",
            background: `url(${foto})`,
            backgroundPosition: `${posicion}`,
            backgroundSize: "cover",
            // maxWidth: "80px",
            maxHeight: "80px",
            border: "4px double white",
          }}
        ></img>
      </animated.div>
    </>
  );
};

export default MyImage;
