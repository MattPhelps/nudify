import React from "react";
import sfwDownloaderData from "./sfwDownloadersData";
import nsfwDownloaderData from "./nsfwDownloadersData";
import SingleExample from "./SingleExample";
import siteConfig from '../../../../siteConfig';

const selectedData = siteConfig.downloaderList === "sfw" ? sfwDownloaderData : (siteConfig.downloaderList === "nsfw" ? nsfwDownloaderData : []);

const DownloaderToolExample = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7.5 pt-7.5">
      {selectedData.map((example, id) => (
        <SingleExample key={id} example={example} />
      ))}
    </div>
  );
};

export default DownloaderToolExample;
