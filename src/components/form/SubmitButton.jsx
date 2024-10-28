import React from "react";
import "../../partials/componentsCss/_submitButton.scss";

const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className="btn">{text}</button>
    </div>
  );
};

export default SubmitButton;
