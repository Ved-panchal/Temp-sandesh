"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SectionWrapper } from '../HOC'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faWhatsapp,
  } from "@fortawesome/free-brands-svg-icons";

import Marquee from "react-fast-marquee";


const SecondaryHeader = () => {

    const [isSticky, setIsSticky] = useState(false);

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
    <div className='flex w-full justify-between items-center'>
        <button className="bg-primary text-white font-semibold text-md min-w-[120px]  py-2 px-1">
          News Flash
        </button>
     
        {/* <p className="animate-marquee">Canada Work Permit: ભારતીયો માટે ખુશખબર, વર્ક પરમિટના નિયમોમાં ફેરફાર | Kedarnath Yatra: કેદારનાથમાં ફરી સંકટના વાદળો ઘેરાયાં..? IMDના રેડ એલર્ટથી વધ્યું ટેન્શન | 
          Budget 2024: નાણામંત્રી ક્યારે રજૂ કરશે બજેટ? જાણો તમામ અપડેટ્સ | 
        IND vs ZIM: સિરીઝની તમામ મેચો કેટલા વાગ્યે થશે શરૂ, જાણો વિગત | Banaskantha: લાખણીમાં જળબંબાકારની સ્થિતિ, ખેતરોમાં ઢીંચણસમા પાણી ભરાયા, જુઓ તારાજીના દ્રશ્યો
        </p>
        <p className="animate-marquee">Canada Work Permit: ભારતીયો માટે ખુશખબર, વર્ક પરમિટના નિયમોમાં ફેરફાર | Kedarnath Yatra: કેદારનાથમાં ફરી સંકટના વાદળો ઘેરાયાં..? IMDના રેડ એલર્ટથી વધ્યું ટેન્શન | 
          Budget 2024: નાણામંત્રી ક્યારે રજૂ કરશે બજેટ? જાણો તમામ અપડેટ્સ | 
        IND vs ZIM: સિરીઝની તમામ મેચો કેટલા વાગ્યે થશે શરૂ, જાણો વિગત | Banaskantha: લાખણીમાં જળબંબાકારની સ્થિતિ, ખેતરોમાં ઢીંચણસમા પાણી ભરાયા, જુઓ તારાજીના દ્રશ્યો
        </p> */}
        <a className="text-center w-[40vw] mr-[10rem] font-semibold text-[22px] text-gray_secondry">
        <Marquee>
          <p>
          Banaskantha: લાખણીમાં જળબંબાકારની સ્થિતિ, ખેતરોમાં ઢીંચણસમા પાણી ભરાયા, જુઓ તારાજીના દ્રશ્યો
          </p>
          &nbsp; | &nbsp;
          <p>
          Canada Work Permit: ભારતીયો માટે ખુશખબર, વર્ક પરમિટના નિયમોમાં ફેરફાર 
          </p>
          &nbsp; | &nbsp;
          <p>
          Kedarnath Yatra: કેદારનાથમાં ફરી સંકટના વાદળો ઘેરાયાં..? IMDના રેડ એલર્ટથી વધ્યું ટેન્શન 
          </p>
          &nbsp; | &nbsp;
          <p>
          Budget 2024: નાણામંત્રી ક્યારે રજૂ કરશે બજેટ? જાણો તમામ અપડેટ્સ 
          </p>
          &nbsp; | &nbsp;
          <p>
          IND vs ZIM: સિરીઝની તમામ મેચો કેટલા વાગ્યે થશે શરૂ, જાણો વિગત 
          </p>
          &nbsp; | &nbsp;

        </Marquee>
        </a>

        <div className="flex items-center space-x-4">
          <Image
          className="rounded-md"
            src="/Images/monsoon.jpg"
            width={250}
            height={250}
            alt="monsoon"
          />
          <FontAwesomeIcon icon={faFacebook}  className="text-blue-600 size-5" />
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 size-5" />
          <FontAwesomeIcon icon={faInstagram} className="text-pink-600 size-5" />
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 size-5" />
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-700 size-5" />
          {/* Add more social media icons here */}
        </div>
      </div>
  )
}

export default SectionWrapper(SecondaryHeader,"SecondaryHeader")