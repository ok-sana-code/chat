import React, { useState } from "react";
import "./ChatContent1.css";
import MyMassage from "../../MyMassage";
import Massage from "../../Massage";
import axios from "axios";
// import MassageForm from "./MassageForm";

export default function Chat() {
  const [myMassage, setMyMassage] = useState(null);
  const [massage, setMassage] = useState("");
  const [sended, setSended] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  function HandleChangeValue(response) {
    setMyMassage(response.target.value);
  }
  function HandleSubmit(event) {
    event.preventDefault();
    setSended(true);
    HandleChangeValue();
  }
  function SendMassage(response) {
    return setMassage(response.data.value);
  }
  
    let Url = "https://api.chucknorris.io/jokes/random/";
    axios.get(Url).then(SendMassage);
   
  if (sended) {
    return (
      <div className="Chat">
        <div className="User d-flex">
          <div className="user-avatar">OS</div>
          <h2>Oksana</h2>
        </div>
        <div className="massages p-2">
          <MyMassage myMassage={myMassage} />
          <Massage massage={massage} />
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
        <div className="massages p-2"></div>
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
