import { DownloaderExample } from "@/types/DownloaderExample";
import Link from "next/link";

const SingleExample = ({ example }: { example: DownloaderExample }) => {
  return (
    <div className="relative DownloaderExamples-border-gredient-light dark:DownloaderExamples-border-gredient rounded-lg">
      <div className="group relative overflow-hidden py-9 px-8 rounded-lg ">
        <span
          className={`features-bg-light dark:features-bg absolute w-full h-full left-0 top-0 -z-1 ${
            example?.rotate && "rotate-180"
          }`}
        ></span>
        

        <div className="flex items-center space-x-4">
        <img src={example.icon || "/images/favicons/default.png"} alt="Site Logo" className="w-8 h-8" />

    <h4 className="font-semibold text text-[black] dark:text-[white] mb-4">
        {example.title}
    </h4>
</div>
        
        <Link
          href={example.url}
          aria-label="explore the tool"
          className="mt-9 inline-block dark:button-border-gradient border-2 border-[#00000055] relative rounded-lg text-[black] dark:text-[white] text-sm  gap-1.5 py-3 px-6 dark:shadow-button dark:hover:button-gradient-hover hover:shadow-none hover:bg-[#ffffff46] dark:hover:bg-none"
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default SingleExample;
