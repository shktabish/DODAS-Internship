import DiscoverCard from "./components/DiscoverCard"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Legacy from "./components/Legacy"

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#020203]">
      <Hero />
      <div className="relative flex my-32 overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          <img src="./marquee1st.svg" alt="images list" className="grayscale opacity-50" />
          <img src="./marquee1st.svg" alt="images list" className="grayscale opacity-50" />
        </div>
      </div>
      <Feature />
      <Legacy />
      <DiscoverCard />
      <Footer />
    </div>
  )
}