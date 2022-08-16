import React from "react";

export default function MyMassage(props) {
  return (
    <div className="my-massage d-flex justify-content-end mr-3">
      <div>
        <p className="massage-text">{props.massage}</p>
        <div className="time">4/12/17, 4:00 AM</div>
      </div>
    </div>
  );
}
