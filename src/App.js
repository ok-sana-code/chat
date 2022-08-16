import React from "react";
import "./App.css"
import SearchForm from "./SearchForm"
import Chats from "./Chats";
import Chat from "./Chat";
function App() {
  return (
    <div className="App row">
   
        <div className="col-4 p-0">
          <SearchForm/>
         <Chats/>
        </div>
        <div className="col-8 p-0">
         <Chat/>
        </div>
      
    </div>
  );
}

export default App;
