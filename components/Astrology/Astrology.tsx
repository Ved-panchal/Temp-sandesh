// Slider_Astrology.js
"use client";
import React, { useState } from "react";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Astrology } from "@/action"; // Adjust this import as per your actual path
import { ChevronLeft, ChevronRight } from "lucide-react";
import SubCategoryCard from "../CategoryCard/SubCategoryCard/SubCategoryCard";
import Share from "../Share/Share";

// Custom ButtonGroup component for carousel navigation
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow },
  } = rest;
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= totalItems - slidesToShow;

  return (
    <div className="custom-button-group absolute top-0 right-0 flex justify-between items-center p-4 z-10 w-full">
      <span className="h-[41px] text-[1rem] py-[8px] px-[10px] bg-primary text-white rounded-[0.25rem] shadow-gray-300 shadow-lg">
        {Astrology[0]?.Heading}
      </span>
      <div className="flex items-center space-x-4">
        <span
          className={`cursor-pointer text-white text-3xl bg-primary transition-opacity duration-300 ease-in-out rounded-[5px] ${
            isAtStart ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => !isAtStart && previous()}
        >
          <ChevronLeft className="m-2" />
        </span>
        <span
          className={`cursor-pointer text-white text-3xl bg-primary transition-opacity duration-300 ease-in-out rounded-[5px] ${
            isAtEnd ? "opacity-50 cursor-not-allowed" : ""
          }`}
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

const Slider_Astrology = () => {
  const [selectedDescription, setSelectedDescription] = useState(
    Astrology[0]?.Description
  );
  const [selectedGujarati, setSelectedGujarati] = useState(
    Astrology[0]?.Gujarati
  );
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 1, // Slide one item at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // Slide one item at a time
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // Slide one item at a time
    },
  };

  const handleCardClick = (
    index: number,
    description: string,
    Gujarati: string
  ) => {
    setSelectedGujarati(Gujarati);
    setSelectedDescription(description);
    setSelectedCardIndex(index);
  };

  return (
    <div className="w-full relative flex flex-col justify-center items-center">
      <div className="w-[65vw] h-[80vh] p-4">
        <Carousel
          className="gap-0"
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // Server-side rendering support
          infinite={false}
          autoPlay={false} // Disable autoplay
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out" // Custom transition for smooth sliding
          transitionDuration={300} // Transition duration
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="custom-carousel-item-astrology" // Custom class for carousel items
          slidesToSlide={1} // Slide one item at a time
          customButtonGroup={<ButtonGroup />}
        >
          {Astrology.map((slide, index) => (
            <Card
              className="mx-3  mt-14 w-[160px] rounded-md shadow-xl flex items-center justify-center hover:text-primary  relative"
              key={index}
              shadow="sm"
            >
              <CardBody
                className="overflow-visible w-[100px] rounded-full p-0"
                onClick={() =>
                  handleCardClick(index, slide.Description, slide.Gujarati)
                }
              >
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={slide.Heading}
                  className="object-contain rounded-full"
                  src={slide.Image}
                />
                <p
                  className={`text-center line-clamp-2 cursor-pointer ${
                    selectedCardIndex === index
                      ? "text-primary"
                      : "text-default-500"
                  }`}
                >
                  {slide.SubHeading}
                </p>
              </CardBody>
             
            </Card>
          ))}
         
        </Carousel>
        <div className=" bg-gray mx-3 mt-4 p-2 text-sm  rounded">
            <span className="text-primary font-bold text-sm">
              {selectedGujarati}:
            </span>{" "}
            <span>{selectedDescription}</span>
          </div>
          {/* <div className="flex items-center justify-center mt-4 mb-4 text-sm">
          <hr className="w-1/3 border-gray-400" />
          <span className="mx-2 text-gray-600">Or</span>
          <hr className="w-1/3 border-gray-400" />
        </div> */}
       
        
       
      </div>
    </div>
  );
};

export default Slider_Astrology;
