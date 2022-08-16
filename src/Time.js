import React from "react";
import "./Time.css"
export default function Time(){
   
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const initialDate = new Date();
let hours = initialDate.getHours();
let minutes = initialDate.getMinutes();
let date = initialDate.getDate();
let month = initialDate.getMonth()+1;
let year = initialDate.getFullYear();

return(
  <div className="Time" style={styles}>
    <span>{String(`${date}/${month}/${year}, ${hours}:${minutes}`)}</span>
  </div>
)


    
}
