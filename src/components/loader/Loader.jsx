import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
