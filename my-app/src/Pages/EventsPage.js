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
const EventsInfo = [{name:"E-Auction",description:"E-AUCTION event was organized in the college and gave students an opportunity to showcase their negotiation skills and business acumen.",photo:photo2,state:"past"},
    {name:"IPR Workshop",description:"A one-day workshop “IPR Workshop on Innovation, Invention and Creativity” on 19th August 2023 .This workshop was mainly planned with the motive of spreading the knowledge on Intellectual Property Rights.",photo:photo4,state:"past"},
    {name:"Workshop on Startup Funding Ecosystem",description:"E-CELL and IIT Tirupati- Institutions Innovation Council  jointly organized a workshop on Start-ups funding eco-system on 30th August 2023 in which CEO of T-HUB and people from golden hill capital and success innovation fund were invited.",photo:photo3,state:"past"},
    {name:"Talk session",description:"A session on The Art and Science of Supply Chain Management Impact on Business by Mr.T.A.B.Barathi, Senior vice president of Wheels India Ltd. The TVS group was hosted.",photo:photo1,state:"past"},
    {name:"Talk Session on Business Model Canvas",description:"A guest lecture session on the Business Model Canvas by Mridula Chhetri (Founder and CEO of Movidu Technologies),which included Breakdown of pitch deck and Breakdown of Product market fit.",photo:photo5,state:"past"}
]

function EventsPage(props) {
    const [currentEvent,setCurrentEvent] = useState("upcoming_btn");
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
            document.querySelector("."+prevClass).classList.remove("border-b")
            document.querySelector(".upcoming_btn").classList.add("border-b")
            return "upcoming_btn"
        })
    }
    const handleongoing = () =>{
        setCurrentEvent((prevClass)=>{
            document.querySelector("."+prevClass).classList.remove("border-b")
            document.querySelector(".ongoing_btn").classList.add("border-b")
            return "ongoing_btn"
        })
    }
    const handlePast = () =>{
        setCurrentEvent((prevClass)=>{
            document.querySelector("."+prevClass).classList.remove("border-b")
            document.querySelector(".past_btn").classList.add("border-b")
            return "past_btn"
        })

    }
    var numEvents = 0;
    return (
        <>
            <div >  
                <RegPopup eventName={eventName} trigger={regPopup} closePopup={closePopup} />
                <h1 className="text-blue-500 my-20  text-5xl text-center font-extrabold">Events</h1>
                <div className=" w-full flex justify-center">
                    <ul className="flex w-fit flex-row border-b border-gray-400 border-opacity-50 [&>li]:px-3 [&>li>button]:text-blaack md:[&>li]:text-xl">
                        <li><button onClick={handleUpcoming} className="upcoming_btn border-b border-black">Upcoming Events</button></li>
                        <li><button onClick={handleongoing} className="ongoing_btn border-black">Ongoing Events</button></li>
                        <li><button onClick={handlePast} className="past_btn  border-black">Past Events</button></li>
                    </ul>
                </div>
                
                {EventsInfo.map((eventinfo,index)=>{if(eventinfo.state==currentEvent.split("_")[0]){
                    numEvents++;
                    return <EventCard callPopup={callPopup} key={index}  eventName={eventinfo.name} eventInfo={eventinfo.description} img={eventinfo.photo}/>   
                }})}
                {numEvents==0 && <div className="mb-72 mt-12"><h1 className="text-center">No {currentEvent.split("_")[0]} events.</h1></div>}
            </div>
        </>
    );
}

export default EventsPage;