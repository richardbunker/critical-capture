"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const PageTitle = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const formatUri = (uri: string): string => {
    const title = uri.slice(1).split("-").join(" ");
    return title;
  };
  useEffect(() => {
    if (pathname === "/") {
      setTitle("recent");
    } else {
      setTitle(formatUri(pathname));
    }
  }, [pathname]);
  return (
    <h3 className="w-full text-left md:text-xl text-base font-brand text-white tracking-wide">
      <span className="capitalize">{title}</span> critiques...
    </h3>
  );
};
