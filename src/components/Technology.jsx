import React, { useState } from 'react';
import { tech } from '../constants/data';

const Technology = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  const icons = tech.map((icon, index) => (
    <div
      key={index}
      onClick={() => handleClick(index)}
      className={`cursor-pointer max-sm:w-32 max-sm:h-32 w-44 h-44 mx-4 mb-16 p-[3px] rounded-xl flex flex-col gap-6 justify-center items-center 
      ${selected === index ? 'animate-border bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:200%_200%] border border-transparent' : 'bg-[#1E1E1E] border-2 border-[#1E1E1E]'}`}
    >
      <div className="bg-[#1E1E1E] w-full h-full flex flex-col justify-center items-center p-5 rounded-xl">
        <img src={icon.icon} alt="icon" className="h-[70%] fill-white" />
        <div className="text-wrap text-center font-Sofia text-white max-sm:text-xs">{icon.title}</div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center gap-14 mb-20">
      <div className="font-Michroma max-sm:text-xl max-lg:text-3xl text-4xl text-center uppercase">
        OUR Technology Support
      </div>
      <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2">
        {icons}
      </div>
    </div>
  );
};

export default Technology;
