import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import DownloaderToolExample from "@/components/DownloadersList/DownloaderToolExample";
import siteConfig from '../../../siteConfig';
import { Metadata } from "next";

const pageTitle = `All Downloaders | ${siteConfig.siteName}`;

export const metadata: Metadata = {
  title: pageTitle,
};


const DownloadersList = () => {

  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          
        <SectionTitle
            title="All Downloaders"
            paragraph="Download any video... from any platform"
          />
          <DownloaderToolExample />
        </div>
        <div className="max-w-[770px] mx-auto px-4 sm:px-8 xl:px-0 pt-25">
        <p>Notice of Non-Affiliation and Disclaimer: {siteConfig.siteName} is not affiliated, associated, authorized, endorsed by, or in any way officially connected with websites presented on this page or any of their subsidiaries or affiliates. Related names, marks, emblems, and images may be registered trademarks.</p>
        </div>
      </section>
    </>
  );
};

export default DownloadersList;
