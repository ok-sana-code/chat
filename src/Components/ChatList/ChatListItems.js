import React, { Component } from "react";
import Avatar from "./Avatar";

export default class ChatListItems extends Component {
  // constructor(props) {
  //   super(props);
  // }
  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <div className="userMeta">
          <Avatar
            image={
              this.props.image ? this.props.image : "http://placehold.it/80x80"
            }
            isOnline={this.props.isOnline}
          />
          <div>
            <p>{this.props.name}</p>
            <p className="lastMassage">Massage from Anna</p>
          </div>
        </div>
        <div className="time">Jun 12, 2017</div>
      </div>
    );
  }
}
