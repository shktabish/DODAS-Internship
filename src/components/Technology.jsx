import technology from '../assests/technology.png'

const Technology = () => {
  return (
    <div className='flex flex-col items-center gap-14 mb-20' >
        <div className="font-Michroma max-sm:text-xl max-lg:text-3xl text-4xl text-center uppercase" >OUR Technology Support</div>
        <img src={technology} alt="technology" className='w-3/5 max-md:w-[90%]' />
    </div>
  )
}

export default Technology