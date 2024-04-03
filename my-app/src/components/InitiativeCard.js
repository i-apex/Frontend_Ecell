const InitiativeCard = (props) => {
    return (
        <div className="md:w-3/4 mx-auto my-10 flex flex-col md:flex-row">
            <div className="w-[550px] hidden md:flex text-white border rounded-3xl h-[600px]">
                <img alt="POSTER..."></img>
            </div>
            <div className="flex w-full flex-col">
                <h1 className="text-white mx-auto mt-10 text-3xl text-center font-normal">{props.name}</h1>
                <p className="text-white m-12">The morning sun cast a warm glow over the sleepy town, gently coaxing its inhabitants to rise and embrace the day. Birds chirped cheerfully, their melodies weaving through the tranquil air. In the distance, the faint aroma of freshly brewed coffee wafted from a quaint café, inviting passersby to indulge in its comforting embrace. It was a moment of quiet serenity, a pause in the hustle and bustle of life, where time seemed to slow down and the simple joys of existence took center stage.</p>
                <p className="text-white m-12">The morning sun cast a warm glow over the sleepy town, gently coaxing its inhabitants to rise and embrace the day. Birds chirped cheerfully, their melodies weaving through the tranquil air. In the distance, the faint aroma of freshly brewed coffee wafted from a quaint café, inviting passersby to indulge in its comforting embrace. It was a moment of quiet serenity, a pause in the hustle and bustle of life, where time seemed to slow down and the simple joys of existence took center stage.</p>
                <button class="bg-blue-800 text-white hover:scale-110 transition-transform duration-300 font-bold w-48 flex flex-row justify-between py-2 mx-5 px-4 rounded-full">
                    <h1 className="text-lg h-fit  pt-1">More Info</h1><svg fill="white" className="w-fill h-10" viewBox="0 0 24 24">
                        <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default InitiativeCard;