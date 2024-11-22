import Link from "next/link";
import React from "react";
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

  return (
    <div className="lg:sticky block w-auto overflow-hidden text-white inset-x-0 lg:p-6 lg:top-20 lg:min-h-[20%]">
      <h1 className="text-2xl lg:text-4xl m-0">Hello, I'm Adrian Rivaldy</h1>
      <h2 className="text-xl lg:text-2xl mt-4">Frontend Engineer</h2>
      <div className="relative mt-8 text-lg">
        <div className="relative flex flex-col gap-4">
          <div
            onClick={onClickAbout}
            className=" flex opacity-50 hover:opacity-100 items-center cursor-pointer gap-0 hover:gap-8 transition-all"
          >
            <div className="h-[0.15rem] w-14 bg-white mr-4"></div>
            <p>About</p>
          </div>
          <div
            onClick={onClickExperience}
            className=" flex opacity-50 hover:opacity-100 items-center cursor-pointer gap-0 hover:gap-8 transition-all"
          >
            <div className="h-[0.15rem] w-14 bg-white mr-4"></div>
            <p>Experience</p>
          </div>
          <div
            onClick={onClickProject}
            className=" flex opacity-50 hover:opacity-100 items-center cursor-pointer gap-0 hover:gap-8 transition-all"
          >
            <div className="h-[0.15rem] w-14 bg-white mr-4"></div>
            <p>Projects</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 bottom-0 mt-8 lg:mt-0 lg:absolute border-b border-neutral-300 lg:border-0 pb-12 lg:pb-0">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/adrianrivald"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 opacity-50 hover:opacity-100 transition-all" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/adrian-rivaldy-601406137/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 opacity-50 hover:opacity-100 transition-all" />
          </Link>
          <Link
            href="https://instagram.com/adrianrivald"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 opacity-50 hover:opacity-100 transition-all" />
          </Link>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
