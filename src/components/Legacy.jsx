import Marquee from "react-fast-marquee"
import { legacyLine1 } from "../constants/data"
import { legacyLine2 } from "../constants/data"
import { Link } from "react-router-dom"

const Legacy = () => {
  const icons = legacyLine1.map((icon, index) => (
    <Link to={icon.link} key={index} >
      <div className="max-lg:w-44 max-sm:w-28 max-md:mx-2 mx-3">
        <img src={icon.icon} alt="icons" />
      </div>
    </Link>
  ))

  const icons2 = legacyLine2.map((icon, index) => (
    <Link to={icon.link} key={index} >
      <div className="max-lg:w-44 max-sm:w-28 max-md:mx-2 mx-3">
        <img src={icon.icon} alt="icons" />
      </div>
    </Link>
  ))

  return (
    <div>
      <div className="font-Michroma max-sm:text-lg max-md:text-2xl text-4xl uppercase text-center">legacy ecosystem & backers</div>
      <div className="flex flex-col gap-12 my-20">
        <Marquee gradient={false} pauseOnHover speed={40}>
          {icons}
        </Marquee>
        <Marquee direction="right" gradient={false} pauseOnHover speed={40}>
          {icons2}
        </Marquee>
      </div>
    </div>
  )
}

export default Legacy
