import Link from "next/link";
import React from "react";
import { companies } from "../../constants/companies";
import { ExperienceCard } from "../Ui/ExperienceCard";
import { PortofolioCard } from "../Ui/PortofolioCard";
import { BsArrowUpRight } from "react-icons/bs";
import { projects } from "../../constants/project";

interface ContentProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  expRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  onClickContent: (title: string) => void;
}

export function Content({
  aboutRef,
  expRef,
  projectRef,
  onClickContent,
}: ContentProps) {
  const onClickCard = (title: string) => {
    onClickContent(title);
  };

  return (
    <section className="mt-12 lg:mt-0 lg:p-6 text-white">
      <div ref={aboutRef} className="border-b border-slate-600 pb-2">
        <p className="text-lg leading-8 pt-0 p-8">
          I have been working as a Front-end Developer for +5 years,
          specializing in Javascript ES6. My scope of expertise revolves around
          Stack technology such as React, Redux, and Next.js, which have been
          augmenting my proficiency in developing dynamic, scalable, and
          user-friendly web applications using modern JavaScript frameworks and
          libraries. I am also passionate about staying up to date with the
          latest trends and advancements in technology.
        </p>
      </div>
      <div
        ref={expRef}
        className="flex flex-col gap-8 mt-12 text-white border-b border-slate-600 pb-10"
      >
        <h2 className="lg:text-2xl leading-8 px-8">Work Experiences</h2>
        {companies?.map((company) => (
          <ExperienceCard company={company} onClickCard={onClickCard} />
        ))}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="mt-4 text-xl flex gap-2 items-center text-neutral-300 hover:text-neutral-100 px-8"
        >
          View my resume <BsArrowUpRight />
        </Link>
      </div>

      <div
        ref={projectRef}
        className="flex flex-col gap-8 mt-12 text-white border-b border-slate-600 pb-10"
      >
        <h2 className="lg:text-2xl leading-8 px-8">Projects Portofolio</h2>
        {projects?.map((project) => (
          <PortofolioCard project={project} onClickCard={onClickCard} />
        ))}
        <div
          //   href="/resume.pdf"
          //   target="_blank"
          className="mt-4 text-xl flex gap-2 items-center text-neutral-300 hover:text-neutral-100 px-8"
        >
          and more...
        </div>
      </div>

      <div className="mt-8">
        Built with Next.js, Tailwind CSS, coded in Visual Code Studio. <br />{" "}
        Design inspired by :{" "}
        <Link
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          brittanychiang.com
        </Link>
      </div>
    </section>
  );
}
