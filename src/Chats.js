import React from "react";
 import "./Chats.css"

export default function Chats(){
    return (
      <div className="Chats">
        <h1>Chats</h1>
        <div className="contact d-flex justify-content-between">
          <div className="d-flex">
            <div className="user-avatar">JT</div>
            <div className="user-info">
              <h3>Julia</h3>
              <p>Massage from Julia</p>
            </div>
          </div>
          <div>Jun 12, 2017</div>
        </div>
        <hr />
        <div className="contact d-flex justify-content-between">
          <div className="d-flex">
            <div className="user-avatar">KS</div>
            <div className="user-info">
              <h3>Katia</h3>
              <p>Massage from Katia</p>
            </div>
          </div>
          <div>Jun 12, 2017</div>
        </div>
        <hr />
        <div className="contact d-flex justify-content-between">
          <div className="d-flex">
            <div className="user-avatar">AO</div>
            <div className="user-info">
              <h3>Anna</h3>
              <p>Massage from Anna</p>
            </div>
          </div>
          <div>Jun 12, 2017</div>
        </div>
        <hr />
      </div>
    );
}