import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import './PhotoCarrusel.css';

interface carruselProps {
  images: string[];
}

const PhotoCarrusel: React.FC<carruselProps> = (props) => {
  const {images} = props;
  return(
    <Swiper
      modules={[EffectCards, Pagination]}
      pagination={{ clickable: true }}
      effect="cards"
    >
      {images.map(image => (
        <SwiperSlide>
          <div className="card" 
          style={{backgroundImage: `url('${image}')`}}>
              
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
 
export default PhotoCarrusel;