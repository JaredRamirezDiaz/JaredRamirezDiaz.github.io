import React from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <div className="column  ">
        <p class="has-background-light has-text-primary is-bebas is-size-3 mt-4">
          &nbsp;&nbsp;&nbsp;Contact
        </p>
        <div className=" rows has-text-primary has-text-weight-semibold pt-1">
          <div className="columns is-vcentered">
            <div
              className=" column is-vcentered  is-flex is-centered"
              style={{ justifyContent: "center" }}
            >
              <HiOutlineMail className="is-size-4 " />
              &nbsp;Efrain_jared@hotmail.com
            </div>
            <div
              className=" column is-vcentered  is-flex is-centered"
              style={{ justifyContent: "center" }}
            >
              <AiOutlinePhone className="is-size-4 " />
              <span>&nbsp;+52 445 456 2544</span>
            </div>
          </div>
          <div className="columns row">
            <div
              className=" column is-vcentered  is-flex is-centered"
              style={{ justifyContent: "center" }}
            >
              <HiOutlineLocationMarker className="is-size-4 " />
              <span>
                &nbsp;Privada Xichú #25 Co. El Bordo <br />
                &nbsp;Moroleón Gto. CP. 38800
              </span>
            </div>
            <div
              className=" column is-vcentered  is-flex is-centered"
              style={{ justifyContent: "center" }}
            >
              <BiWorld className="is-size-4 " />
              <span>&nbsp; https://MiPortafolio.online/</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
