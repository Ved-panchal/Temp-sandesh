import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const firstRowItems = [
    "gujarat",
    "t20 world cup",
    "videos",
    "india",
    "world",
    "entertainment",
    "astro",
    "business",
    "sports",
    "lifestyle",
    "supplement",
  ];
  const secondRowItems = [
    "investor relation",
    "contact us",
    "rss",
    "sitemap",
    "privacy policy",
    "sandesh group",
    "complaint redressal",
    "smart order",
  ];

  return (
    <footer className="bg-gray  font-hindivadodara  w-full">
      <div className="w-full  justify-between flex min-h-[200px]  items-start">
        {/* Left Column */}
        <div className="flex flex-col basis-1/4 mt-2 ml-5 space-y-2">
          <div className="flex flex-wrap  text-gray_secondry  min-w-[60vw] ">
            {firstRowItems.map((item, index) => (
              <div key={index} className=" w-3 sm:w-1/2 md:w-1/3 lg:w-1/6 py-1">
                <a
                  href="#"
                  className="text-secondary text-sm hover:text-primary"
                >
                  {item.toLocaleUpperCase()}
                </a>
              </div>
            ))}
          </div>
          <hr className="  w-full border-[#cccccc]" />

          <div className="flex flex-wrap text-gray_secondry text-sm  mt-4">
            {secondRowItems.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 py-1"
              >
                <a href="#" className="text-gray_secondry hover:text-primary">
                  {item.toUpperCase()}
                </a>
              </div>
            ))}
          </div>
          <hr className="  w-full border-[#cccccc]" />
          {/* Copyright Statement */}
          <div className="mt-5 text-center text-gray_secondry text-sm">
            <p className="p-0 m-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
        <div className="content-none w-[1px] h-[10rem] bg-[#cccccc] mt-5 z-10"></div>

        {/* Middle Column */}
        <div className="flex flex-col basis-1/4 mx-20 flex-auto items-center mt-5 space-y-4">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/Images/play.svg"
              alt="play store"
              className="w-full h-auto"
              width={200}
              height={200}
            />
          </div>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/Images/app.svg"
              alt="app store"
              className="w-full h-auto"
              height={200}
              width={200}
            />
          </div>
        </div>
        

        {/* Right Column */}
        <div className="flex flex-col basis-1/4 mx-20 flex-auto items-center mt-5 space-y-4">
          <Image
            src="/Images/logo-b.png"
            height={100}
            width={100}
            alt="sandesh"
            className="w-full max-w-xs "
          />
          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray_secondry">Follow Us On</p>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
              <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
              <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" />
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-700" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
