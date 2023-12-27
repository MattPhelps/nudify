import Image from 'next/image'
import React from 'react'
import siteConfig from "../../../siteConfig";

// thumnail.jpg
const DownloadFail = () => {
    const color = siteConfig.buttonColor
    return (
        <div className='flex items-center gap-[10px] flex-col justify-center mt-[10px] w-full'>
            
            <p className='text-[18px] text-center leading-[1] max-w-[380px] lg:max-w-[540px] mb-4'>
               Download Failed
            </p>
            
            <div className='flex flex-col lg:flex-row gap-[0px] lg:gap-[10px] items-center lg:items-center rounded-[10px] px-[10px]' >
                <div className='px-[10px] sm:px-0 mr-[20px] lg:mr-[30px]'>
                    <Image style={{ width: "auto", height: "auto" }}
                    className='max-h-[210px] lg:max-h-[190px] rounded-[10px]'
                    src="/images/icons/download-fail.png"
                    alt="" width={1200} height={800} />
                </div>
                <div className='flex flex-col gap-[20px] justify-center lg:px-0 sm:px-0 sm:max-w-[300px] h-full lg:max-w-[210px] py-[15px] items-center'>
    <div className='flex flex-col gap-[5px] lg:gap-[20px] w-full h-full'>
    <p className='text-[16px] text-center leading-[1] max-w-[380px] lg:max-w-[540px] mb-4'>
                Use {siteConfig.promotedBrand} for Guaranteed Download
            </p>
        <div className='w-full flex flex-col gap-[5px]'>
            <a title="This is a tooltip message"
                href={siteConfig.promotedBrandURL}
                target="_blank"
                className="
                justify-center
                inline-flex
                rounded-lg
                py-3
                bg-white
                text-[black]
                border-2
                border-black
                font-medium
                ease-in
                duration-300
                hover:bg-gray-100
                dark:shadow-button
                dark:hover:button-gradient-hover
                transform 
                hover:scale-110
                flex
                items-center
                justify-center
                transition 
                duration-500 
                ease-in-out"
            >
                Download HD&nbsp;&nbsp;&nbsp;<img src="/images/icons/tick.png" alt="Icon" style={{ width: '14px', height: '14px' }} />
            </a>
            <p className='text-center justify-center text-[12px] justify-center gap-[3px] flex items-center'>
                works for all {siteConfig.baseSiteName} videos<ToolBox text={`Guaranteed download for all ${siteConfig.baseSiteName} videos with ${siteConfig.promotedBrand}`} />
            </p>
        </div>
    </div>
</div>

            </div>
        </div>
    )
}

export default DownloadFail


const ToolBox = ({ text }) => {
    return (
        <span className="tooltip bg-[gray] w-[12px] h-[12px] flex items-center justify-center text-[12px] rounded-full text-[white]">
            <span className="tooltiptext">{text}</span>
            ?
        </span>
    )
}