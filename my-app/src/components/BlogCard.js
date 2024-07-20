import React from "react";
let info = "Blog intro"


const BlogCard = (props) => {
    const eventName = "-Author Name"
    return (
        <div className="mx-auto h-screen flex items-center justify-center px-8">
            <div className="flex flex-col w-6/7 bg-gray-950 rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/6">
                <div className="w-full h-64 bg-top bg-cover rounded-t" style={{ "backgroundImage": "url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)" }}></div>
                <div className="flex flex-col w-full md:flex-row">
                    <div className="flex flex-col justify-around p-4 md:m-4 font-bold leading-none text-gray-800 uppercase bg-sky-400 md:rounded-3xl md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div className="md:text-3xl md:p-1">Jan</div>
                        <div className="md:text-6xl md:p-1">13</div>
                        <div className="md:text-xl md:p-1" >7 pm</div>
                    </div>
                    <div className="p-4 font-normal text-gray-800 md:w-3/4">
                        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-white">Blog Title</h1>
                        <p className="leading-normal text-white">{info}</p>
                        <div className="flex flex-col items-center mt-4 text-white">
                            <div className="w-full p-2">
                                {eventName}
                            </div>
                            <div className="w-full flex justify-between">
                                <button onClick={() => props.callPopup(eventName)} type="button" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;