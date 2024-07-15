import Marquee from "react-fast-marquee"
import { legacy } from "../constants/data"

const MarqueeCustom = ({ heading }) => {
    const iconsList = legacy.filter((item) => item.heading === heading)

    const icons = iconsList.map((item, index) => (
        <div kry={index} className="bg-[#09090A] mx-4 my-8 px-6 py-4 rounded-xl">
            <img src={item.icon} alt="icon" className="max-sm:h-10 h-20" />
        </div>
    ))

    if(icons.length === 0) return null

    const noOfRepeats = Math.ceil(9 / icons.length)

  return (
    <Marquee gradient={false} pauseOnHover speed={40}>
        {Array(noOfRepeats).fill(0).map((_, index) => icons)}
    </Marquee>
  )
}

export default MarqueeCustom