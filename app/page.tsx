"use client";

import MainLayout from "@/components/layouts";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";


export default function Home() {
    return (
        <MainLayout className="p-4">
            <div className="p-4 rounded-xl bg-white">
                <div className="flex">
                    <div>
                        <h3>Hi, george!</h3>
                        <h1 className="text-2xl mt-2">Discover Diffrent World</h1>
                    </div>
                    <div>
                        <Image src="/images/avatar.svg" alt="" width={100} height={100} />
                    </div>
                </div>
                <div className="relative w-full mt-4">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <FaSearch className="text-gray-400" />
                    </div>
                    <input className="input" type="text" placeholder="Search destiations here" />
                </div>
            </div>
            <h1 className="text-xl mt-2">Recomended Locations</h1>
            <div className="flex flex-wrap">
                <div className="basis-full p-2 m-2 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url('/images/locations/tanger.webp')`, height: "150px" }}>
                    <div className="bg-black/75 inline-block px-4 py-1 text-xs text-gray-100 rounded-full">
                        Tanger
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="basis-full p-2 m-2 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url('/images/locations/Casablanca.jpg')`, height: "200px" }}>
                        <div className="bg-black/75 inline-block px-4 py-1 text-xs text-gray-100 rounded-full">
                            Casablanca
                        </div>
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="basis-full p-2 m-2 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url('/images/locations/Marakech.jpg')`, height: "200px" }}>
                        <div className="bg-black/75 inline-block px-4 py-1 text-xs text-gray-100 rounded-full">
                            Marrakech
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-xl mt-4">Upcoming Matches CAF 2025</h1>
            <div className="p-2 bg-white rounded mt-2">
                matches table
            </div>
            <h1 className="text-xl mt-4">Our Best Tour Guides</h1>
            <div className="p-2 bg-white rounded mt-2">
                Tour Guides table
            </div>
        </MainLayout>
    );
}
