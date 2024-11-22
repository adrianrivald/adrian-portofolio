import Image from "next/image";
import React, { ReactNode } from "react";
import { Bubble } from "./Bubble";

interface PortofolioCardProps {
  project: Project;
  onClickCard: (title: string) => void;
}

interface Project {
  image: string;
  title: string;
  content: string;
}

export function PortofolioCard({ project, onClickCard }: PortofolioCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const onHoverCard = () => {
    setIsHovered(true);
  };

  const onBlurCard = () => {
    setIsHovered(false);
  };

  return (
    <div
      onClick={() => onClickCard(project.title)}
      className="flex flex-col lg:flex-row gap-4 lg:gap-8 p-8 hover:border-neutral-500 hover:shadow-lg lg:hover:scale-[1.05] transition-all rounded-xl hover:bg-indigo-950 cursor-pointer text-neutral-300 hover:text-neutral-100"
      onMouseEnter={onHoverCard}
      onMouseLeave={onBlurCard}
    >
      <div className="flex-none">
        <Image
          src={project.image}
          width={800}
          height={400}
          className={`w-full h-[350px] lg:w-40 lg:h-28 object-cover object-top rounded-md ${
            isHovered ? "border border-[#8BBCCC]" : ""
          }`}
          alt={project?.title}
        />
        {/* <div className="w-40 h-32 bg-neutral-400" /> */}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">{project?.title}</h2>
        <p>{project?.content}</p>
      </div>
    </div>
  );
}
