import React from "react";
import "./Card1.css"
import photo from "../Assets/Untitled.jpeg"
const Card1 = (props) => {
    return (
        <div class="card1-container">
            <figure class="snip1344"><img src={photo}alt="profile-sample1" class="background" /><img src={photo} alt="profile-sample1" class="profile" />
                <figcaption>
                    <h3>{props.name}<span>{props.position}</span></h3>
                    <div class="icons"><a href="#"><i class="ion-social-linkedin-outline"></i></a><a href="#"> <i class="ion-social-twitter-outline"></i></a><a href="#"> <i class="ion-social-instagram-outline"></i></a></div>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card1;