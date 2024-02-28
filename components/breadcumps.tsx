"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

interface Props {
  title: string;
  description?: string;
  children?: ReactNode;
  mode?: "main" | "form";
}

export default function Breadcrumps({ title, children, description, mode }: Props) {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center">
            {mode === "form" && (
                <div className="flex items-center justify-between fixed top-0 left-0 w-full p-4 bg-background shadow">
                    <div onClick={router.back}><IoIosArrowRoundBack size={40} /></div>
                    <h1 className="text-2xl font-bold text-gray-900">Journey Details</h1>
                </div>
            )}
            {(!mode || mode === "main") && (<>
                <div className="grow">
                    <h1 className="text-xl">{title}</h1>
                    <p className="text-gray-500 p-1 text-sm">{description}</p>
                </div>
                <div>{children}</div>
            </>)}
        </div>
    );
}
