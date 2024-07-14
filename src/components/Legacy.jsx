import Marquee from "react-fast-marquee"
import { legacyLine1 } from "../constants/data"
import { legacyLine2 } from "../constants/data"
import { Link } from "react-router-dom"

const Legacy = () => {
  const icons = legacyLine1.map((link, index) => (
    <Link key={index} to={link.link}>
      <div className="bg-[#09090A] mx-4 px-6 py-4 rounded-xl">
        <img src={link.icon} alt="icon" className="max-sm:h-8 h-16" />
      </div>
    </Link>
  ))

  const icons2 = legacyLine2.map((link, index) => (
    <Link key={index} to={link.link}>
      <div className="bg-[#09090A] mx-4 px-6 py-4 rounded-xl">
        <img src={link.icon} alt="icon" className="max-sm:h-8 h-16" />
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
