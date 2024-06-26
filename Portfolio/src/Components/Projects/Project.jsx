import React from 'react';
import './Project.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Project1 from '../../img/project1.png';
import Project2 from "../../img/project2.png";
import Project3 from "../../img/project3.png";
import Project4 from "../../img/project4.png";
import Project5 from "../../img/project5.png";
import Project6 from "../../img/project6.png";
import Project7 from "../../img/project7.png";



import "swiper/css";

function Project() {
  return (
    <div className="project">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper>
        <SwiperSlide>
          <img src={Project1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project3} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project4} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project5} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project6} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Project
