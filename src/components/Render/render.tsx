"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import siteConfig from "../../../siteConfig";

const Render = () => {

  const handleButtonClick = () => {
    if (siteConfig.functional == "yes") {
      window.open(siteConfig.smartlink, "_blank");
    }
  };

  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';

    // Enable scrolling on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="flex flex-col items-center gap-10">
      </p>
     
      <div className="flex flex-col lg:flex-row gap-[0px] lg:gap-[10px] items-center lg:items-center rounded-[10px] px-[10px]">
        <div className="px-[10px] sm:px-0 mr-[20px] lg:mr-[30px]">
        <Image
            className="rounded-[10px]"
            alt=""
            width={800}
            height={400}
            src="/images/how-to/download-fail.png"
          />
        </div>
        <div className="flex flex-col gap-[20px] justify-center lg:px-0 px-[40px] sm:px-0 sm:max-w-[300px] h-full lg:max-w-[220px] py-[15px] items-center">
          <div className="flex flex-col gap-[5px] lg:gap-[20px] w-full h-full">
         <div>
          
            </div>
            <div className="w-full flex flex-col gap-[5px]">
              <button
              style={
                {
                  "--main-color": siteConfig.buttonColor
                } as any
              }
                className="button-styling justify-center inline-flex rounded-lg py-3 px-5 text-white font-medium ease-in duration-300 hover:opacity-80"
              >
                Download
              </button>

              <p className="text-start justify-start text-[12px] justify-center gap-[3px] flex items-center">
                What Next?
                <ToolBox
                  text={"The image will appear in your downloads folder."}
                  />
              </p>
            </div>
            {/* 
            <div className='w-full flex flex-col gap-[5px]'>
            <a
            target=""
            className={`justify-center inline-flex rounded-lg py-3 px-5 bg-white text-[black] border-2 border-black font-medium ease-in duration-300 hover:bg-gray-100 dark:shadow-button dark:hover:button-gradient-hover transform hover:scale-110 flex items-center justify-center transition duration-500 ease-in-out`}
            href={siteConfig.promotedBrandSlug}
            //href={filteredFormats[selectedResolutionIndex]?.url}
          >
            Download HD
          </a> 
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Render;

const ToolBox = ({ text }) => {
  return (
    <span className="tooltip bg-[gray] w-[12px] h-[12px] flex items-center justify-center text-[12px] rounded-full text-[white]">
      <span className="tooltiptext">{text}</span>?
    </span>
  );
};
