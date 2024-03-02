import Card1 from "./Card1";
import Card3 from "./Card3";
import "./Team.css";

const Team = (props) => {
    return (
        <>
            <div className="team-div">
                <div>
                    <h2 style={{ color: "white" }}>{props.team_name}</h2>
                    <p style={{color: "white"}}>The sun peeked over the horizon, painting the sky in hues of pink and gold. Birds chirped joyously, welcoming the new day with their melodious songs. In the quaint little town of Willow Creek, life began to stir as people woke up to the promise of another beautiful morning. The aroma of freshly brewed coffee wafted through the air, mingling with the scent of blooming flowers. It was a day ripe with possibilities, a blank canvas waiting to be painted with adventures and memories.</p>
                </div>
                {props.team_members.map((members) => {
                    if (members.Position == "Lead") {
                        return <Card1 name={members.Name} position={members.Position}></Card1>
                    } else
                        return <Card1 name={members.Name} position={members.Position}></Card1>
                })}
            </div>
        </>
    )
}

export default Team;