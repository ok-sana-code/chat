import React, { Component } from "react";
import Time from "../../Time";
import Avatar from "../ChatList/Avatar";


export default class ChatItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="d-block">
          <div className="chat__item__content">
            <div className="chat__msg">{this.props.msg}</div>
          </div>
          <Time />
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    );
  }
}
