import Marquee from "react-fast-marquee"
import { legacy } from "../constants/data"
import { useState, useEffect } from "react"

const MarqueeCustom = ({ heading }) => {
  const [icons, setIcons] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const iconsList = legacy.filter((item) => item.heading === heading)

    const loadImages = iconsList.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = item.icon
        img.onload = resolve
        img.onerror = reject
      })
    })

    Promise.all(loadImages)
      .then(() => {
        setIcons(iconsList)
        setLoaded(true)
      })
      .catch((err) => console.error("Failed to load images", err))
  }, [heading])

  const noOfRepeats = Math.ceil(9 / icons.length)

  return (
    <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Marquee delay={5} gradient={false} pauseOnHover speed={40}>
        {Array(noOfRepeats).fill(0).flatMap((_, index) => 
          icons.map((item, idx) => (
            <div key={`${index}-${idx}`} className="bg-[#09090A] mx-4 my-8 px-6 py-4 rounded-xl">
              <img src={item.icon} alt="icon" className="max-sm:h-10 h-20" />
            </div>
          ))
        )}
      </Marquee>
    </div>
  )
}

export default MarqueeCustom
