import React from "react";
import EventCard from "../components/EventCard";
import { useState } from "react";
import RegPopup from "../components/RegPopup";

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
                <div className="font-bold tracking-wide md:text-4xl  text-white text-center mb-5 mt-14 md:mt-32">EVENTS</div>
                <div className=" w-full flex justify-center">
                    <ul className="flex w-fit flex-row border-b border-gray-400 border-opacity-50 [&>li]:px-3 [&>li>button]:text-white md:[&>li]:text-xl">
                        <li><button onClick={handleUpcoming} className="upcoming_btn border-b">Upcoming Events</button></li>
                        <li><button onClick={handleongoing} className="ongoing_btn">Ongoing Events</button></li>
                        <li><button onClick={handlePast} className="past_btn">Past Events</button></li>
                    </ul>
                </div>
                
                <EventCard callPopup={callPopup} />
                <EventCard callPopup={callPopup} />
                <EventCard callPopup={callPopup} />
                <EventCard callPopup={callPopup} />
                <EventCard callPopup={callPopup} />

            </div>
        </>
    );
}

export default EventsPage;