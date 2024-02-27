"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { RiGuideFill } from "react-icons/ri";


interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}

export default function FormLayout({ children, className, ...props } : Props) {
    const pathname = usePathname();
    

    return (
        <main  className={`flex flex-col h-screen `}>
            <div {...props} className={`grow bg-background ${className || ""}`}>
                {children}
            </div>
        </main>
    );
}