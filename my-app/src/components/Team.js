import Card1 from "./Card1";
import Card3 from "./Card3";
import Card2 from "./Card2";
import "./Team.css";
import { useState } from "react";

const Team = (props) => {

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         const square = entry.target.querySelector('.team-div');

    //         if (entry.isIntersecting) {
    //             square.classList.add('team-div-animation');
    //             return;
    //         }
    //         square.classList.remove('team-div-animation');
    //     });
    // });
    // window.onscroll = function () {
    //     let div_list = document.querySelectorAll('.team-div-wrapper')
    //     for (let i = 0; i < div_list.length; i++) {
    //         observer.observe(div_list[i]);
    //     }
    // }
    return (
        <>
            <div id="container" className="team-div-wrapper">
                <div className="team-div team-div-animation flex flex-col md:flex-row">
                    <div className="team-decription w-full md:w-[40%]">
                        <h1 className="text-center text-wrap w-80 lg:ml-20 md:mt-[110px] text-3xl font-bold">{props.team_name}</h1>
                        {/* <p className="hidden md:flex" style={{ color: "black" }}>The sun peeked over the horizon, painting the sky in hues of pink and gold. Birds chirped joyously, welcoming the new day with their melodious songs. In the quaint little town of Willow Creek, life began to stir as people woke up to the promise of another beautiful morning. The aroma of freshly brewed coffee wafted through the air, mingling with the scent of blooming flowers. It was a day ripe with possibilities, a blank canvas waiting to be painted with adventures and memories.</p> */}
                    </div>
                    <div className="team-members flex flex-col md:flex-row">
                        {props.team_members.map((members, index) => {
                            return <Card2 name={members.Name} position={members.Position} photo={members.Photo} key={index} key_prop={index} ></Card2>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;