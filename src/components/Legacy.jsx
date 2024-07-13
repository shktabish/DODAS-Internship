import { useState } from "react"
import { marqueeIcons } from "../constants/data"
import Marquee from "./Marquee"

const Legacy = () => {
  const [selected, setSelected] = useState("Investors")

  const texts = [
    "Investors", 
    "Infrastructure", 
    "Incubators", 
    "DeFi", 
    "Launchpads", 
    "NFT", 
    "Guild", 
    "NFT Marketplace", 
    "Gaming, Metaverse", 
    "Exchange", 
    "Wallet + Bridge + Tool"
  ]

  return (
    <div>
      <div className="font-Michroma text-4xl uppercase text-center">legacy ecosystem & backers</div>
      <div className="flex items-center justify-center gap-20 mt-28">
        {texts.slice(0, 6).map((text, index) => (
          <div 
            key={index} 
            onClick={() => setSelected(text)}
            className={`font-Inter text-lg font-semibold cursor-pointer transition duration-300 ease-in-out ${selected === text ? "text-white border-b-4 border-[#3FE891]" : "text-[#777]"}`}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-20 mt-10">
        {texts.slice(6).map((text, index) => (
          <div 
            key={index} 
            onClick={() => setSelected(text)}
            className={`text-lg font-Inter font-semibold cursor-pointer transition duration-300 ease-in-out ${selected === text ? "text-white border-b-4 border-[#3FE891]" : "text-[#777]"}`}
          >
            {text}
          </div>
        ))}
      </div>
      <div>
        <Marquee data={marqueeIcons} />
      </div>
    </div>
  )
}

export default Legacy
