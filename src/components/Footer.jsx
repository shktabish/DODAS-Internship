const Footer = () => {
  return (
    <div className="bg-[#141414] h-[400px] flex justify-between px-10">
        <div className="w-[720px] flex flex-col justify-center gap-6">
            <div className="text-xl uppercase text-[#555] font-Khyay" >For collaboration inquiries or work opportunities, feel free to contact US through,</div>
            <div className="text-4xl uppercase font-Gothic my-3" >CONTACT US</div>
            <div className="text-2xl uppercase font-Khyay" >info@dodas.xyz</div>
            <div className="text-2xl uppercase text-[#555] font-Khyay" >© Dodas LTD, 2024. ALL RIGHTS RESERVED</div>
        </div>
        <div className="flex flex-col justify-end mb-20 gap-10">
            <div className="text-4xl font-Gothic" >SOCIALS</div>
            <div className="flex gap-4" >
                <img src="./icons/yt.svg" alt="Youtube Icon" className="w-12 h-12 cursor-pointer" />
                <img src="./icons/fb.svg" alt="Facebook Icon" className="w-12 h-12 cursor-pointer" />
                <img src="./icons/x.svg" alt="Twitter Icon" className="w-12 h-12 cursor-pointer" />
                <img src="./icons/ig.svg" alt="Instagram Icon" className="w-12 h-12 cursor-pointer" />
                <img src="./icons/li.svg" alt="LinkedIn Icon" className="w-12 h-12 cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Footer