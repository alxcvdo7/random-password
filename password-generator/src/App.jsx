import React from 'react'; import { useEffect, useState } from 'react';
import logo from "./images/copy-icon2.png";  import "./App.css";
import Header from "./components/Header";  import Options from './components/Options';
import Password from './components/Password';

function App() {

/* SET STATE OF LENGTH*/
  const [lengthInput, setLengthInput] = useState("");

  const handleChangeInput = (e) => {
    const min = 6;
    const max = 16;
    const val = Math.max(min, Math.min(max, Number(e.target.value)));
    setLengthInput(val)
  }

/* SET STATE OF NUMBERS */
  const [option, setOption] = useState("No")
   const addOptions = () => {
    // console.log(option)
    option === "No" ? setOption("Yes") : setOption("No");
    return option
  };

/* SET STATE OF SYMBOLS */
  const [optionS, setOptionS] = useState("No")
  const addOptionsS = () => {
    optionS === "No" ? setOptionS("Yes") : setOptionS("No") ;
    // console.log("logged", optionS)
    return optionS
  };

  /* SET STATE OF NUMBERS */
  const [chars, setChars] = useState([])

  const allChars = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()+_-=}{[]|:;/?.><,`~"};

  const changeOptions = () => {
    let theChars = []
      if (option === "Yes" && optionS === "Yes") {
        theChars.push(...allChars.letters + allChars.numbers + allChars.symbols)
      } else if (option === "Yes" && optionS === "No") {
        theChars.push(...allChars.letters + allChars.numbers)
      } else if (option === "No" && optionS === "Yes") {
        theChars.push(...allChars.letters + allChars.symbols)
      } else {
        theChars.push(...allChars.letters)
      }
    console.log(theChars)
    return theChars
  }

  useEffect (() => {
    setChars(changeOptions())
  }, [option, optionS])

/* FUNCION GET PASSWORD */
  const [password1, setPassword1] = useState("Password 1")

  const [password2, setPassword2] = useState("Password 2")

  const thePassword = () => {
    let passwordgen = ""
      for (let i = 0; i < lengthInput ; i++) {
        passwordgen += (chars[(Math.floor(Math.random() * chars.length))])
    }
    return passwordgen
  }

  const passGenerator = () => {
    setPassword1(thePassword)
    setPassword2(thePassword)
  }

    return (
    <div className="container-1">
      <div className="centered">
        <Header />
        <div className="bg-gray">
              {/* LENGTH INPUT */}
          <div className="div-length-pass">
            <p>Enter your desired password"s length:</p>
            <input
              type="number"
              id="length"
              placeholder="6 to 16"
              onChange={handleChangeInput}
              value={lengthInput} />
          </div>
              {/* ADD NUMBER AND SYMBOL BUTTONS */}
          <p className="p-opt1">Does the password include the following:</p>
          <div className="centered-opt">

            <div className="options-div">
            <p className="p-opt">Numbers?</p>
            <Options
              handleClick={addOptions}
            >{option}
            </Options>
            </div>

            <div className="options-div">
            <p className="p-opt">Symbols?</p>
            <Options
              handleClick={addOptionsS}
            >{optionS}
            </Options>
            </div>

          </div>

          <div className="pass-generator">
                {/* PASSWORD GENERATOR */}
            <button
              id="pass-gen-btn"
              onClick={passGenerator}
            >Generate password
            </button>
          </div>

                {/* PASSWORD RESULTS AND COPY BUTTONS */}
          <div className="pass-button">
            <Password  src={logo}>{password1}</Password>
            <Password  src={logo}>{password2}</Password>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
