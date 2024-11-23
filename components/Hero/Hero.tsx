import Link from "next/link";
import React, { useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface HeroProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  expRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
}

export function Hero({ aboutRef, expRef, projectRef }: HeroProps) {
  const onClickAbout = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef?.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  const onClickExperience = () => {
    if (expRef && expRef.current) {
      expRef?.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const onClickProject = () => {
    if (projectRef && projectRef.current) {
      projectRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // TODO: Check if element is visible in DOM
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (!aboutRef?.current) return false;
  //     const top = aboutRef?.current.getBoundingClientRect().top;
  //     return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  //     // console.log(aboutRef?.current?.offsetWidth?, "aboutRef?.current");
  //   };
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [aboutRef?.current?.scrollTop]);

  return (
    <div className="w-full lg:w-1/2 sticky lg:relative top-0 z-50">
      <div className="lg:sticky bg-gradient-to-r from-[#262626] to-indigo-950 lg:bg-none block w-auto text-white inset-x-0 p-6 lg:top-20 lg:min-h-[20%] flex lg:block justify-between border-b border-slate-600 lg:border-none shadow lg:shadow-none">
        <div>
          <h1 className="hidden md:block text-2xl lg:text-4xl m-0">
            Hello, I'm Adrian Rivaldy
          </h1>
          <h2 className="hidden md:block text-xl lg:text-2xl mt-4">
            Frontend Engineer
          </h2>
        </div>
        <div className="w-full md:w-auto">
          <div className="relative lg:mt-8 text-lg">
            <h1 className="block md:hidden text-2xl lg:text-4xl m-0 mb-4">
              Hello, I'm Adrian Rivaldy
            </h1>
            <div className="relative flex flex-row lg:flex-col gap-4">
              <div
                onClick={onClickAbout}
                className=" flex opacity-50 hover:opacity-100 items-center cursor-pointer gap-0 hover:gap-8 transition-all"
              >
                <div className="h-[0.15rem] w-14 bg-white mr-4 hidden lg:block"></div>
                <p>About</p>
              </div>
              <div
                onClick={onClickExperience}
                className=" flex opacity-50 hover:opacity-100 items-center cursor-pointer gap-0 hover:gap-8 transition-all"
              >
                <div className="h-[0.15rem] w-14 bg-white mr-4 hidden lg:block"></div>
                <p>Experience</p>
              </div>
              <div
                onClick={onClickProject}
                className=" flex opacity-50 hover:opacity-100 items-center cursor-pointer gap-0 hover:gap-8 transition-all"
              >
                <div className="h-[0.15rem] w-14 bg-white mr-4 hidden lg:block"></div>
                <p>Projects</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bottom-0 mt-4 lg:mt-8 lg:mt-0 lg:absolute">
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/adrianrivald"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 opacity-50 hover:opacity-100 transition-all focus:outline-none focus:ring-none" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/adrian-rivaldy-601406137/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 opacity-50 hover:opacity-100 transition-all focus:outline-none focus:ring-none" />
              </Link>
              <Link
                href="https://instagram.com/adrianrivald"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 opacity-50 hover:opacity-100 transition-all focus:outline-none focus:ring-none" />
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
