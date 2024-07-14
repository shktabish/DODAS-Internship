import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerNavbar from "./HamburgerNavbar";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("GET API ACCESS");

    return (
        <>
            <div className="max-md:hidden flex justify-center items-center max-sm:gap-7 gap-14 px-2 pt-10 font-Michroma h-12">
                <div 
                    onClick={() => setActiveLink("GET API ACCESS")} 
                    className={`${activeLink === "GET API ACCESS" ? "text-white border-b-2 border-white" : "text-[#777777]"} transition duration-300 ease-in-out cursor-pointer max-sm:text-xs text-center px-4 py-2 hover:text-white`}
                >
                    GET API ACCESS
                </div>
                <div className="text-white cursor-pointer text-2xl font-semibold text-center">Dodas</div>
                <Link  
                    to={"https://t.me/dodascommunity"}
                    onClick={() => setActiveLink("Join Community")} 
                    className={`${activeLink === "Join Community" ? "text-white border-b-2 border-white" : "text-[#777777]"} transition duration-300 ease-in-out cursor-pointer max-sm:text-xs text-center px-4 py-2 hover:text-white`}
                >
                    Join Community
                </Link >
            </div>
            <div className="md:hidden relative z-50 flex justify-between items-center max-sm:px-5 px-10 py-4">
                <div className="text-white cursor-pointer font-Michroma max-sm:text-xl text-2xl font-semibold">Dodas</div>
                <HamburgerNavbar />
            </div>
        </>
    );
}

export default Navbar;
