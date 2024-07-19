import React from "react";
import EventCard from "../components/EventCard";
import { useState } from "react";
import RegPopup from "../components/RegPopup";
import photo1 from "../Assets/ECellandIIMM_ExpertLectureFlyer.png";
import photo2 from "../Assets/E-auction.jpg";
import photo3 from "../Assets/inmoviduposter.png";
import photo4 from "../Assets/IPRWorkshop.jpeg";
import photo5 from "../Assets/Workshoponstartupfunding.jpg";


const upcomingEvents = [{name:"",date:"",}]

function EventsPage(props) {
    const [currentEvent,setCurrentEvent] = useState(".upcoming_btn");
    const [regPopup, setRegpopup] = useState(false);
    const [eventName, setEventName] = useState("");
    const callPopup = (eventName) => {
        setRegpopup(true);
        setEventName(eventName);    

        // document.body.style.overflow = 'hidden';
    }
    const closePopup = () => {
        setRegpopup(false);
        document.body.style.overflow = 'visible';
    }
    
    const handleUpcoming = () =>{
        setCurrentEvent((prevClass)=>{
            document.querySelector(prevClass).classList.remove("border-b")
            document.querySelector(".upcoming_btn").classList.add("border-b")
            return ".upcoming_btn"
        })
    }
    const handleongoing = () =>{
        setCurrentEvent((prevClass)=>{
            document.querySelector(prevClass).classList.remove("border-b")
            document.querySelector(".ongoing_btn").classList.add("border-b")
            setCurrentEvent(".ongoing_btn")
            return ".ongoing_btn"
        })
    }
    const handlePast = () =>{
        setCurrentEvent((prevClass)=>{
            document.querySelector(prevClass).classList.remove("border-b")
            document.querySelector(".past_btn").classList.add("border-b")
            setCurrentEvent(".past_btn")
            return ".past_btn"
        })

    }
    return (
        <>
            <div >  
                <RegPopup eventName={eventName} trigger={regPopup} closePopup={closePopup} />
                <div className="font-bold tracking-wide md:text-4xl  text-vlack text-center mb-5 mt-14 md:mt-32">EVENTS</div>
                <div className=" w-full flex justify-center">
                    <ul className="flex w-fit flex-row border-b border-gray-400 border-opacity-50 [&>li]:px-3 [&>li>button]:text-blaack md:[&>li]:text-xl">
                        <li><button onClick={handleUpcoming} className="upcoming_btn border-b border-black">Upcoming Events</button></li>
                        <li><button onClick={handleongoing} className="ongoing_btn border-black">Ongoing Events</button></li>
                        <li><button onClick={handlePast} className="past_btn border-black">Past Events</button></li>
                    </ul>
                </div>
                
                <EventCard callPopup={callPopup} eventName="E-Auction" eventInfo="E-AUCTION event was organized in the college and gave students an opportunity to showcase their negotiation skills and business acumen." img={photo2}/>
                <EventCard callPopup={callPopup} eventName="IPR Workshop" eventInfo="A one-day workshop “IPR Workshop on Innovation, Invention and Creativity” on 19th August 2023 .This workshop was mainly planned with the motive of spreading the knowledge on Intellectual Property Rights." img={photo4}/>
                <EventCard callPopup={callPopup} eventName="Workshop on Startup Funding Ecosystem" eventInfo="E-CELL and IIT Tirupati- Institutions Innovation Council  jointly organized a workshop on Start-ups funding eco-system on 30th August 2023 in which CEO of T-HUB and people from golden hill capital and success innovation fund were invited." img={photo3}/>
                <EventCard callPopup={callPopup} eventName="Talk session" eventInfo=" A session on The Art and Science of Supply Chain Management Impact on Business by Mr.T.A.B.Barathi, Senior vice president of Wheels India Ltd. The TVS group was hosted." img={photo1}/>
                <EventCard callPopup={callPopup} eventName="Talk Session on Business Model Canvas" eventInfo="A guest lecture session on the Business Model Canvas by Mridula Chhetri (Founder and CEO of Movidu Technologies),which included Breakdown of pitch deck and Breakdown of Product market fit." img={photo5}/>

            </div>
        </>
    );
}

export default EventsPage;