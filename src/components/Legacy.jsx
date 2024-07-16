import Marquee from "react-fast-marquee"
import { useState } from "react"
import MarqueeCustom from "./MarqueeCustom"

const Legacy = () => {
  const [selected, setSelected] = useState("DeFi")

  const texts = [ 
    "DeFi",
    "Infrastructure", 
    "Incubator", 
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
      <div className="font-Michroma max-sm:text-lg max-md:text-2xl text-4xl uppercase text-center">legacy ecosystem & backers</div>
      <div className="flex flex-col gap-12 my-20">
        <div className="flex items-center justify-center px-4 flex-wrap max-md:gap-10 gap-20">
          {texts.slice(0, 5).map((text, index) => (
            <div 
              key={index} 
              onClick={() => setSelected(text)}
              className={`font-Inter text-lg font-semibold cursor-pointer transition duration-300 ease-in-out ${selected === text ? "text-white border-b-4 border-[#3FE891]" : "text-[#777]"}`}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center px-4 flex-wrap max-md:gap-10 gap-20 max-sm:mt-0 max-sm:mb-4 my-10">
          {texts.slice(5).map((text, index) => (
            <div 
              key={index} 
              onClick={() => setSelected(text)}
              className={`text-lg font-Inter font-semibold cursor-pointer transition duration-300 ease-in-out ${selected === text ? "text-white border-b-4 border-[#3FE891]" : "text-[#777]"}`}
            >
              {text}
            </div>
          ))}
        </div>
        <MarqueeCustom heading={selected} />
      </div>
    </div>
  )
}

export default Legacy
