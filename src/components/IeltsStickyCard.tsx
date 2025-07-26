'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';
import { Button } from './ui/button';
import { Media , Cta_Text, CheckList } from '@/types';
import Swiperpage from './Swiper';

type IeltsCardProps = {
  media: Media;
  cta_text : Cta_Text
  checklist : CheckList
};

const IeltsStickyCard= ({media, cta_text, checklist} : IeltsCardProps) => {


  return (
    <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">

       <div className="sticky top-20 ">
         <div>
           {/* Horizontal Scroll Media Section */}
           <div className='p-1'>
              <Swiperpage media={media}/>
           </div>      
            {/* Course Title and Pricing */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800">IELTS Course by Munzereen Shahid</h2>
              <p className="text-sm text-red-600 line-through">৳5000</p>
              <p className="text-xl font-semibold text-green-600">৳3850 <span className="text-sm text-orange-500">৳1150 ছাড়</span></p>
            </div>

            {/* Enroll Button */}
            <Button className="w-full mb-4 capitalize">{cta_text.value}</Button>

            {/* Course Info List */}
            {checklist
              .map((item) => (
                <li key={item.id} className="flex items-center gap-2 m-1.5">
                  <img src={item.icon} alt="icon" className="w-4 h-4" />
                  <span>{item.text}</span>
                </li>
      ))}
  </div>
     </div>

    </section>
   
  )
}

export default IeltsStickyCard
