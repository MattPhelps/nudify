import Image from 'next/image'
import React from 'react'
import siteConfig from "../../../siteConfig";

const Render = () => {
    const color = siteConfig.buttonColor

    const handleButtonClick = () => {
        if (siteConfig.functional == "yes") {
            window.open(siteConfig.smartlink, '_blank');
          }
       
    };

    return (
        <div className='flex items-center gap-[10px] flex-col justify-center mt-[10px] w-full'>
            <p className='text-[18px] text-center leading-[1] max-w-[380px] lg:max-w-[540px] mb-4'>
                Video Title 
            </p>
            
            <div className='flex flex-col lg:flex-row gap-[0px] lg:gap-[10px] items-center lg:items-center rounded-[10px] px-[10px]' >
                <div className='px-[10px] sm:px-0 mr-[20px] lg:mr-[30px]'>
                    <Image style={{ width: "auto", height: "auto" }}
                    className='max-h-[210px] lg:max-h-[190px] rounded-[10px]'
                    src="/images/render/thumbnail.jpg"
                    alt="" width={1200} height={600} />
                </div>
                <div className='flex flex-col gap-[20px] justify-center lg:px-0 px-[40px] sm:px-0 sm:max-w-[300px] h-full lg:max-w-[210px] py-[15px] items-center'>
    <div className='flex flex-col gap-[5px] lg:gap-[20px] w-full h-full'>
        <div className='w-full flex flex-col gap-[5px]'>
            <button
                onClick={handleButtonClick} 
                style={{ "--main-color": siteConfig.buttonColor } as any}
                className="
                button-styling
                justify-center
                inline-flex
                rounded-lg
                py-3
                px-5
                text-white
                font-medium
                ease-in
                duration-300
                hover:opacity-80"
            >
                Download
            </button>
            <p className='text-center justify-center text-[12px] justify-center gap-[3px] flex items-center'>
                Low resolution<ToolBox text={"Low resolution and a bit tedious - but it's free"} />
            </p>
        </div>
        <div className='w-full flex flex-col gap-[5px]'>
            <a title="This is a tooltip message"
                href={siteConfig.promotedBrandURL}
                className="
                justify-center
                inline-flex
                rounded-lg
                py-3
                px-5
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
                Download HD
            </a>
            <p className='text-center justify-center text-[12px] justify-center gap-[3px] flex items-center'>
                From {siteConfig.promotedBrand} for free<ToolBox text={"Download in HD from literally any website"} />
            </p>
        </div>
    </div>
</div>

            </div>
        </div>
    )
}

export default Render


const ToolBox = ({ text }) => {
    return (
        <span className="tooltip bg-[gray] w-[12px] h-[12px] flex items-center justify-center text-[12px] rounded-full text-[white]">
            <span className="tooltiptext">{text}</span>
            ?
        </span>
    )
}