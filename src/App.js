import React from "react";
import "./App.css"
import SearchForm from "./SearchForm"
import ChatList from "./Components/ChatList/ChatList";
import Chat from "./Components/ChatContent/ChatContent";
function App() {
  return (
    <div className="App row">
   
        <div className="col-4 p-0">
          <SearchForm/>
         <ChatList/>
        </div>
        <div className="col-8 p-0">
         <Chat/>
        </div>
      
    </div>
  );
}

export default App;
