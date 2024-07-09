import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { SportsNews } from "@/action";

const SportsCategory = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {SportsNews.map((slide, index) => (
        <Card
          key={index}
          className="mx-3 flex my-14   shadow-xl hover:text-primary  bg-white relative"
          shadow="sm"
        >
          <CardBody className="overflow-visible rounded-none p-0">
            <Image
              shadow="sm"
              radius="lg"
              alt={slide.Heading}
              className="object-contain"
              src={slide.Image}
            />
          </CardBody>
          <CardFooter className="text-sm justify-between font-bold p-2">
            <p className="text-default-500 line-clamp-2 hover:text-primary cursor-pointer">{slide.Description}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SportsCategory;
