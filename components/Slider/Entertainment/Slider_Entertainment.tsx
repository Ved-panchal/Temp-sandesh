// Slider_Entertainment.js
"use client";
import React from "react";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Entertainment } from "@/action"; // Adjust this import as per your actual path
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom ButtonGroup component for carousel navigation
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
    const isAtStart = currentSlide === 0;
    const isAtEnd = currentSlide >= totalItems - slidesToShow;
  
    return (
      <div className="custom-button-group absolute top-0 right-0 flex justify-between items-center p-4 z-10 w-full">
        <span className="h-[41px] text-[1rem] py-[8px] px-[13px] bg-primary text-white rounded-[0.25rem] shadow-gray-300 shadow-lg">
          {Entertainment[0]?.Heading}
        </span>
        <div className="flex items-center space-x-4">
          <span
            className={`cursor-pointer text-white text-3xl bg-primary transition-opacity duration-300 ease-in-out rounded-[5px] ${isAtStart ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => !isAtStart && previous()}
          >
            <ChevronLeft className="m-2" />
          </span>
          <span
            className={`cursor-pointer text-white text-3xl bg-primary transition-opacity duration-300 ease-in-out rounded-[5px] ${isAtEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => !isAtEnd && next()}
          >
            <ChevronRight className="m-2" />
          </span>
          <a className="text-primary float-end" href="#" target="_parent">
            Read More
          </a>
        </div>
      </div>
    );
  };

const Slider_Entertainment = () => {
 

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // Slide one item at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // Slide one item at a time
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // Slide one item at a time
    },
  };

  return (
    <div className="w-full relative flex justify-center items-center bg-[#f0f0f0] ">
      <div className=" w-[80vw] p-4 ">
        <Carousel
          className="gap-0"
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // Server-side rendering support
          infinite={false}
          autoPlay={false} // Disable autoplay
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out" // Custom transition for smooth sliding
          transitionDuration={300} // Transition duration
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="custom-carousel-item" // Custom class for carousel items
          slidesToSlide={1} // Slide one item at a time
          customButtonGroup={<ButtonGroup />}
        >
          {Entertainment.map((slide, index) => (
            <Card 
              className="mx-3 mt-14 h-[23vh] w-[15vw] rounded-md shadow-xl hover:text-primary shadow-gray bg-white relative"
              key={index}
              shadow="sm"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={slide.Heading}
                  className="object-contain"
                  src={slide.Image}
                />
              </CardBody>
              <CardFooter className="text-sm justify-between  font-bold ">
                <p className="text-default-500 line-clamp-2 ">{slide.Description}</p>
              </CardFooter>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider_Entertainment;
