import React from 'react';
import { useState } from 'react';
import logo from "./images/copy-icon2.png";
import "./App.css";
import Header from "./components/Header";
// import { add } from "mathjs";
// import Generator from "./components/Generator"

function App() {

  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

  // // Password elements //
  // let passEl1 = document.getElementById("pass-1")
  // let passEl2 = document.getElementById("pass-2")
  // // Choice to add buttons numbers and symbols //
  // let numberEl = document.getElementById("number-el")
  // let symbolEl = document.getElementById("symbol-el") //

  /* INPUT LENGTH STATE*/
  const [lengthVal, setLength] = useState();
  const maxLength = event => {
    const min = 6;
    const max = 16;
    const lengthVal = Math.max(min, Math.min(max, Number(event.target.value)));
    setLength(lengthVal);
    // console.log(lengthVal)
  };

  /* BUTTON NUMBERS */
  const [option, setOption] = useState("No")
  const addOptions = () => {
    option === "No" ? setOption("Yes") : setOption("No") ;
    console.log("logged", option)
    return option
  };
  /* BUTTON SYMBOLS */
  const [optionS, setOptionS] = useState("No")
  const addOptionsS = () => {
    optionS === "No" ? setOptionS("Yes") : setOptionS("No") ;
    // console.log("logged", optionS)
    return optionS
  };

  // const [chars, setChars] = useState([...letters])
  const [password, setPassword] = useState("hola hola")

  // const passGenerator = () => {
  //   option === "Yes" ?
  // }

  let passwordgen = [];
  const addChars = (c, lv) => {
    let pass
    for (let i = 0; i < lv; i++) {
      let randompass = (c[(Math.floor(Math.random() * c.length))])
      passwordgen.push(randompass)
      pass = passwordgen.join("")
      console.log(pass)
    }
    return pass
  }


  addChars(letters, lengthVal)



  return (
    <div className="container-1">
      <div className="centered">
        <Header />
        <div className="bg-gray">


        {/* WORKING ON THE INPUT */}
          <div className="div-length-pass">
            <p>Enter your desired password"s length:</p>
            <input
              type="number"
              id="length"
              placeholder="6 to 16"
              onChange={maxLength}
              value={lengthVal} />
          </div>

          <p className="p-opt1">Does the password include the following:</p>
        {/* ADD NUMBER AND SYMBOL BUTTONS */}
          <div className="centered-opt">
            <div className="options-div">

              <p className="p-opt">Numbers?</p>
              <button
                id="number-el"
                value={option}
                className={`style ${ (option==="No") ? "" : "green" }`}
                onClick={addOptions}
                >{option}
                </button>
            </div>

            <div className="options-div">

              <p className="p-opt">Symbols?</p>
              <button
                id="symbol-el"
                value={optionS}
                // value={value}
                className={`style ${ (optionS==="No") ? "" : "green" }`}
                onClick={addOptionsS}
                >{optionS}
                </button>
            </div>
          </div>

          <div className="pass-generator">
            <button
              id="pass-gen-btn"
              onClick={addChars}
            // onclick={generatePass}
            >
              Generate password
            </button>
          </div>

          <div className="pass-button">

            <div className="full-pass-btn">
              <p
                className="div-buttons-copy"
                id="pass-1">
                  {password}
              </p>
              <button
                id="btn-copy1"
                className="st-copy"
                onClick={() => {navigator.clipboard.writeText(password)}}
              // onClick={copyBtn}
              >
                <img className="icon-copy"src={logo} alt="copy" />
              </button>
            </div>

            <div className="full-pass-btn">
              <p className="div-buttons-copy" id="pass-2">{password} </p>
              <button
                id="btn-copy2"
                className="st-copy"
                onClick={() => {navigator.clipboard.writeText(password)}}
              // onClick={copyBtn}
              >
                <img className="icon-copy" src={logo} alt="copy" />
              </button>

            </div>
          </div>

        </div>
        {/* <Generator /> */}
      </div>
    </div>
  );
}

export default App;
