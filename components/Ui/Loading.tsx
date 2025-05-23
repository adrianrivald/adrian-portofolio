import React from "react";

export function Loading() {
  return (
    <div className="bg-gradient-to-r from-[#262626] to-indigo-950 h-screen flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5em"
        height="5em"
        viewBox="0 0 24 24"
      >
        <rect width="10" height="10" x="1" y="1" fill="#fff" rx="1">
          <animate
            id="svgSpinnersBlocksShuffle20"
            fill="freeze"
            attributeName="x"
            begin="0;svgSpinnersBlocksShuffle27.end"
            dur="0.2s"
            values="1;13"
          />
          <animate
            id="svgSpinnersBlocksShuffle21"
            fill="freeze"
            attributeName="y"
            begin="svgSpinnersBlocksShuffle24.end"
            dur="0.2s"
            values="1;13"
          />
          <animate
            id="svgSpinnersBlocksShuffle22"
            fill="freeze"
            attributeName="x"
            begin="svgSpinnersBlocksShuffle25.end"
            dur="0.2s"
            values="13;1"
          />
          <animate
            id="svgSpinnersBlocksShuffle23"
            fill="freeze"
            attributeName="y"
            begin="svgSpinnersBlocksShuffle26.end"
            dur="0.2s"
            values="13;1"
          />
        </rect>
        <rect width="10" height="10" x="1" y="13" fill="#fff" rx="1">
          <animate
            id="svgSpinnersBlocksShuffle24"
            fill="freeze"
            attributeName="y"
            begin="svgSpinnersBlocksShuffle20.end"
            dur="0.2s"
            values="13;1"
          />
          <animate
            id="svgSpinnersBlocksShuffle25"
            fill="freeze"
            attributeName="x"
            begin="svgSpinnersBlocksShuffle21.end"
            dur="0.2s"
            values="1;13"
          />
          <animate
            id="svgSpinnersBlocksShuffle26"
            fill="freeze"
            attributeName="y"
            begin="svgSpinnersBlocksShuffle22.end"
            dur="0.2s"
            values="1;13"
          />
          <animate
            id="svgSpinnersBlocksShuffle27"
            fill="freeze"
            attributeName="x"
            begin="svgSpinnersBlocksShuffle23.end"
            dur="0.2s"
            values="13;1"
          />
        </rect>
      </svg>
    </div>
  );
}
