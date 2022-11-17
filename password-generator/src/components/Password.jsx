import React from "react";
import "../App.css";
// import logo from "./images/copy-icon2.png";
import logo from "../images/copy-icon2.png";


export default function Password(props) {
  return (
    <>
      <div className="full-pass-btn">
        <p
          className="div-buttons-copy"
          id="pass-1"
          >
            {props.children}
        </p>
        <button
          id="btn-copy1"
          className="st-copy"
          onClick={() => {navigator.clipboard.writeText(props.children)}}
        // onClick={copyBtn}
        >
          <img className="icon-copy" src={logo} alt="copy" />
        </button>
      </div>
    </>
  )
}
