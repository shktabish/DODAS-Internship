const DiscoverCard = () => {
  return (
    <div className="flex justify-center items-center my-24">
        <div className="flex items-center justify-around h-[300px] w-[90%] bg-white rounded-3xl">
            <div className="w-72">
                <div className="font-Montserrat text-black text-sm" >Expanding Beyond The Metaverse</div>
                <div className="font-Montserrat text-black text-5xl font-extrabold uppercase mt-3" >Discover A New Horizon</div>
            </div>
            <div className="bg-discover-card-pattern bg-no-repeat w-[769px] h-[201px] flex flex-col justify-center items-center gap-8" >
                <div className="uppercase font-Goldman text-5xl" >Try Our Testnet</div>
                <div className="text-[#275B40] bg-white py-2 px-9 rounded-xl inline-block font-bold font-Inter cursor-pointer" >Launch App</div>
            </div>
        </div>
    </div>
  )
}

export default DiscoverCard