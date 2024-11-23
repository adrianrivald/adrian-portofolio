import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { allProjects } from "../../constants/project";
import { FaArrowLeft, FaSortUp } from "react-icons/fa";
import { Bubble } from "../Ui/Bubble";
import { useEffect } from "react";

export function Projects() {
  const [projects, setProjects] = React.useState(allProjects);
  const [sortMode, setSortMode] = React.useState("");

  const onSort = (mode: string) => {
    if (mode === "name") {
      setSortMode(mode);
      const newArr = [...projects].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setProjects(newArr);
    }
    if (mode === "stacks") {
      setSortMode(mode);
      const newArr = [...projects].sort(
        (a, b) => b.bubbles.length - a.bubbles.length
      );
      setProjects(newArr);
    }
    if (mode === "year") {
      setSortMode(mode);
      const newArr = [...projects].sort(
        (a, b) => parseInt(b.year) - parseInt(a.year)
      );
      setProjects(newArr);
    }
    if (mode === "link") {
      setSortMode(mode);
      const newArr = [...projects].sort((a, b) => b.link.localeCompare(a.link));
      setProjects(newArr);
    }
    if (sortMode === mode) {
      setProjects(allProjects);
      setSortMode("");
    }
  };

  return (
    <section className="w-full">
      <div className="pt-12 lg:mt-0 lg:p-6 text-white">
        <Link href="/" className="flex items-center gap-2 px-8">
          <FaArrowLeft />
          <h2>Back to Home</h2>
        </Link>
        <h1 className="text-4xl mt-8 px-8">All Projects</h1>
        <div className="mt-4 border-b border-slate-600 pb-2">
          <div className="mt-4 overflow-auto">
            <table className="p-8 border-separate w-full">
              <thead className="sticky top-0 text-left h-16 ">
                <tr className="">
                  <th className="px-4">
                    <div
                      onClick={() => onSort("name")}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      Project{" "}
                      <FaSortUp
                        className={`transition-all ${
                          sortMode === "name" ? "-scale-y-100" : ""
                        }`}
                      />
                    </div>
                  </th>
                  <th className="px-4">
                    <div
                      onClick={() => onSort("stacks")}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      Tech stacks{" "}
                      <FaSortUp
                        className={`transition-all ${
                          sortMode === "stacks" ? "-scale-y-100" : ""
                        }`}
                      />
                    </div>
                  </th>
                  <th className="px-4">
                    <div
                      onClick={() => onSort("year")}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      Year{" "}
                      <FaSortUp
                        className={`transition-all ${
                          sortMode === "year" ? "-scale-y-100" : ""
                        }`}
                      />
                    </div>
                  </th>
                  <th className="px-4">
                    <div
                      onClick={() => onSort("link")}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      Link{" "}
                      <FaSortUp
                        className={`transition-all ${
                          sortMode === "link" ? "-scale-y-100" : ""
                        }`}
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                {projects?.map((project) => (
                  <tr>
                    <td className="p-4 text-slate-100">{project.title}</td>
                    <td className="p-4 flex flex-wrap gap-2">
                      {project.bubbles?.map((bubble) => (
                        <Bubble label={bubble} />
                      ))}
                    </td>
                    <td className="p-4">{project.year}</td>
                    <td className="p-4">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-100 flex items-center gap-2"
                      >
                        {project.link !== "" ? (
                          <>
                            {project.link.split("https://")[1]}{" "}
                            <BsArrowUpRight />
                          </>
                        ) : (
                          "-"
                        )}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
