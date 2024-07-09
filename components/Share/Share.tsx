"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Share = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="bottom-3 right-5 cursor-pointer"
        height="12px"
        width="12px"
        alt="Share"
        src="/Assets/icons/share.svg"
      />
      {isHovered && (
        <div
          className="absolute flex flex-col justify-evenly right-1 top-4 h-[7rem] w-[1.7rem] bg-white shadow-md 37332B shadow-[#ccc] z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a className="w-full" href="">
            <FontAwesomeIcon
              className="py-[3px] px-[6px] hover:text-primary"
              icon={faFacebook}
            />
          </a>
          <a className="w-full" href="">
            <FontAwesomeIcon
              className="py-[3px] px-[6px] hover:text-primary"
              icon={faTwitter}
            />
          </a>
          <a className="w-full" href="">
            <FontAwesomeIcon
              className="py-[3px] px-[6px] hover:text-primary"
              icon={faWhatsapp}
            />
          </a>
          <a className="w-full" href="">
            <FontAwesomeIcon
              className="py-[3px] px-[6px] hover:text-primary"
              icon={faEnvelope}
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Share;
