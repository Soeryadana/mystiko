import React from "react";

interface CardProps {
    img: string;
    link: string;
    title: string;
    children: string
}

const Card: React.FC<CardProps> = ({ img, title, children, link}) => {
  return (
    <div className="flex col-span-4 bg-[#f6e8ff] rounded-xl p-5 mx-3">
      <div>
        <img src={img} alt="" className="w-[70%]"/>
      </div>
      <div>
        <div>
            <a href={link} className="font-bold text-[#241a70] text-3xl pt-3">{title}</a>
        </div>
        <div>
            <p className="text-[#333333] text-2xl mt-2">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
