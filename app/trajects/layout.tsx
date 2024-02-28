"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { RiGuideFill } from "react-icons/ri";

const tabs = [
  {
    title: "Home",
    link: "/",
    Icon: FaHome,
  },
  {
    title: "Matches",
    link: "/matches",
    Icon: IoMdFootball,
  },
  {
    title: "Trajects",
    link: "/trajects",
    Icon: FaWalking,
  },
  {
    title: "Guides",
    link: "/guides",
    Icon: RiGuideFill,
  },
];

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}

export default function MainLayout({ children, className, ...props }: Props) {
  const pathname = usePathname();

  return (
    <main className={`flex flex-col h-[100dvh]`}>
      <div {...props} className={`grow bg-background ${className || ""}`}>
        {children}
      </div>
      <div className="flex">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            href={tab.link}
            className={`p-4 basis-1/4 flex flex-col items-center border ${
              pathname === tab.link ? "bg-primary text-gray-100" : "text-gray-600"
            }`}
          >
            <tab.Icon />
            <h5>{tab.title}</h5>
          </Link>
        ))}
      </div>
    </main>
  );
}
