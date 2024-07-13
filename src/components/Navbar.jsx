import { useState } from "react"

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("GET API ACCESS")

    const handleLinkClick = (e) => {
        setActiveLink(e.target.innerText)
    }

  return (
    <div className="flex justify-center items-center gap-14 pt-10 font-Michroma h-12">
        <div 
            onClick={handleLinkClick} 
            className={`${activeLink === "GET API ACCESS" ? "text-white border-b-2 border-white" : "text-[#777777]"} transition duration-300 ease-in-out cursor-pointer `}
        >
            GET API ACCESS
        </div>
        <div 
            onClick={handleLinkClick} 
            className={`${activeLink === "Dodas" ? "text-white border-b-2 border-white" : "text-[#777777]"} transition duration-300 ease-in-out cursor-pointer `}
        >
            Dodas
        </div>
        <div 
            onClick={handleLinkClick} 
            className={`${activeLink === "Join Community" ? "text-white border-b-2 border-white" : "text-[#777777]"} transition duration-300 ease-in-out cursor-pointer `}
        >   
            Join Community
        </div>
    </div>
  )
}

export default Navbar