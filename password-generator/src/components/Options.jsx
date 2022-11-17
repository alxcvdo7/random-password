import React from "react";
import "../App.css";

export default function Options(props) {

  return (
    <>
      {/* ADD NUMBER AND SYMBOL BUTTONS */}
      <button
        id="number-el"
        value={props}
        className={`style ${ (props.children==="No") ? "" : "green" }`}
        onClick={() => props.handleClick(props.children)}
        >{props.children}
      </button>
    </>

  );
}
