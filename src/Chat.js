import React, { useState } from "react";
import "./Chat.css";
import MyMassage from "./MyMassage";
// import MassageForm from "./MassageForm";

export default function Chat() {
  const [massage, setMassage] = useState(null);
  const [sended, setSended] = useState(false);

  
  function HandleChangeValue(response) {
    setMassage(response.target.value);
    
  }
  function HandleSubmit(event) {
    event.preventDefault();
    setSended(true)
    HandleChangeValue();
    console.log(massage);
  }

  if (sended) {
    return (
      <div className="Chat">
        <div className="User d-flex">
          <div className="user-avatar">OS</div>
          <h2>Oksana</h2>
        </div>
        <div className="massages p-2">
          <div className="massage p-2 d-flex">
            <div className="user-avatar">OS</div>
            <div className="ml-3">
              <p className="massage-text">Hello, Oksana</p>
              <div className="time">4/12/17, 4:00 AM</div>
            </div>
          </div>
          <MyMassage massage={massage}/>
          
        </div>
        <div className="MassageForm">
          <form onSubmit={HandleSubmit} className=" form-row form-inline pt-2">
            <input
              className="form-control col-7"
              type="text"
              placeholder="Type your massage"
              onChange={HandleChangeValue}
            ></input>
            <input
              type="submit"
              className="btn col-1 ml-1"
              value="Send"
            ></input>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Chat">
        <div className="User d-flex">
          <div className="user-avatar">OS</div>
          <h2>Oksana</h2>
        </div>
        <div className="massages p-2">
          <div className="massage p-2 d-flex">
            <div className="user-avatar">OS</div>
            <div className="ml-3">
              <p className="massage-text">Hello, Oksana</p>
              <div className="time">4/12/17, 4:00 AM</div>
            </div>
          </div>
        </div>
        <div className="MassageForm">
          <form onSubmit={HandleSubmit} className=" form-row form-inline pt-2">
            <input
              className="form-control col-7"
              type="text"
              placeholder="Type your massage"
              onChange={HandleChangeValue}
            ></input>
            <input
              type="submit"
              className="btn col-1 ml-1"
              value="Send"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}
