import React from "react";
import "./Card2.css"
import photo from "../Assets/Untitled.jpeg"
const Card2 = () => {
    return (
        <div>
                <div class="wrapper">
         <div class="card front-face">
            <img src={photo}/>
         </div>
         <div class="card back-face">
            <img src={photo}/>
            <div class="info">
               <div class="title">
               Shubham Ahirwar
               </div>
               <p>
                  HEAD
               </p>
            </div>
            <ul>
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
            </ul>
         </div>
      </div>
        </div>
    )
}

export default Card2;