import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { allProjects } from "../../constants/project";
import { FaArrowLeft, FaSortDown, FaSortUp } from "react-icons/fa";
import { Bubble } from "../Ui/Bubble";
import { useEffect } from "react";

export function Projects() {
  const [projects, setProjects] = React.useState(allProjects);
  const [sortMode, setSortMode] = React.useState("");

  const onSort = (mode: string) => {
    setSortMode(mode);
    if (mode === "name") {
      const newArr = [...projects].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      if (JSON.stringify(projects) == JSON.stringify(newArr)) {
        const descArr = [...projects].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        setProjects(descArr);
      } else {
        setProjects(newArr);
      }
    }
    if (mode === "stacks") {
      const newArr = [...projects].sort(
        (a, b) => b.bubbles.length - a.bubbles.length
      );
      if (JSON.stringify(projects) == JSON.stringify(newArr)) {
        const descArr = [...projects].sort(
          (a, b) => a.bubbles.length - b.bubbles.length
        );
        setProjects(descArr);
      } else {
        setProjects(newArr);
      }
    }
    if (mode === "year") {
      const newArr = [...projects].sort(
        (a, b) => parseInt(b.year) - parseInt(a.year)
      );
      if (JSON.stringify(projects) == JSON.stringify(newArr)) {
        const descArr = [...projects].sort(
          (a, b) => parseInt(a.year) - parseInt(b.year)
        );
        setProjects(descArr);
      } else {
        setProjects(newArr);
      }
    }
    if (mode === "link") {
      const newArr = [...projects].sort((a, b) => b.link.localeCompare(a.link));
      if (JSON.stringify(projects) == JSON.stringify(newArr)) {
        const descArr = [...projects].sort((a, b) =>
          a.link.localeCompare(b.link)
        );
        setProjects(descArr);
      } else {
        setProjects(newArr);
      }
    }
  };

  // NOTES: Condition if want to reset sort
  // if (sortMode === mode) {
  //   setProjects(allProjects);
  //   setSortMode("");
  // }

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
                      <div className="flex flex-col gap-2">
                        <FaSortUp className="-mb-3" />
                        <FaSortDown className="-mt-3" />
                      </div>
                    </div>
                  </th>
                  <th className="px-4">
                    <div
                      onClick={() => onSort("stacks")}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      Tech Stacks{" "}
                      <div className="flex flex-col gap-2">
                        <FaSortUp className="-mb-3" />
                        <FaSortDown className="-mt-3" />
                      </div>
                    </div>
                  </th>
                  <th className="px-4">
                    <div
                      onClick={() => onSort("year")}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      Year{" "}
                      <div className="flex flex-col gap-2">
                        <FaSortUp className="-mb-3" />
                        <FaSortDown className="-mt-3" />
                      </div>
                    </div>
                  </th>
                  <th className="px-4">
                    <div
                      onClick={() => onSort("link")}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      Link{" "}
                      <div className="flex flex-col gap-2">
                        <FaSortUp className="-mb-3" />
                        <FaSortDown className="-mt-3" />
                      </div>
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
