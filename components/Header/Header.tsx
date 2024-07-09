"use client"
import { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "../DropDown/Dropdown";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";

import Image from "next/image";

function Header() {
  const dropdownItems = [
    "edu scope",
    "business @ sandesh",
    "nari",
    "ardha saptahik",
    "shraddha",
    "nakshatra",
    "cine sandesh",
    "kida world",
    "sanskar",
    // Add more items as needed
  ];

  const astroItems = ["jagannath rathyatra 2024", "bhakti"];
  const [active, setActive] = useState("Home");
  const [isSticky, setIsSticky] = useState(false);

  const handleSetActive = (item) => {
    setActive(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 192) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-around items-center p-2">
        <div className="flex justify-between items-center w-[calc(100vw-400px)] mb-2">
          <div>Date</div>
          <div className="flex items-center space-x-4">
            <Image src="/Images/user.png" alt="user" height={20} width={20} />
            <Image
              src="/Images/search.png"
              alt="search"
              height={20}
              width={20}
            />
          </div>
        </div>
        <hr className="w-full border-[#cccccc]" />
        <div className="bg-gray-400 h-px w-full"></div>
        <div className="flex justify-between mx-10 w-[calc(100vw-400px)] items-center">
          <div className="flex-shrink-0 my-5">
            <Image
              src="/Images/sandesh.jfif"
              alt="Left Image"
              height={200} // Set desired height
              width={200} // Set desired width
              className="object-contain" // Ensure the image maintains its aspect ratio
            />
          </div>
          <div className="flex-shrink-0 my-3 flex flex-col items-end">
            <Image
              src="/Images/qrcode.webp"
              alt="Right Image"
              height={80} // Set desired height
              width={80} // Set desired width
              className="object-contain" // Ensure the image maintains its aspect ratio
            />
            <div>Download The App</div>
          </div>
        </div>
      </div>
      <div className={`w-full bg-primary ${isSticky ? "sticky top-0 z-50 shadow-md" : ""}`}>

        <nav className="mx-48 flex font-hindivadodara justify-between items-center py-2 ">
        {isSticky && (
          <div className="transition-opacity h-full mr-3 duration-500 ease-in-out opacity-100">
            <Image
              src="/Images/sandesh.jfif"
              height={160}
              width={160}
              alt="sandesh"
            />
          </div>
        )}
      
          <div className="flex items-center sm:flex-wrap space-x-4">
            {[
              "Home",
              "Gujarat",
              "T20 World Cup",
              "Business",
              "Sports",
              "Videos",
              "India",
              "World",
              "Entertainment",
              "Lifestyle",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-white ${active === item ? "underline" : ""} text-sm`}
                onClick={() => handleSetActive(item)}
              >
                {item.toUpperCase()}
              </a>
            ))}

            <Dropdown>
              {({ isOpen }) => (
                <>
                  <DropdownTrigger>
                    <a
                      href="#"
                      className={`flex items-center font-serif text-white ${
                        active === "Astro" ? "underline" : ""
                      } text-sm cursor-pointer`}
                      onClick={() => handleSetActive("Astro")}
                    >
                      ASTRO
                      <Image
                        src="/Images/caret-down-solid.svg"
                        alt="down arrow"
                        className="ml-1"
                        height={10}
                        width={10}
                      />
                    </a>
                  </DropdownTrigger>
                  <DropdownMenu isOpen={isOpen}>
                    {astroItems.map((item, index) => (
                      <DropdownItem key={index}>
                        <a href="#" className="text-white">
                          {item.toUpperCase()}
                        </a>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </>
              )}
            </Dropdown>

            <Dropdown>
              {({ isOpen }) => (
                <>
                  <DropdownTrigger>
                    <a
                      href="#"
                      className={`flex items-center text-white ${
                        active === "Supplement" ? "underline" : ""
                      } text-sm cursor-pointer`}
                      onClick={() => handleSetActive("Supplement")}
                    >
                      SUPPLEMENT
                      <Image
                        src="/Images/caret-down-solid.svg"
                        alt="down arrow"
                        className="ml-1"
                        height={10}
                        width={10}
                      />
                    </a>
                  </DropdownTrigger>
                  <DropdownMenu isOpen={isOpen}>
                    {dropdownItems.map((item, index) => (
                      <DropdownItem key={index}>
                        <a href="#" className="text-white">
                          {item.toUpperCase()}
                        </a>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </>
              )}
            </Dropdown>
          </div>
          <div className="min-w-[10vw]">
            <button className="text-red-600 lg:text-sm md:text-[10px] border rounded-full bg-white border-white py-1 px-3 ">
              E-PAPER
            </button>
          </div>
        </nav>
      </div>
      <div className={`w-[100vw] flex  my-1 justify-center ${
          isSticky ? "sticky bg-white top-14 z-50 shadow-sm shadow-zinc-200 transition-all duration-500 ease-in-out" : ""
        }`}>
        <SecondaryHeader/>
        </div>
   
    </>
  );
}

export default Header
