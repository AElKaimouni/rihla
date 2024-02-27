"use client";

import MainLayout from "@/components/layouts";
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
        <MainLayout>
            <button className="btn" onClick={handleClick}>test notify</button>
        </MainLayout>
    );
}
