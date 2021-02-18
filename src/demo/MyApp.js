import React from "react";
import ReactDom from "react-dom";
import "../style.css";
import ContactCard from "./ContactCard";

function MyApp(){
  return (
    <div className="w-full bg-blue-500 flex flex-start flex-wrap justify-center content-center p-2">
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
    
  );
}

export default MyApp

// import React from "react";
// import ReactDom from "react-dom";

// import Child from "./demo/Child"

// export default function MyApp(){
//   const date=new Date(2020,7,10,1,50);// new Date() for current date_time
//   let hours=date.getHours();
//   let minutes=date.getMinutes();
//   let timeOfDay;
//   const style={
//     color:"red", 
//     backgroundColor:"blue",
//     fontStyle:"italic",
//     fontWeight:"bold",
//     fontSize:50,
//   }
//   if(hours<12){
//     timeOfDay="Morning";
//     style.color="#005f6f";
//   }
//   else if(hours<18){
//     timeOfDay="Afternoon";
//     style.color="pink";
//   }
//   else{
//     timeOfDay="Night";
//     style.color="yellow";
//   }
  
//   return(

//   <div>
//       <h1 style={style}> Good {timeOfDay} 
//       </h1>
//       <p style={style}>Current Time : {`${hours}  ${minutes}`} 
      
//       </p>
     
//       {`${date} asdf gh jkl;`}
      

//   </div>
// );
// }

/*
<div className="container">
            <img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=250&q=80" alt="image"

            />
            <h1> 
                Hello world
            </h1>
            
            <p>
            This an image showing beauty of sunrise in mountain area.
            Its really great to visit such desstination in coming time.
            </p>
      </div>
      <div className="container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03eqf91-3cfMs1EroeOdEaE8YzAv9tzgKBg&usqp=CAU" alt="image"

            />
            <h1> 
                Hello world
            </h1>
            
            <p>
            This an image showing beauty of sunrise in mountain area.
            Its really great to visit such desstination in coming time.
            </p>
      </div>
*/