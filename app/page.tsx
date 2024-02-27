"use client";

import { useAppContext } from "@/states";
import Image from "next/image";

export default function Home() {
    const { controllers: { notice } } = useAppContext();
    const handleClick = () => {
        notice.add({
            message: "notice is running",
            type: "success"
        })
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button className="btn" onClick={handleClick}>test notify</button>
        </main>
    );
}
