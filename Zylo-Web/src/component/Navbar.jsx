import React from "react";
import { assets } from "../assets/assets";
const Navbar = () =>{
    return(
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow} alt="" />
                    <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow} alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
                </div>
            </div>
        </>
    )
}
export default Navbar