import DiscoverCard from "./components/DiscoverCard"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Legacy from "./components/Legacy"
import Technology from "./components/Technology"
import Marquee from "react-fast-marquee"

import { newLinks } from "./constants/data"
import { Link } from "react-router-dom"

export default function App() {
  const icons = newLinks.map((link, index) => (
    <Link key={index} to={link.link}>
      <div className="bg-[#09090A] mx-4 mb-32 px-6 py-4 rounded-xl grayscale hover:grayscale-0">
        <img src={link.icon} alt="icon" className="max-sm:h-8 h-16" />
      </div>
    </Link>
  ))

  return (
    <div className="w-full min-h-screen bg-[#020203]">
      <Hero />
      <Marquee gradient={false} pauseOnHover speed={40}>
        {icons}
        {icons}
        {icons}
      </Marquee>
      <Feature />
      <Technology />
      <Legacy />
      <DiscoverCard />
      <Footer />
    </div>
  )
}