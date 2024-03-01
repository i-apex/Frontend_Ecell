import React from "react";
import "./Card3.css"
import photo from "../Assets/Untitled.jpeg"
const Card3 = () => {
    return (
        <div>
            <div class="container">

                <div class="card-wrapper">

                    <div class="card">

                        <div class="card-image">
                            <img src={photo} alt="profile one"/>
                        </div>

                        <ul class="social-icons">
                            <li>
                                <a href="">
                                    <i class="ion-social-reddit-outline"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="ion-social-twitter-outline"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="ion-social-vimeo-outline"></i>
                                </a>
                            </li>
                        </ul>

                        <div class="details">
                            <h2>Shubham Ahirwar
                                <br/>
                                    <span class="job-title">Core</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3;