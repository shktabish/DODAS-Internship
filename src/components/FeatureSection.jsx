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
    <div className={`flex ${inverse ? "flex-row-reverse" : "" } max-lg:flex-col items-center max-lg:justify-center max-lg:gap-4  justify-between max-lg:px-8 px-16 min-h-[90vh]`}>
        <div className={`${text} max-lg:w-[90%] relative z-20`}>
            <div className={`font-Michroma font-semibold max-lg:text-2xl text-4xl ${color} mb-10 tracking-[10px] uppercase`}>
              {title}
            </div>
            <div className="absolute -top-72 max-lg:-top-36 max-sm:-top-24 -left-10 font-inter font-black italic text-stroke-3 max-sm:text-[100px] max-lg:text-[150px] text-[300px] -z-10">{id}</div>
            <div className="font-Nico max-lg:text-base text-xl text-[#343434]">{description}</div>
            {id !== 1 && 
              <div className="flex items-center gap-2 max-lg:mt-4 mt-12" >
                <div className="font-Sofia text-xl" >More Info</div>
                <FaArrowRightLong className="text-white text-xl" />
              </div>
            }
        </div>
        {animationData && <Lottie animationData={animationData} loop className={`${width} max-sm:w-full`} />}
    </div>
  )
}

export default FeatureSection