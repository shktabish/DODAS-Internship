import { useState } from "react"

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("GET API ACCESS")
    const links = ["GET API ACCESS", "Dodas", "Join Community"]

  return (
    <div className="flex justify-center items-center max-sm:gap-7 gap-14 px-2 pt-10 font-Michroma h-12">
        {links.map((link, index) => (
            <div 
                key={index}
                onClick={() => setActiveLink(link)} 
                className={`${activeLink === link ? "text-white border-b-2 border-white" : "text-[#777777]"} transition duration-300 ease-in-out cursor-pointer max-sm:text-xs text-center `}
            >
                {link}
            </div>
        ))}
    </div>
  )
}

export default Navbar