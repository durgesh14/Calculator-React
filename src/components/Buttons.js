import React from "react";
import "../App.css";
export default function Buttons({ buttonName, onBtnClick, className }) {
  return (
    // Button component returning button element
    <button className={`square-btns ${className}`} onClick={onBtnClick}>
      {buttonName}
    </button>
  );
}
