import Navbar from './Navbar'
import { FaArrowRightLong } from "react-icons/fa6"

const Hero = () => {
  return (
    <div className='relative z-50 overflow-x-hidden' >
        <Navbar />
        <div className='flex items-center max-sm:ml-8 ml-16 min-h-[calc(100vh-100px)]'>
            <div className='flex flex-col flex-wrap gap-6 mb-16 relative z-20'>
                <div className='text-2xl font-Nico text-[#777]'>
                    discovery of digital assets
                </div>
                <div className='max-sm:text-3xl max-lg:text-5xl max-xl:text-6xl text-8xl font-normal font-Michroma'>
                    LAUNCHING <span className='block mt-5'>SOON</span>
                </div>
                <div className="max-sm:w-[80%] max-lg:w-1/2 max-sm:text-lg max-lg:text-xl text-2xl font-Nico text-[#777] max-w-[780px]">
                    Resolvent: Where scarcity meets solution, empowering collectors with access to unique digital treasures.
                </div>
                <div className='bg-white max-lg:px-4 px-6 py-4 max-sm:w-[200px] max-lg:w-[300px] w-[420px] rounded-xl flex justify-center items-center gap-3 cursor-pointer'>
                    <div className='text-xl font-Sofia font-semibold text-black'>
                        Try Testnet
                    </div>
                    <FaArrowRightLong className='text-black text-xl' />
                </div>
            </div>
            <div className='h-screen overflow-hidden flex justify-center items-center' >
                <img src="https://s3-alpha-sig.figma.com/img/8ccf/c811/dca4bcf5b2b4d5747fe8f5163b062748?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QfEGct0O-jLUDdsU8V7A5dy9NJ4OEojYEHVOjT1Gk3v8YObWZ0Br5mMpy-icoTeKVWIvaThhKuSzdNL5LUb7~iJSn~h7ej11fQn4pCO6tTQmg5owEM8e1a29SixcOSvt-rXgwJuJ0NrAK-6h75gT4oFSpmnuiPkGxkCeDKjNwyl757nm3JzM6BvnhOLOelJcszrPEQ9b9o61IAO-chGSETJIabWnCY~A7XbeS2Pju1okbAOhIth2DyySS3eDAPXX53lSBYfFBPFJy6bndcuV5j0sGQs4LIvd2TVVbQzBTSiHqVUvQHkSo1FcoWEmuFxZ-0Ta78K-mZ5g9cDBHL0NRg__" alt="gif" 
                className='max-lg:absolute max-lg:left-1/2 max-lg:top-1/2 max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 scale-125 max-md:w-full max-md:h-full w-[600px] h-[600px] object-contain max-lg:opacity-20'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero
