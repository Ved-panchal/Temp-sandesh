"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Share from "../Share/Share";
import SubCategoryCard from "@/components/CategoryCard/SubCategoryCard/SubCategoryCard";
import { World_India } from "@/action"; // Ensure this import is correct and the data is available
import React from "react";

const World = () => {
  // Assuming World_India contains one object
  const item = World_India[0];

  return (
    <div className="flex justify-center mt-[15rem] items-center">
      <div className="w-[80vw] h-full flex flex-row">
        <div className="w-[65%]">
          <div className="w-[100%] pl-10 flex justify-between items-center">
            <span className="h-[41px] text-[1rem] py-[8px] px-[13px] bg-primary text-white rounded-[0.25rem] shadow-gray-300 shadow-lg">
              {item.Heading}
            </span>
            <a className="text-primary float-end" href="#" target="_parent">
              Read More
            </a>
          </div>
          <div className="w-full flex justify-end">
            <div className=" sm:w-full md:w-[30rem] lg:w-[30rem] xl:w-[40rem] ">
              <Card className="relative w-full h-[25rem] overflow-visible shadow-none border-none">
                <CardBody className="relative w-full overflow-visible">
                  <div className="relative overflow-hidden w-full">
                    <Image
                      height={"100%"}
                      width={"100%"}
                      src={item.Image}
                      alt={item.Heading}
                      className="rounded-[5px]"
                    />

                    <div className="absolute bottom-0  w-full bg-opacity-[60%] bg-black z-20 p-4">
                      <span className=" text-white text-md font-bold">
                        {item.Description}
                      </span>
                    </div>
                    
                  </div>
                  <div className="bg-primary text-white p-1">Hello</div>
                </CardBody>
              </Card>
              <SubCategoryCard />
              <SubCategoryCard />
              <SubCategoryCard />
            </div>
            <div className="flex flex-col xl:w-[40%] mt-4 items-center">
              <SubCategoryCard />
              <SubCategoryCard />
              <SubCategoryCard />
              <SubCategoryCard />
              <SubCategoryCard />
              <SubCategoryCard />
              <SubCategoryCard />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default World;
