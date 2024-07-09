import Image from "next/image";
import React from "react";
import Share from "@/components/Share/Share";

type Tempdata = {
  Title: string;
  Description: string;
  image: string;
};
const SubCategoryCard = ({border}:{border?:string}) => {
  const tempData: Tempdata[] = [
    {
      Title: "22 કેરેટ ગોલ્ડ થયું મોઘું",
      Description:
        "Gold Silver Price: શું આજે થયા સોના-ચાંદીના ભાવમાં ફેરફાર? જાણો લેટેસ્ટ રેટ",
      image: "/Assets/CategoryImages/Sub-cat-Jwellery.png",
    },
  ];
  return (
    <>
      {tempData.map((data, index) => {
        return (
          <div
            className={`relative mx-3 ${border?"border-y bg-white": ""}  border-gray_border border-t-1 flex flex-row text-[15px] text-secondary font-semibold`}
            key={index}
          >
            <div className="py-4 pl-4">
              <Image
                className="rounded-md"
                height={150}
                width={150}
                src="/Assets/CategoryImages/Sub-Category-Jwellery.jpg"
                alt="News"
              />
            </div>
            <div className="pl-4  w-full">
              <div className="w-full text-primary pt-3 cursor-pointer line-clamp-1">
                {data.Title}
              </div>
              <div className="description hover:text-primary cursor-pointer line-clamp-2">
                {data.Description}
              </div>
            </div>
            <div className="absolute top-3 right-2">
              <Share/>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SubCategoryCard;
