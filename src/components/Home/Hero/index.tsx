"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../../siteConfig";
import Render from "../../../components/Render/render";
import DownloadFail from "../../../components/DownloadFail/downloadFail";
import { useState, useRef } from "react";
import React, { useEffect } from 'react';
import UploadDropzone from '../../UploadDropzone/uploadDropzone';

const Hero = () => {
  const handleFileUpload = (files) => {
    console.log(files); // Here, you can handle the uploaded files
};

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
          AI Clothes Remover – remove clothes from images
          </p>
          
          {/* Grouped Input and Button */}
          <div className="flex justify-center items-center mb-4">

          <div className="container mx-auto">
            <UploadDropzone onFileUpload={handleFileUpload} />
        </div>
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
