import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        <a
          href="/"
          className="font-bold transition hover:text-black/50"
        >
          About&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a
          href="/"
          className="font-bold transition hover:text-black/50"
        >
          Contact&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a
          href=""
          className="font-bold transition hover:text-black/50"
        >
          Privacy&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a
          href=""
          className="font-bold transition hover:text-black/50"
        >
          Terms
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
      
        
      </div>
    </footer>
  );
}
