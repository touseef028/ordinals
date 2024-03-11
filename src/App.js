import React, { useState } from "react";
import "./App.css";
import Logo from "./Assets/ordinalsLogo.webp";
import { eligibleList } from "./Constants/EligbileList";
import { eligibleList2 } from "./Constants/EligbileList2";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [eligibilityMessage, setEligibilityMessage] = useState("");

  const checkEligibility = () => {
    if (eligibleList.includes(inputValue.trim())) {
      setEligibilityMessage("Congratulations, you are pepoor handed. (Eligible)");
    } else if (eligibleList2.includes(inputValue.trim())) {
      setEligibilityMessage("Congratulations atleast you made it to phase II (fcfs eligible)");
    } else {
      setEligibilityMessage("Sorry, you will have to stay in the trenches. (Non eligible)");
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
            <p>{eligibilityMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
