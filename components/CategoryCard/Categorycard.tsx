import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import React from 'react';
import { Category } from "@/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Share from "../Share/Share";
import SubCategoryCard from "./SubCategoryCard/SubCategoryCard";

const Categorycard = ({index,CategoryName,CategoryImage,ImgageDescription}:Category & {index:number}) => {
  return (
    <div className="w-[30rem] h-[40rem] ">
      <Card className="relative w-full h-[25rem] overflow-visible shadow-none border-none" key={index}>
        <CardHeader className="w-full flex justify-between">
            <span className="h-[41px] text-[1rem] py-[8px] px-[13px] bg-primary text-white rounded-[0.25rem] shadow-gray-300 shadow-lg">{CategoryName}</span>
            <a className="text-primary float-end" href="#" target="_parent">Read More</a>
        </CardHeader>
        <CardBody className="w-full overflow-visible h-[23rem]" >
          <Image
            height={"100%"}
            width={"100%"}
            src={CategoryImage}
            alt={CategoryName}
            className="rounded-[5px]"
          />
          <div className="text-secondary hover:text-primary font-semibold text-left mt-3 cursor-pointer">
          {ImgageDescription}
          </div>
        </CardBody>
        <div className=" absolute bottom-[9px] right-5 cursor-pointer">
          <Share/>
        </div>
      </Card>
      <SubCategoryCard/>
    </div>
  )
}

export default Categorycard
