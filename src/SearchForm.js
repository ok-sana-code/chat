import React from "react";
import "./SearchForm.css"

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <div className="user-avatar">OS</div>
      <form className=" pt-3">
        <input className="search-form" type="search" placeholder="🔍 Search or start new chat"></input>
      </form>
    </div>
  );
}
