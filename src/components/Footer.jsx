import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#141414] min-h-[400px] flex max-md:flex-col justify-between px-10">
        <div className="w-full sm:w-[500px] xl:w-[720px] flex flex-col justify-center max-md:mt-10 gap-6">
            <div className="max-sm:text-base text-xl uppercase text-[#555] font-Khyay" >For collaboration inquiries or work opportunities, feel free to contact US through,</div>
            <div className="max-sm:text-2xl text-4xl uppercase font-Gothic my-3" >CONTACT US</div>
            <div className="max-sm:text-xl text-2xl uppercase font-Khyay" >info@dodas.xyz</div>
            <div className="max-sm:mb-10 max-sm:text-xl text-2xl uppercase text-[#555] font-Khyay" >© Dodas LTD, 2024. ALL RIGHTS RESERVED</div>
        </div>
        <div className="flex flex-col justify-end mb-20 gap-10">
            <div className="text-4xl font-Gothic" >SOCIALS</div>
            <div className="flex gap-4 flex-wrap" >
                <Link to={"https://www.linkedin.com/company/acknoledger/"} ><img src="./icons/li.svg" alt="LinkedIn Icon" className="w-14 h-14 cursor-pointer" /></Link>
                <Link to={"https://x.com/dodas_ack"} ><img src="./icons/x.svg" alt="Twitter Icon" className="w-14 h-14 cursor-pointer" /></Link>
                <Link to={"https://t.me/dodasannouncement"} ><img src="./icons/tele.svg" alt="Telegram Icon" className="w-14 h-14 cursor-pointer" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer