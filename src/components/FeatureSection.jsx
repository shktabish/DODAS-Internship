import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import { FaArrowRightLong } from "react-icons/fa6"

const FeatureSection = ({ id, title, description, animation, inverse, width, text, color }) => {
    const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animation)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error("Error loading animation data:", error))
  }, [])

  return (
    <div className={`flex ${inverse ? "flex-row-reverse" : "" } items-center justify-between px-16 h-[90vh]`}>
        <div className={`${text} relative z-20`}>
            <div className={`font-Michroma font-semibold text-4xl ${color} mb-10 tracking-[10px] uppercase`}>
              {title}
            </div>
            <div className="absolute -top-72 -left-10 font-inter font-black italic text-stroke-3 text-[300px] -z-10">{id}</div>
            <div className="font-Nico text-xl text-[#343434]">{description}</div>
            {id !== 1 && 
              <div className="flex items-center gap-2 mt-12" >
                <div className="font-Sofia text-xl" >More Info</div>
                <FaArrowRightLong className="text-white text-xl" />
              </div>
            }
        </div>
        {animationData && <Lottie animationData={animationData} loop className={`${width}`} />}
    </div>
  )
}

export default FeatureSection