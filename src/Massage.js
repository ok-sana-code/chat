import React,{useState} from "react";
import Time from "./Time";
import axios from "axios";
import Avatar from "./Components/ChatList/Avatar";

export default function Massage(){
   const [massage, setMassage] = useState("");
   const [loaded, setLoaded] =useState(true)
    function SendMassage(response) {
      setLoaded(true)
      return setMassage(response.data.value);
    }

    let Url = "https://api.chucknorris.io/jokes/random/";
    axios.get(Url).then(SendMassage);
    
    if (loaded === true) {
      
      return (
         
        <div className="massage p-2 d-flex">
          <Avatar
            isOnline="active"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
          />

          <div className="ml-3">
            <p className="massage-text">{massage}</p>
            <div className="time">
              <Time />
            </div>
          </div>
        </div>
      );
      
    }else{
      return null
    }
  }
    
