// components/Hero.tsx
import Image from "next/image";
import React from "react";
import { Media , Cta_Text, CheckList } from '@/types';
import IeltsStickyCard from "./IeltsStickyCard";

type Props = {
  title: string;
  description: string;
  media: Media;
  cta_text : Cta_Text
  checklist : CheckList
};

const Hero: React.FC<Props> = ({ title, description, media, cta_text,checklist  }) => {
  return (
    <div
      className="w-full min-h-[400px] md:min-h-[400px] bg-cover bg-center flex items-center px-6  justify-center-safe"
      style={{ backgroundImage: "url('/ielts-bg.jpg')" }}
    >
      <div className="w-full relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
            <div className=" order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
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
             <IeltsStickyCard media={media} cta_text= {cta_text} checklist= {checklist}/>
      </div>
    </div>
  );
};

export default Hero;
