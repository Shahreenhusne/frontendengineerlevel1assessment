import { FeatureExplanations } from '@/types';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react'



type  ExclusiveFeatureSectionProps = {
  feature_explanations : FeatureExplanations
};

const ExclusiveFeatureSection = ({feature_explanations}:ExclusiveFeatureSectionProps) => {
  
  const feature_explanation = feature_explanations.find((item)=> item.type==="feature_explanations")
  


  return (
     <section  className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">How the course is laid out</h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border  p-6 md:grid-cols-2 md:gap-20">
          {feature_explanation?.values.map((item, index) => (
            <>     
             <div className="flex flex-col gap-4">
            {item.checklist.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                <Check className="text-blue-500 mt-1" size={20} />
                <p className="text-gray-900">{item}</p>
            </div>
        ))}
       </div>
         <div className="ml-auto w-fit">
                    <Image
                       src={item.file_url}
                       alt={`Instructor ${item.id}`}
                       width={250}
                       height={200}
                     />
        </div>
          </>
            
            
          ))}
        </div>
  </section>
  )
}

export default ExclusiveFeatureSection