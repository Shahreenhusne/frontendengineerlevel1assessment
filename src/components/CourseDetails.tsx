'use client'
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { About } from "@/types";



type CourseDetailsAccordionProps = {
  about: About;
};


const CourseDetailsAccordion = ({about}:CourseDetailsAccordionProps) =>  {
 const coursedetails = about.find((item)=> item.type=== "about")
  const [openIndex, setOpenIndex] = useState<number | null>(0); // default open first

  const toggleSection = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section  className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">Course details</h2>
         <div className="mb-16 rounded-md border  p-6 ">
            {coursedetails?.values.map((item, index) => (
            <div key={item.id} className="border-b border-dashed" >
            <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4 font-semibold text-left"
            >
                <div
                className="text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: item.title }}
                />
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
                <div className="p-4 pt-0 text-sm md:text-base leading-relaxed">
                <div
                    className="space-y-2 [&_li]:mb-1 [&_li]:list-outside [&_li]:ml-5"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                />
                </div>
          )}
        </div>
      ))}
      </div>
  </section>
  );
};

export default CourseDetailsAccordion;
