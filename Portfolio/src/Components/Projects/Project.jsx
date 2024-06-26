import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

import Project1 from "../../img/project1.png";
import Project2 from "../../img/project2.png";
import Project3 from "../../img/project3.png";
import Project4 from "../../img/project4.png";
import Project5 from "../../img/project5.png";
import Project6 from "../../img/project6.png";
import Project7 from "../../img/project7.png";
import Project8 from "../../img/project8.png";
import Project9 from "../../img/project9.png";

function Project() {
  return (
    <div className="project">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        // spaceBetween={30}
        slidesPerView={3}
        // grabCursor={true}
        className="project-slider"
        modules={[Navigation, Pagination]}
        navigation={{ enabled: true }}
        // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Project1} alt="Project 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project2} alt="Project 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project3} alt="Project 3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project4} alt="Project 4" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project5} alt="Project 5" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project6} alt="Project 6" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project7} alt="Project 6" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project8} alt="Project 8" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Project9} alt="Project 9" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Project;
