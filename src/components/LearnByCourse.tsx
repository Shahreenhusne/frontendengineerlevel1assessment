import {  Pointer } from '@/types';
import Image from 'next/image';
import React from 'react'
import { Check } from "lucide-react";


type LearnByCourseSectionProps = {
  pointer : Pointer
};

const LearnByCourseSection = ({pointer}:LearnByCourseSectionProps) => {
  
  const courseLayout = pointer.find((item)=> item.type==="pointers")
  


  return (
     <section  className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">How the course is laid out</h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border  p-6 md:grid-cols-2 md:gap-8">
          {courseLayout?.values.map((item, index) => (
            
             <div key={item.id} className="flex items-start gap-2">
            <Check className="text-blue-500 mt-1" size={20} />
            <p className="text-gray-900">{item.text}</p>
          </div>
            
           
          ))}
        </div>
  </section>
  )
}

export default LearnByCourseSection