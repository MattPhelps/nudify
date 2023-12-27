import { useEffect, useState } from "react";
import siteConfig from "../../../siteConfig";

export default function ExternalLinkButton() {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); 

  return (
    <a
      href={siteConfig.promotedBrandURL}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`
        hidden md:flex /* Added classes */
        transition 
        duration-500 
        ease-in-out 
        fixed 
        bottom-10
        button-styling
        right-10 
        z-50
        px-10  
        py-4  
        w-auto
        text-white 
        rounded-lg
        shadow-lg 
        transform 
        hover:scale-110
        focus:outline-none 
        focus:ring-2 
        focus:ring-purple-600
        focus:ring-opacity-50
        cursor-pointer
        items-center
        justify-center
      `}
      style={
        {
          minWidth: "250px",
          "--main-color": siteConfig.buttonColor,
          borderWidth: '2px',
          borderColor: '#000000'
        } as any
      }
      tabIndex={0}
    >
      {/*
      <svg
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg> */}
      
      <span className="text-2xl font-bold mr-3">{siteConfig.floatingButtonCTA}</span>
    </a>
  );
}
