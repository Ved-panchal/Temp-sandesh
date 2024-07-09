"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import SportsCategory from "./SportsCategory/SportsCategory";
import { World_India } from "@/action"; // Ensure this import is correct and the data is available
import React from "react";

const SportsNews = () => {
  // Assuming World_India contains one object
  const item = World_India[2];

  return (
    <div className="flex bg-[#f0f0f0] justify-center mt-[15rem] items-center">
      <div className="w-[80vw] h-full flex flex-row">
        <div className="w-[65%]">
          <div className="w-[100%] pl-3 mt-3 flex justify-between items-center">
            <span className="h-[41px] text-[1rem] py-[8px] px-[13px] bg-primary text-white rounded-[0.25rem] shadow-gray-300 shadow-lg">
              {item.Heading}
            </span>
            <a className="text-primary float-end" href="#" target="_parent">
              Read More
            </a>
          </div>
          {/* bg-[#f0f0f0] */}
          <div className="w-full flex justify-start">
            <div className=" sm:w-full md:w-[35rem] lg:w-[35rem] xl:w-[45rem] ">
              <Card className="relative w-full h-[22rem] overflow-visible     shadow-none border-none">
                <CardBody className="relative p-2 bg-[#f0f0f0]  w-full overflow-visible">
                  <div className="relative rounded-none overflow-hidden w-full">
                    <Image
                      height={"100%"}
                      width={"100%"}
                      src={item.Image}
                      alt={item.Heading}
                      className="rounded-none"
                      
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
            </div>
            <div className="bg-white mx-3 w-[50%] h-[22rem] p-4  shadow-none">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
              Team India એ ફ્લાઇટમાં આવી રીતે કર્યું ટ્રોફી સાથે સેલિબ્રેશન, જુઓ Video
              </h2>
              <hr className="w-full my-3 border-[#cccccc]" />
              <p className="text-md  text-gray-600 ">
                ટીમ ઈન્ડિયા ટ્રોફી સાથે પરત ફરી ટીમ 4 દિવસથી બાર્બાડોસમાં અટવાઈ
                હતી ટ્રોફી સાથે સેલિબ્રેશનનો વીડિયો વાયરલ હવે ટીમ ઈન્ડિયા ટી20
                વર્લ્ડ કપની ટ્રોફી જીતીને ભારત પરત ફરી છે. જેમાં વરસાદના કારણે
                ટીમ ઈન્ડિયા છેલ્લા 4 દિવસથી બાર્બાડોસમાં અટવાઈ ગઈ હતી, ત્યારબાદ
                ટીમ ઈન્ડિયાને લાવવા માટે ભારતથી વિશેષ વિમાન મોકલવામાં આવ્યું
                હતું. ફ્લાઈટથી આવતી વખતે ટીમ ઈન્ડિયાના ખેલાડીઓએ ટ્રોફી સાથે ખૂબ
                જ મસ્તી કરી હતી. હવે રોહિત શર્મા અને વિરાટ કોહલીનો ટ્રોફી સાથે
                સેલિબ્રેશન કરતો વીડિયો વાયરલ થઈ રહ્યો છે.
              </p>
              <p className=" line-clamp-1 text-[#333333]">   https://twitter.com/BCCI/status/1808666655045587254BCCIએ સોશિયલ
                મીડિયા પર એક વીડિયો શેર કર્યો BCCIએ સોશિયલ મીડિયા પર એક વીડિયો
                શેર કર્યો છે. જેમાં ટીમ ઈન્ડિયાના ખેલાડ...
                </p>
                <hr className="w-full my-3 border-[#cccccc]" />
            </div>
          </div>

          <div className="flex">
            <SportsCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;
