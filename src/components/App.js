/* eslint-disable no-eval */
import React, { useState } from "react";
import "../App.css";
import Buttons from "./Buttons";

function App() {
  const [value, setValue] = useState("0"); //state for value
  const [ans, setAns] = useState(""); //state for ans

  function handleClick(data) {
    // handling the buttons clicks
    switch (data) {
      case "C": // if C is clicked, value and ans are set to 0
        setValue("0");
        setAns("");
        break;
      case "+/-": // is +/- is clicked, changing sign of last digit
        // setValue((parseFloat(value) * -1).toString());
        let num = value.charAt(value.length - 2);
        if (num === "-" || num === "+") {
          setValue(
            value.slice(0, value.length - 2) +
              (parseFloat(value.substr(-2)) * -1).toString()
          );
        } else {
          setValue(
            value.slice(0, value.length - 1) +
              (parseFloat(value.charAt(value.length - 1)) * -1).toString()
          );
        }

        break;
      case "%": // if % is clicked, diving value/ans by 100
        ans === ""
          ? setValue(value)
          : setValue((parseFloat(value) / 100).toString());
        if (ans === "") {
          setAns(ans);
        } else {
          setAns((parseFloat(ans) / 100).toString());
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (
          //if +,-, *, / is clicked appending the data in value
          value.endsWith("+") ||
          value.endsWith("-") ||
          value.endsWith("*") ||
          value.endsWith("/")
        ) {
          setValue(value.slice(0, -1) + data);
        } else {
          setValue(value + data);
        }
        // setAns(value);
        break;
      case "=":
        try {
          const evalResult = eval(value); // evaluates the expression entered in the calculator
          setAns(evalResult.toString()); // sets the answer in the ans state
          setValue(evalResult.toString()); // sets the value to the answer
        } catch (error) {
          setAns("Error"); // sets the error message in the ans state if evaluation fails
          setValue("0"); // resets the value to 0
        }
        break;
      case ".": //if . is clicked, the . is added to value only for the first time
        if (!value.includes(".")) {
          setValue(value + data);
        }
        break;

      default: //default case
        if (value === "0" || value === "ERROR") {
          setValue(data);
          setAns("");
        } else {
          console.log("value: ", value);
          console.log("data: ", data);
          setValue(value + data);
        }
        break;
    }
  }

  return (
    // returning div with Button component
    <div className={"main-container"}>
      <div className={"calculator-container"}>
        <div className={"calculator-screen"}>
          <span style={{ order: 2 }}>{ans}</span>

          <span style={{ order: 1 }}>{value}</span>
        </div>
        <div className={"calculator-body"}>
          <div className={"calculator-btns"}>
            <div className={"calculator-row1"}>
              {/* Passing button name, click handler and class name as props */}
              <Buttons
                buttonName="C"
                onBtnClick={() => handleClick("C")}
                className="color-button"
              />
              <Buttons
                buttonName="+/-"
                onBtnClick={() => handleClick("+/-")}
                className="color-button"
              />
              <Buttons
                buttonName="%"
                onBtnClick={() => handleClick("%")}
                className="color-button"
              />
              <Buttons
                buttonName="/"
                onBtnClick={() => handleClick("/")}
                className="color-button"
              />
            </div>
            <div className={"calculator-row2"}>
              <Buttons buttonName="7" onBtnClick={() => handleClick("7")} />
              <Buttons buttonName="8" onBtnClick={() => handleClick("8")} />
              <Buttons buttonName="9" onBtnClick={() => handleClick("9")} />
              <Buttons
                buttonName="*"
                onBtnClick={() => handleClick("*")}
                className="color-button"
              />
            </div>
            <div className={"calculator-row3"}>
              <Buttons buttonName="4" onBtnClick={() => handleClick("4")} />
              <Buttons buttonName="5" onBtnClick={() => handleClick("5")} />
              <Buttons buttonName="6" onBtnClick={() => handleClick("6")} />
              <Buttons
                buttonName="-"
                onBtnClick={() => handleClick("-")}
                className="color-button"
              />
            </div>
            <div className={"calculator-row4"}>
              <Buttons buttonName="1" onBtnClick={() => handleClick("1")} />
              <Buttons buttonName="2" onBtnClick={() => handleClick("2")} />
              <Buttons buttonName="3" onBtnClick={() => handleClick("3")} />
              <Buttons
                buttonName="+"
                onBtnClick={() => handleClick("+")}
                className="color-button"
              />
            </div>
            <div className={"calculator-row5"}>
              <Buttons buttonName="0" onBtnClick={() => handleClick("0")} />
              <Buttons buttonName="." onBtnClick={() => handleClick(".")} />
              <Buttons
                buttonName="="
                onBtnClick={() => handleClick("=")}
                className="color-button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
