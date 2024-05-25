"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button/Button";

interface Skill {
  title: string;
  src: string[];
}

interface SkillsCarouselProps {
  skills: Skill[];
}

const Gallery: React.FC<SkillsCarouselProps> = ({ skills }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="px-4">
            <h2 className="gp-text-h1 mb-8">{skill.title}</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-4">
              {skill.src.map((image, idx) => (
                <div key={idx} className="w-full">
                  <Image
                    src={image}
                    alt={skill.title}
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-between mt-4 px-4">
        <Button text="Previous" color="secondary" onClick={prevSlide} />
        <Button text="Next" color="secondary" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Gallery;
