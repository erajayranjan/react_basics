import React from "react";
import ReactDom from "react-dom";

import Child from "./demo/Child"

export default function MyApp(){
  const date=new Date();// new Date() for current date_time
  let hours=date.getHours();
  let minutes=date.getMinutes();
  let timeOfDay="Morning";
  if(hours<12){
    timeOfDay="Morning";
  }
  else if(hours<18){
    timeOfDay="Afternoon";
  }
  else{
    timeOfDay="Night";
  }
  return(

  <div>
      <h1> Good {timeOfDay} 
      </h1>
      <p>Current Time :      
      {hours}:{minutes}
      </p>

  </div>
);
}