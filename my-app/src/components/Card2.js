import instagram_black from '../Assets/instagram_black.png';
import twitter_black from '../Assets/twitter_black.png';
import linkedin_black from '../Assets/linkedin_black.svg';

const Card2 = (props) =>{
    return(
        <>
        <div className="relative shadow-2xl w-[250px] h-[250px] m-4 rounded-lg rounded-tr-[50px] rounded-bl-[50px] ">
            <img src={props.photo} className="w-[250px] h-[250px] object-cover rounded-tr-[50px] rounded-lg rounded-bl-[50px] " loading='lazy'></img>
            <div className="team_overlay absolute top-0 w-full h-full opacity-[0] hover:opacity-[1]  hover:backdrop-blur-sm hover:bg-white/[0.6] rounded-lg rounded-tr-[50px] rounded-bl-[50px] [&>p]:hover:animate-[slideinYsm_0.25s_ease-in] [&>ul]:hover:animate-[slideinYsm_0.5s_ease-in]">
                <p className="text-2xl font-bold mt-[75px] ">{props.name}</p>
            <ul className='flex justify-between mx-16 mt-10'>
                <li><img src={instagram_black} className='w-8'></img></li>
                <li><img src={twitter_black} className='w-8'></img></li>
                <li><img src={linkedin_black} className='w-8'></img></li>

            </ul>
            </div>
        </div>
        </>
    )
}
export default Card2;