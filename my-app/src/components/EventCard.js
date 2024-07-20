import React from "react";
import { useState } from "react";
let info = ""


const EventCard = (props) => {
    info = props.eventInfo;
    const eventName = props.eventName;
    const [dynamic, setDynamic] = useState(info.slice(0, 100) + "...");
    function Expand() {
        setDynamic((prevState) => {
            if (prevState === info) {
                return info.slice(0, 100) + "...";
            } else {
                return info;
            }
        });
    }
    return (
        <div className="mx-auto pt-16 pb-24 flex items-center justify-center px-8">
            <div className="flex flex-col w-6/7 bg-gray-700  shadow-lg sm:w-3/4 md:w-3/4 lg:w-3/6">
                <div className="w-full h-64 bg-top bg-cover rounded-t" style={{ "backgroundImage": `url(${props.img})` }}></div>
                <div className="flex flex-col w-full md:flex-row">
                    <div className="flex sm:flex-row justify-around p-4 md:m-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 md:rounded-2xl md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div className="md:text-3xl md:p-1">Jan</div>
                        <div className="md:text-6xl md:p-1">13</div>
                        <div className="md:text-xl md:p-1" >7 pm</div>
                    </div>
                    <div className="p-4 font-normal text-gray-800 md:w-3/4">
                        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-white">{props.eventName}</h1>
                        <p className="leading-normal text-white">{dynamic}</p>
                        <div className="flex flex-col items-center mt-4 text-white">
                            <div className="w-full p-2">
                                {eventName}
                            </div>
                            <div className="w-full flex justify-between">
                                {/* <button onClick={() => props.callPopup(eventName)} type="button" className="text-white bg-blue-800  font-bold text-lg rounded-full px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">Register</button> */}
                                <button onClick={() => props.callPopup(eventName)} className="bg-blue-800 text-white duration-300 font-bold w-fit flex flex-row justify-between py-2 px-10 rounded-full">
                                    <h1 className="text-lg h-fit  pt-1">Register</h1>
                                </button>
                                {/* <button onClick={() => Expand()} type="button" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{dynamic==info ? "Show Less" : "More Info"}</button> */}
                                <button onClick={() => Expand()} className="bg-blue-800 text-white duration-300 font-bold w-48 flex flex-row justify-between py-2 mx-1 px-4 rounded-full">
                                    <h1 className="text-lg h-fit  pt-1">More Info</h1>
                                    {dynamic == info ?<svg fill="white" className="w-fil h-10 rotate-[270deg]" viewBox="0 0 24 24">
                                        <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd" />
                                    </svg>: <svg fill="white" className="w-fill h-10 rotate-90" viewBox="0 0 24 24">
                                        <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd" />
                                    </svg>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;