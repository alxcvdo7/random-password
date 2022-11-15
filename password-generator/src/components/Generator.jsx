import React from "react";
import "../stylesheets/generator.css";
import logo from "../images/copy-icon2.png"

function Generator(props) {

  return (

      <div class="bg-gray">

        <div class="div-length-pass">
          <p>Enter your desired password"s length:</p>
          <input type="number" id="length" placeholder="6 to 32"/>
        </div>

        <p class="p-opt1">Does the password include the following:</p>

        <div class="centered-opt">
          <div class="options-div">
            <p class="p-opt">Numbers?</p>
                <button class="style"
                onclick="choiceButton(id)"
                id="number-el">No</button>
          </div>

          <div class="options-div">
            <p class="p-opt">Symbols?</p>
              <button class="style"
              onclick="choiceButton(id)"
              id="symbol-el">No</button>
          </div>
        </div>

        <div class="pass-generator">
          <button id="pass-gen-btn" onclick="generatePass()">
            Generate password
          </button>
        </div>

        <div class="pass-button">

          <div class="full-pass-btn">
            <p class="div-buttons-copy" id="pass-1"></p>
            <button id="btn-copy1"
                    class="st-copy"
                    onclick="copyBtn(id)">
                    <img className="icon-copy"src={logo} alt="copy" />
            </button>
          </div>

          <div class="full-pass-btn">
            <p class="div-buttons-copy" id="pass-2"></p>
            <button img="./images/copy-icon2.png" id="btn-copy2"
                    class="st-copy"
                    onclick="copyBtn(id)">
                    <img className="icon-copy" src={logo} alt="copy" />
            </button>

          </div>
        </div>

      </div>
 )
};

export default Generator
