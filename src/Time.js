import React from "react";
import "./Time.css"
export default function Time(){
   
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const initialDate = new Date();

let hours = initialDate.getHours();
 if (hours < 10) {
   hours = `0${hours}`;
 }
let minutes = initialDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let date = initialDate.getDate();

let month = initialDate.getMonth()+1;
if (month < 10) {
  month=`0${month}`;
}
let year = initialDate.getFullYear();

return(
  <div className="Time" style={styles}>
    <span>{String(`${date}/${month}/${year}, ${hours}:${minutes}`)}</span>
  </div>
)


    
}
