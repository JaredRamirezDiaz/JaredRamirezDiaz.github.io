import React from "react";
import { MyImage, Hero } from "../components";

const Prueba = () => {
  const formConfig = {};
  return (
    <>
      <Hero />
      <div className="columns borde has-background-primary is-dark">
        <div className="column is-3">uno</div>
        <div className="column is-3 ">Dos</div>
        <div className="column is-3">Tres</div>
        <div className="column is-3">cuatro</div>
      </div>
    </>
  );
};

export default Prueba;
