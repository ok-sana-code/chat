import React from "react";
import "./MassageForm.css" 
export default function MassageForm(){
    return (
      <div className="MassageForm">
        <form className=" form-row form-inline pt-2">
          <input
            className="form-control col-7"
            type="text"
            placeholder="Type your massage"
          ></input>
          <input type="submit" className="btn col-1 ml-1" value="Send"></input>
        </form>
      </div>
    );
}