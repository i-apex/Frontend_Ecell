import React from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { CCarousel, CCarouselItem, CCarouselCaption, CImage, CCard } from '@coreui/react'
import InitiativeCard from "../components/InitiativeCard";
import MottoCard from "../components/MottoCard";
import photo1 from '../Assets/ideate.jpg';
import photo2 from '../Assets/innovate.jpg';
import photo3 from '../Assets/implement.jpg';
import slide1 from '../Assets/IMG_2100.JPG';
import slide2 from '../Assets/IMG_2324.jpg';
import slide3 from '../Assets/IMG_2327.jpg';
import slide4 from '../Assets/IMG_2577.jpg';
import slide5 from '../Assets/DSC_6558.jpg';
import slide6 from '../Assets/DSC_2594.jpg';
import plane_img from '../Assets/paper_plane.jpg';
import background_img from '../Assets/background.jpg'
// import plane_svg from '../Assets/plane.svg';
import './Home.css';

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

            <div className="w-100 absolute top-0 -z-10">
                <img src={background_img} className="w-100 h-[100vh] object-cover opacity-[10%]"></img>
            </div>
            <section id="intro" className="h-[90vh]">
                <div className="h-[20vh]">
                    <h1 className="text-blue-700 text-center w-[100%] absolute mt-[38vh] mb-5 text-4xl md:text-8xl font-extrabold animate-[slideinY_1s]">ENTREPRENEURSHIP CELL</h1>
                    <div className="flex justify-center animate-[slideinY_1.5s]">
                        <h1 className="text-blue-700 text-center mt-[52vh] ml-6 mb-5 text-3xl md:text-6xl font-extrabold ">IIT TIRUPATI</h1>
                        <img className="relative w-10 md:w-20 ml-10 mt-[52vh] h-fit" src={plane_img}></img>
                    </div>
                </div>
            </section>
            <div className="bg-blue-700 flex justify-center w-[100%] h-[10vh]">
                <h1 className="text-white md:mt-[2vh] mt-[3vh] absolute text-center text-2xl md:text-5xl animate-[slideinY_1.3s_ease-in]">IDEATE  |  INNOVATE  |  IMPLEMENT</h1>
            </div>
            {/* <h2 className="text-black m-5 text-3xl font-mono">ABOUT US</h2>
            <p className="text-black m-5 md:w-2/4 text-lg animate-slidein">The morning sun cast a warm glow over the sleepy town, gently coaxing its inhabitants to rise and embrace the day. Birds chirped cheerfully, their melodies weaving through the tranquil air. In the distance, the faint aroma of freshly brewed coffee wafted from a quaint café, inviting passersby to indulge in its comforting embrace. It was a moment of quiet serenity, a pause in the hustle and bustle of life, where time seemed to slow down and the simple joys of existence took center stage.</p>
            <Link to="/Team"><button class="bg-blue-800 text-white hover:scale-110 transition-transform duration-300 font-bold w-48 flex flex-row justify-between py-2 mx-5 px-4 rounded-full">
                <h1 className="text-lg h-fit  pt-1">Know More</h1><svg fill="white" className="w-fill h-10" viewBox="0 0 24 24">
                    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd" />
                </svg>
            </button></Link> */}

            <h1 className="text-blue-700 mt-24 text-5xl text-center font-extrabold">OUR MOTTO</h1>
            <div className="flex justify-center flex-col md:flex-row">
                <div className="zoom"><MottoCard logo={photo1} title={"IDEATE"} content={"We help students to identify problems all around us to propose a solution for creating a successful enterprise"} /></div>
                <div className="zoom"> <MottoCard className="zoom" logo={photo2} title={"INNOVATE"} content={"Exposure to technology will bring in the Innovation”, that's exactly what we believe in"} /></div>
                <div className="zoom"> <MottoCard className="zoom" logo={photo3} title={"IMPLEMENT"} content={"We help students to align themselves along the entrepreneurial lines  to turn their idea into reality."} /></div>
               
               
            </div>
            <h1 className="text-blue-700 mt-24 mb-16 text-5xl text-center font-extrabold">OUR VISION</h1>
            <div className="w-[90%] mx-auto flex justify-between h-fit">
                <div className="w-2/3 mx-auto"> 
                    <CCarousel controls indicators>
                        <CCarouselItem>
                            <CImage src={slide1}/>
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage src={slide2}/>  
                        </CCarouselItem>
                            <CCarouselItem>
                            <CImage src={slide3}/>   
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage src={slide4}/> 
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage src={slide5}/>   
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage src={slide6}/>   
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <div className="w-1/3 bg-gray-600 rounded-r-2xl"></div>
            </div>

            <h1 className="text-blue-700 mt-24 text-5xl text-center font-extrabold">INITIATIVES</h1>
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