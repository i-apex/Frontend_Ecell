import React from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react'
import InitiativeCard from "../components/InitiativeCard";

const Home = () => {
    // const carouselElement = document.getElementById('carousel-example');
    // const slides = [<div className="item w-full h-96 m-10 bg-white"></div>,<div className="item w-full h-96 m-10 bg-white"></div>,<div className="item w-full h-96 m-10 bg-white"></div>,<div className="item w-full h-96 m-10 bg-white"></div>,<div className="item w-full h-96 m-10 bg-white"></div>]
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
    return (
        <>
            <h1 className="text-white mt-24 ml-6 mb-5 text-6xl md:text-8xl font-extrabold">E-CELL IIT TIRUPATI</h1>
            <h2 className="text-white m-5 text-3xl font-mono">ABOUT US</h2>
            <p className="text-white m-5 md:w-2/4 text-lg animate-slidein">The morning sun cast a warm glow over the sleepy town, gently coaxing its inhabitants to rise and embrace the day. Birds chirped cheerfully, their melodies weaving through the tranquil air. In the distance, the faint aroma of freshly brewed coffee wafted from a quaint café, inviting passersby to indulge in its comforting embrace. It was a moment of quiet serenity, a pause in the hustle and bustle of life, where time seemed to slow down and the simple joys of existence took center stage.</p>
            <Link to="/Team"><button class="bg-blue-800 text-white hover:scale-110 transition-transform duration-300 font-bold w-48 flex flex-row justify-between py-2 mx-5 px-4 rounded-full">
                <h1 className="text-lg h-fit  pt-1">Know More</h1><svg fill="white" className="w-fill h-10" viewBox="0 0 24 24">
                    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd" />
                </svg>
            </button></Link>
            <h1 className="text-white mt-24 text-5xl text-center font-extrabold">OUR INITIATIVES</h1>
            <div className="animate-slidein_b">
                <CCarousel controls indicators>
                    <CCarouselItem>
                        <InitiativeCard name={"INITIATIVE 1"}></InitiativeCard>
                    </CCarouselItem>
                    <CCarouselItem>
                        <InitiativeCard name={"INITIATIVE 2"}></InitiativeCard>
                    </CCarouselItem>
                    <CCarouselItem>
                        <InitiativeCard name={"INITIATIVE 3"}></InitiativeCard>
                    </CCarouselItem>
                </CCarousel>
            </div>


        </>
    )
}

export default Home;