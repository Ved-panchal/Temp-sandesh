"use client";

import { Card, CardBody, CardHeader, Tab, Tabs,Image } from "@nextui-org/react";
import React from "react";
import "./TabCategories.css"
import Share from "../Share/Share";
import SubCategoryCard from "../CategoryCard/SubCategoryCard/SubCategoryCard";

const TabCategories = ({ TabCategories }) => {
  const [selected, setSelected] = React.useState(
    `${TabCategories[0].CategoryName}`
  );
  return (
    <div className="w-[30rem] h-[40rem] ">
      <Tabs
      className="mt-3"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        color={"danger"}
      >
        {TabCategories.map((Category, index) => (
          <Tab key={Category.CategoryName} title={Category.CategoryName}>
            <Card
              className="relative w-full h-[20rem] overflow-visible shadow-none border-none"
              key={index}
            >
              <CardBody className="w-full overflow-visible">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={Category.CategoryImage}
                  alt={Category.CategoryName}
                  className="rounded-[5px]"
                />
                <div className="text-secondary hover:text-primary font-semibold text-left mt-3 cursor-pointer">
                  {Category.ImgageDescription}
                </div>
              </CardBody>
              <Share/>
            </Card>
            <SubCategoryCard/>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};


export default TabCategories;
