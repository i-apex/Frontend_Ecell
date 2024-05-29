import { useState } from "react";

const MottoCard = (props) => {

    return (
        <div className="flex animate-slidein justify-center">
            <div className="flex flex-col p-8">
                <div className=" h-12 w-64 text-center align-middle text-white text-2xl font-bold pt-2 bg-blue-800 rounded-md md:mx-auto m-3">{props.title}</div>
                <div className="w-64 h-64 text-center border-4 border-blue-800 rounded-lg m-3" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}} >
                    <div className="flex justify-center pt-2">
                        <img width="75" height="75" src={props.logo}></img>
                    </div>
                    <p className="text-black text-lg p-3">{props.content}</p>
                </div>
            </div>
        </div>

    )
}
export default MottoCard;