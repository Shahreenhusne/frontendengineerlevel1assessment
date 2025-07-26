'use client'

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Button } from './ui/button';
import { Media } from '@/types';

type SwiperPageProps = {
  media: Media;
};
const Swiperpage = ({media} : SwiperPageProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperClass | null>(null);

  return (
    <>
    {/* Top Main Swiper */}
    <div className="relative overflow-hidden bg-black youtube-video aspect-video">
        <div className="h-full opacity-0 transition-opacity duration-300 ease-in-out" style={{fontSize:0 , opacity: 1}}>
            <Swiper
                modules={[Thumbs, Navigation]}
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            className="mb-4"
            onSwiper={(swiper) => {
                mainSwiperRef.current = swiper;
          }}
            >
                {media.map((slide, index) => (
                    <SwiperSlide key={index}>
                            {slide.resource_type === 'video' ? (
                            // If resource_value is a YouTube video ID:
                            <div className="w-full aspect-video rounded-xl overflow-hidden">
                                <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${slide.resource_value}`}
                                title={`Video ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                />
                            </div>
                            ) : (
                            <img
                                src={slide.resource_value}
                                alt={`slide ${index + 1}`}
                                className="w-full rounded-xl object-cover"
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
        {/* Bottom Thumbnail Swiper */}
    <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        className="thumb-swiper"
      >
        {media.map((slide, index) => (
          <SwiperSlide 
          key={index}
          onClick={() => {
              if (mainSwiperRef.current) {
                mainSwiperRef.current.slideTo(index); 
              }
            }}
            style={{ cursor: 'pointer' }}>
              {slide.resource_type === 'video' ? (
                            // If resource_value is a YouTube video ID:
                          <img src={slide.thumbnail_url} alt={`thumb ${index + 1}`} className="rounded-md border border-gray-300 h-9 w-16" />
            ) : (
              <img src={slide.resource_value} alt={`thumb ${index + 1}`} className="rounded-md border border-gray-300 h-9 w-16" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  )
}

export default Swiperpage