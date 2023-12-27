'use client'
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import siteConfig from '../../../siteConfig'; 

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const configTheme = siteConfig.colorTheme;
    if (configTheme) {
      setTheme(configTheme); 
      console.error("No theme specified in the site configuration."); 
    }
  }, [setTheme]); 

  return null; 
};

export default ThemeSwitcher;

{/*  OLD CODE WITH BUTTON IN HEADER

"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    console.log("Working Switcher");
  }, [])

  if (!mounted) return null
  console.log(theme)
  return (
    <>
      <button onClick={() => setTheme("light")} className="hidden dark:flex">
        <BsFillSunFill className="text-[20px] text-[white] " />
      </button>
      <button onClick={() => setTheme("dark")} className="flex dark:hidden">
        <MdDarkMode className="text-[20px] text-[black] " />
      </button>
    </>
  )

}

export default ThemeSwitcher
*/}