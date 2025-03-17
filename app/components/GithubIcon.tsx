"use client";

import { Github } from "lucide-react";
import Link from "next/link";

const GithubIcon: React.FC = () => {
  return (
    <Link
      href="https://github.com/aeriallistique"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="inline-flex ml-2 "
    >
      <Github className=" w-7 h-7 hover:opacity-70 transition bg-white text-black rounded-full text-center" />
    </Link>
  );
};

export default GithubIcon;
