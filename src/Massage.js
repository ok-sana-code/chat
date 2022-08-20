import React from "react";
import Time from "./Time";

export default function Massage(props){
   
        return (
          <div className="massage p-2 d-flex">
            <div className="user-avatar">OS</div>
            <div className="ml-3">
              <p className="massage-text">{props.massage}</p>
              <div className="time">
                <Time />
              </div>
            </div>
          </div>
          
                );
    }
    
