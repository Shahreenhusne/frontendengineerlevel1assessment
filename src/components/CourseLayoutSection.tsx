import { Feature } from '@/types';
import Image from 'next/image';
import React from 'react'

type CourseLayoutSectionProps = {
  feature : Feature
};

const CourseLayoutSection = ({feature}:CourseLayoutSectionProps) => {
  
  const courseLayout = feature.find((item)=> item.type==="features")
  


  return (
     <section  className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">How the course is laid out</h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
          {courseLayout?.values.map((item, index) => (
            <div key={index} className="flex flex-row items-start gap-3 m-1">
              <div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-[500px] leading-[26px] text-white">{item.title}</h2>
                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">{item.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>
  </section>
  )
}

export default CourseLayoutSection