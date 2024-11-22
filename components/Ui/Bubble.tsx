import React from "react";

export function Bubble({ label }: { label: string }) {
  return (
    <button className="rounded-full bg-[#8BBCCC] text-neutral-400 py-2 px-4">
      {label}
    </button>
  );
}