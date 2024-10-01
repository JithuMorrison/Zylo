import React from "react";
import { assets, songsdata } from "../assets/assets";
const Player = () =>{
    return(
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src={songsdata[0].image} alt="" />
                <div>
                    <p>{songsdata[0].name}</p>
                    <p>{songsdata[0].desc.slice(0,12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={assets.shuffle} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.prev} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.play} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.next} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.loop} alt="" />
                </div>
                <div className="flex items-center gap-5">
                    <p>1:06</p>
                    <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr className="h-1 border-none w-10 bg-green-800 rounded-full"/>
                    </div>
                    <p>3:20</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className="w-4" src={assets.play} alt="" />
                <img className="w-4" src={assets.mike} alt="" />
                <img className="w-4" src={assets.queue} alt="" />
                <img className="w-4" src={assets.speaker} alt="" />
                <img className="w-4" src={assets.volume} alt="" />
                <div className="w-20 bg-slate-50 h-1 rounded"></div>
                <img className="w-4" src={assets.mini} alt="" />
                <img className="w-4" src={assets.zoom} alt="" />
            </div>
        </div>
    )
}

export default Player