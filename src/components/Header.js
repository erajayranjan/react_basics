import React from "react";
import "../style.css";
export default function Header(){
  return (
      <div className="w-full bg-blue-800 p-4 " >
        <nav className="flex justify-between">
          <div>
            <img    
              src="https://lh3.googleusercontent.com/ogw/ADGmqu9nXSPJq6SgQ8Rcs5ApqYORU9WgfWZTp1bvFDFB7w=s32-c-mo" alt="logo" 
            />
          </div>
          <div>
            <ul>
              <li>
                Home
              </li>
              <li>
                About
              </li>
              <li>
                Contact
              </li>
            </ul>
          </div>
          <div>
              <img    
              src="https://lh3.googleusercontent.com/ogw/ADGmqu9nXSPJq6SgQ8Rcs5ApqYORU9WgfWZTp1bvFDFB7w=s32-c-mo" alt="logo" 
            />
          </div>
        </nav>
      </div>
  );
}