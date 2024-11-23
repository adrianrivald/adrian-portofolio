import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  isFlex?: boolean;
}

export function Layout({ children, isFlex }: LayoutProps) {
  return (
    <main
      className={`max-w-[80rem] lg:px-8 mx-auto lg:mt-8 min-h-screen ${
        isFlex ? "lg:flex" : ""
      }`}
    >
      {children}
    </main>
  );
}
