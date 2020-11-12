import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { MdWeb } from "react-icons/md";
import { FaJava, FaBootstrap, FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiCsharp,
  SiPhp,
  SiJavascript,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremiere,
  SiAdobeaudition,
  SiBulma,
  SiCss3,
} from "react-icons/si";
import { RiPencilRulerLine } from "react-icons/ri";

const Skils = () => {
  return (
    <>
      <div className="row has-background-light has-text-primary my-5 py-3 has-text-centered ">
        <span className="is-size-3 px-2 is-bebas has-background-light">
          {" "}
          Competencias Técnicas
        </span>
        <hr className="has-background-primary" style={{ marginTop: "-25px" }} />
        <div className="row columns  ml-3 mr-5 my-4">
          <div
            className="column is-4 has-text-primary has-background-light "
            style={{
              border: "solid #2c475a 0px",
              borderRadius: "0%",
            }}
          >
            <div className="rows is-centered ">
              <div className="">
                <HiOutlineCode
                  className=""
                  style={{ fontSize: "80px", marginBottom: "-15px" }}
                />
              </div>
              <span className=" m-0 is-size-4 is-bebas ">Programación</span>

              <hr className="m-0 has-background-primary " />
              <div className=" my-2 row columns is-centered">
                <FaJava className=" is-size-3 mx-1" />
                <SiCsharp className=" is-size-3 mx-1" />
                <SiPhp className=" is-size-3 mx-1" />
                <SiJavascript className=" is-size-3 mx-1" />
              </div>
            </div>
          </div>

          <div
            className="column is-4 has-text-primary has-background-light "
            style={{
              border: "solid #2c475a 0px",
              borderRadius: "0%",
            }}
          >
            <div className="rows is-centered">
              <div className="">
                <MdWeb
                  className=""
                  style={{ fontSize: "80px", marginBottom: "-15px" }}
                />
              </div>
              <span className=" m-0 is-size-4 is-bebas">Web FrontEnd</span>

              <hr className="m-0 has-background-primary mx-3" />
              <div className=" my-2 row columns is-centered">
                <FaBootstrap className=" is-size-3 mx-1" />
                <SiBulma className=" is-size-3 mx-1" />
                <SiCss3 className=" is-size-3 mx-1" />
                <FaHtml5 className=" is-size-3 mx-1" />
                <FaReact className=" is-size-3 mx-1" />
              </div>
            </div>
          </div>
          <div
            className="column is-4 has-text-primary has-background-light "
            style={{
              border: "solid #2c475a 0px",
              borderRadius: "0%",
            }}
          >
            <div className="rows is-centered">
              <div className="">
                <RiPencilRulerLine
                  className=""
                  style={{ fontSize: "80px", marginBottom: "-15px" }}
                />
              </div>
              <span className=" m-0 is-size-4 is-bebas">Diseño gráfico</span>

              <hr className="m-0 has-background-primary mx-3" />
              <div className=" my-2 row columns is-centered">
                <SiAdobeillustrator className=" is-size-3 mx-1" />
                <SiAdobephotoshop className=" is-size-3 mx-1" />
                <SiAdobeaftereffects className=" is-size-3 mx-1" />
                <SiAdobepremiere className=" is-size-3 mx-1" />
                <SiAdobeaudition className=" is-size-3 mx-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skils;
