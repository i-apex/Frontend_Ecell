import React from "react";
import "./Card1.css"
import photo from "../Assets/Untitled.jpeg"
const Card1 = (props) => {
    return (
        <div className="card1-container">
            <figure className="snip1344"><img src={props.photo}alt="profile-sample1" className="background" /><img src={props.photo} alt="profile-sample1" className="profile" />
                <figcaption>
                    <h3>{props.name}<span>{props.position}</span></h3>
                    <div className="icons"><a href="#"><i className="ion-social-linkedin-outline"></i></a><a href="#"> <i className="ion-social-twitter-outline"></i></a><a href="#"> <i className="ion-social-instagram-outline"></i></a></div>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card1;