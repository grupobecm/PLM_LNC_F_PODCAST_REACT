import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import './PhotoCarrusel.css';
/* import 'swiper/swiper.css';
import 'swiper/effect-cards.css'; */

interface carruselProps {
  images: string[];
}

const PhotoCarrusel: React.FC<carruselProps> = (props) => {
  const {images} = props;
  return(
    <Swiper
      modules={[EffectCards]}
      effect="cards"
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
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