import React from "react";
import ReactDOM from "react-dom";
import "../style.css";

export default function NavLinks() {
  return (
    <div  /* style={{position:"relative", msTransform: "skewY(20deg)",height:"500px", backgroundColor:"red",   /* IE 9 */
      //  transform: "skewY(-20deg)",
      //  overFlow:"hidden", zIndex:50 }}  
    >
      <ul className="flex gap-5">
        <li>home</li>
        <li>products</li>
        <li>about</li>
        <li>contact</li>
      </ul>
   </div>

  );
}
//   <div style={{position:"relative", transform:"skewY(0deg)" }} >
//       <ul style={styleNavLinks}>
//         <li>home</li>
//         <li>products</li>
//         <li>about</li>
//         <li>contact</li>
//       </ul>
//     </div>
//       </div>
//   );
// }
// const styleNavLinks = {
//   width: "vw",
//   height: "40px",
//   backgroundColor: "",
//   color: "gray",
//   listStyle: "none",
//   display: "flex",
//   gap:"20px",

//   margin: "5px",
//   padding: "5px",
//   alignItems: "top",
//   alignContent:"center",
// };
