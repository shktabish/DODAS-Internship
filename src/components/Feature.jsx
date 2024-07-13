import { sectionData } from "../constants/data"
import FeatureSection from "./FeatureSection"

const Feature = () => {
    const calender = sectionData[0]

  return (
    <div>
        <FeatureSection 
            id={calender.id} 
            title={calender.title} 
            description={calender.description} 
            animation={calender.animation} 
            inverse={calender.inverse} 
            color={calender.color} 
            width={calender.width} 
            text={calender.text} 
        />
        <div className="flex items-center max-lg:px-10 px-20 mb-32 max-lg:gap-8 gap-16" >
            <div className="font-Michroma max-sm:text-base max-lg:text-2xl text-4xl text-[#656565]">COMING SOON FEATURES</div>
            <div className="h-1 bg-[#656565] grow" />
        </div>
        {sectionData.map((section) => 
            section.id !== 1 ? (
            <FeatureSection
                key={section.id}
                id={section.id}
                title={section.title}
                description={section.description}
                animation={section.animation}
                inverse={section.inverse}
                width={section.width}
                text={section.text}
                color={section.color}
            />
            ) : null
        )}
    </div>
  )
}

export default Feature