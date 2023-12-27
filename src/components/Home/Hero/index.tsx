"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../../siteConfig";
import Render from "../../../components/Render/render";
import DownloadFail from "../../../components/DownloadFail/downloadFail";
import { useState, useRef } from "react";
import React, { useEffect } from 'react';

const Hero = () => {

  const [showRender, setShowRender] = useState(false);
  const renderRef = useRef(null); // Create a ref for the Render component


  const handleDownloadClick = (event) => {
    
    if (siteConfig.functional == "no") {
      window.open(siteConfig.smartlink, '_blank');
    } else {
      window.open(siteConfig.promotedBrandSlug, '_blank');
    }

   event.preventDefault(); // Prevents the default link behavior - ADD or remove the href on the button once DONE UVA STUFF
    setShowRender(true); // Sets the showRender state to true
    // Scroll to the Render component after state update
    setTimeout(() => {
      renderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  };

  useEffect(() => {
    const handleClick = () => {
      window.open(siteConfig.smartlink, '_blank'); // Replace with your desired URL
    };

    document.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-10 md:pt-25 xl:pt-30"
    >

      {/* <!-- Hero Content --> */}
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center">
          <h1 className="text-[black] dark:text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading">
            Nudify
          </h1>
          <p className="max-w-[500px] mx-auto mb-9 font-small md:text-md">
          AI Clothes Remover – remove all clothes from any image
          </p>
          {/* Grouped Input and Button */}
          <div className="flex justify-center items-center mb-4">

            <Link
              href="/itubego"
              onClick={handleDownloadClick}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--main-color": siteConfig.buttonColor } as any}
              className="button-styling inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Upload an Image
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full"></div>
{/* 
      <div
         className="aspect-[1170/411] bg-red-500 relative max-w-[1170px] w-full mx-auto" // Added margin-top (mt-4)
         data-wow-delay="0.1s"
      >
        {/* Conditionally render the Render component 
      {showRender && (
        <div
          ref={renderRef} // Attach the ref to this div
          className="flex justify-center items-center w-full h-screen" // Added flexbox for centering
        >
          <Render />
        </div>
      )}
      </div> */}
    </section>
  );
};

export default Hero;
