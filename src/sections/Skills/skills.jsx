// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination } from "swiper";


import data from './data'

import './skilss.css'


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Skills</h2>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {
            data.map(skill=>(
                <SwiperSlide className="Slider">
                    <p className="sicon">{skill.icon}</p>
                    <h3>{skill.title}</h3>
                    <p>{skill.content}</p>
                </SwiperSlide>
            )
                
            )
        }
         
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials