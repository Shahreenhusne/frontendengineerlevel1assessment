// components/Hero.tsx
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const Hero: React.FC<Props> = ({ title, description }) => {
  return (
    <div
      className="w-full min-h-[400px] md:min-h-[400px] bg-cover bg-center flex items-center px-6 md:px-12 py-16"
      style={{ backgroundImage: "url('/ielts-bg.jpg')" }}
    >
      <div className="max-w-4xl text-white">
        <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
          {title}
        </h1>
        <div className="mb-2">
            <button className="flex flex-row flex-wrap gap-2 text-white">
            <span className="inline-block">
            <Image alt="star image"  width={130} height={30}  src="/starImageIcon.jpeg"/>
            </span>
            <span className="inline-block text-sm md:text-base">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
            </button>
        </div>
       <div>
            <div className="text-gray-400 " style={{overflow: "hidden", height: "auto",maskImage: "none"}}>
                      <div dangerouslySetInnerHTML={{ __html: description }}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
