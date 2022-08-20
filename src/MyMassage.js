import React from "react";
import Time from "./Time"

export default function MyMassage(props) {
  return (
    <div className="my-massage d-flex justify-content-end mr-3">
      <div>
        <p className="massage-text">{props.myMassage}</p>
        <Time/>
      </div>
    </div>
  );
}
