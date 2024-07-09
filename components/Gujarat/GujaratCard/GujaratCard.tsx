"use client";
import { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { GujaratType } from "@/action";
import SubCategoryCard from "@/components/CategoryCard/SubCategoryCard/SubCategoryCard";

const GujaratCard = ({ index, Heading, Title }: GujaratType & { index: number }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleNameClick = (idx: number) => {
    if (Title[idx].Name === '+') {
      onOpen();
    } else {
      setSelectedIndex(idx);
    }
  };

  const cities = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Anand", "Nadiad"];
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const handleCityClick = (city: string) => {
    setSelectedCities((prevSelectedCities) =>
      prevSelectedCities.includes(city)
        ? prevSelectedCities.filter((c) => c !== city)
        : [...prevSelectedCities, city]
    );
  };

  return (
    <div className=" relative w-full">
      <div className="w-[100%] mt-3 flex justify-between items-center">
        <span className="h-[41px] text-[1rem] py-[8px] px-[13px] bg-primary text-white rounded-[0.25rem] shadow-gray-300 shadow-lg">
          {Heading}
        </span>
        <a className="text-primary float-end" href="#" target="_parent">
          Read More
        </a>
      </div>
      <div className="w-full mt-3">
        <div className="relative sm:w-full md:w-[35rem] lg:w-[35rem] xl:w-[45rem]">
          <div className="flex flex-wrap text-gray_border text-lg bg-[#ffffff] gap-2">
            {Title.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNameClick(idx)}
                className={`px-4 py-2 rounded ${selectedIndex === idx ? ' text-primary' : 'bg-gray-200'}`}
              >
                {item.Name}
              </button>
            ))}
          </div>
          <Card className="relative w-full h-[25rem] rounded-none flex shadow-none border-none">
            <CardBody className="relative p-0 bg-[#f0f0f0] w-full">
              <div className="relative rounded-target overflow-hidden w-full">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={Title[selectedIndex].Image}
                  alt={Heading}
                />
                <div className="absolute bottom-0 w-full bg-opacity-[60%] bg-black z-20 p-4">
                  <span className="text-white text-md font-bold">
                    {Title[selectedIndex].Description}
                  </span>
                </div>
              </div>
              <div className="bg-primary text-white p-1">Share</div>
            </CardBody>
          </Card>
          <div>
            <SubCategoryCard border="border" />
            <SubCategoryCard border="border" />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent  className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8">
          {(onClose) => (
            <>
             
              <ModalBody>
                <div className="flex justify-start flex-wrap gap-5">
                  {cities.map((city, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCityClick(city)}
                      className={`px-4 py-2 rounded-full border ${selectedCities.includes(city) ? 'text-primary border-primary' : 'text-gray-500 border-gray-500'} hover:text-primary hover:border-primary`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
                
              </ModalBody>
              <ModalFooter>
               
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GujaratCard;
