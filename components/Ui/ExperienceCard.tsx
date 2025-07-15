import React, { ReactNode } from "react";
import { Bubble } from "./Bubble";

interface CardProps {
  company: Company;
  onClickCard: (title: string) => void;
}

interface Company {
  dateRange: string;
  title: string;
  content: string;
  bubbles: string[];
  type: string;
}

export function ExperienceCard({ company, onClickCard }: CardProps) {
  return (
    <div
      key={company.title}
      onClick={() => onClickCard(company.title)}
      className="flex flex-col xl:flex-row gap-4 lg:gap-8 p-8 hover:border-neutral-500 hover:shadow-lg lg:hover:scale-[1.05] transition-all rounded-xl hover:bg-indigo-950 text-neutral-300 hover:text-neutral-100"
    >
      <div className="flex-none flex flex-col gap-2">
        <span>{company?.dateRange}</span>
        <span>{company?.type}</span>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">{company?.title}</h2>
        <p>{company?.content}</p>

        <div className="flex items-center gap-2 flex-wrap">
          {company?.bubbles?.map((bubble) => (
            <Bubble label={bubble} />
          ))}
        </div>
      </div>
    </div>
  );
}
