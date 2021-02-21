import React from "react";
import ReactDom from "react-dom";

import "../style.css";

export default function ContactCard(props){
  return (
    <div className="flex flex-col justify-center font-bold content-center text-sm m-1 p-1 sm: w-5/12 md: w-1/5 text-center bg-blue-100 text-blue-900 shadow-2xl">
      <img src={props.contact.img} alt="image"

      />
      <h1 className="font-bold text-lg text-gray-700 "> 
        {props.contact.name}
      </h1>
            
      <p>
        { props.contact.description }
      </p>
    </div>
  );
}