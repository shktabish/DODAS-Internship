import { Link } from "react-router-dom"
import discover from "../assests/discover.svg"

const DiscoverCard = () => {
  return (
    <div className="flex justify-center items-center max-md:py-12 py-24">
        <div className="flex max-lg:flex-col items-center justify-around h-[300px] w-[90%] bg-white rounded-3xl">
            <div className="w-72 max-lg:w-full text-center">
                <div className="font-Montserrat text-black text-sm" >Expanding Beyond The Metaverse</div>
                <div className="font-Montserrat text-black max-lg:text-3xl text-5xl font-extrabold uppercase mt-3" >Discover A New Horizon</div>
            </div>
            <div style={{ backgroundImage: `url(${discover})` }} className={`bg-cover rounded-3xl bg-no-repeat w-[90%] lg:w-[730px] h-[50%] lg:h-[201px] flex flex-col justify-center items-center gap-3 lg:gap-8`} >
                <div className="uppercase font-Goldman max-sm:texl-lg max-lg:text-2xl text-5xl" >Try Our Testnet</div>
                <Link to={"https://testnet.dodas.xyz"} className="text-[#275B40] bg-white py-2 px-9 rounded-xl inline-block font-bold font-Inter cursor-pointer" >Launch App</Link>
            </div>
        </div>
    </div>
  )
}

export default DiscoverCard