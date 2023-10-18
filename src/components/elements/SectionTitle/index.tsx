import React from "react";

interface SectionTitleProps {
  img: string;
  children: string;
  alt: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ img, children, alt }) => {
  return (
    <div className="flex mb-3">
      <img src={img} alt={alt} className="w-[20%] md:w-[10%] mr-4" />
      <h2 className="font-bold text-[#241a70] text-2xl md:text-3xl pt-3">{children}</h2>
    </div>
  );
};

export default SectionTitle;
