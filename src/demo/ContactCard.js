import React from "react";
import ReactDom from "react-dom";

import "../style.css";

export default function ContactCard(){
  return (
    <div className="container">
      <img    src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="image"

      />
      <h1> 
        Hello world
      </h1>
            
      <p>
        This an image showing beauty of sunrise in mountain area.
         Its really great to visit such desstination in coming time.
      </p>
    </div>
  );
}