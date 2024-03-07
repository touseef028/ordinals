import React, { useState } from "react";
import "./App.css";
import Logo from "./Assets/ordinalsLogo.webp";
import { eligibleList } from "./Constants/EligbileList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [eligible, setEligible] = useState(false);

  const checkEligibility = () => {
    if (eligibleList.includes(inputValue.trim())) {
      setEligible(true);
    } else {
      setEligible(false);
    }
    setShowDialog(true);
  };

  return (
    <div className="App">
      <div className="header">
        <img alt="Ordinals" src={Logo} />
      </div>
      <div className="eligibilityBox">
        <h1>Eligibility Checker</h1>
        <div className="eligibilityInputBox">
          <input
            type="text"
            className="inputStyle"
            placeholder="Enter your Wallet Address"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="buttonEligibility" onClick={checkEligibility}>
            Check Status
          </button>
        </div>
        {showDialog && (
          <div className="dialog">
            <div onClick={() => setShowDialog(false)} className="crossBtn">x</div>
            {eligible ? (
              <p>Congratulations! You are eligible.</p>
            ) : (
              <p>Sorry, you are not eligible for it.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
