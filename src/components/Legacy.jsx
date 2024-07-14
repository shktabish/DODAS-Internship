import { useState } from "react"
import { marqueeIcons } from "../constants/data"
import Marquee from "./Marquee"

const Legacy = () => {
  return (
    <div>
      <div className="font-Michroma max-sm:text-lg max-md:text-2xl text-4xl uppercase text-center">legacy ecosystem & backers</div>
      <div>
        <Marquee data={marqueeIcons} />
      </div>
    </div>
  )
}

export default Legacy
