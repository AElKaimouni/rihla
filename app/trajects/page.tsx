"use client";

import trajectsAPi from "@/APis/trajectsAPi";
import Loader from "@/components/Loader";
import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import { useLoader } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { journyes } from "@/utils/data";

// export const metadata = {
//   title: "Journeys",
//   description: "Your latest journeys",
// };


export default function TrajectsPage() {
  const [jourenys, setJourneys] = useState<typeof journyes>();

  useEffect(() => {
    trajectsAPi.all().then(res => {
        res.reverse();
        setJourneys(res);
    });
  }, []);

  return (
    <MainLayout className="p-4">
        <Breadcrumps title="Journeys" description="Light your way with us." >
            <Link href="/trajects/new">
                <button className="btn btn-small whitespace-nowrap">
                    <IoIosAdd size={24} /> New Journey
                </button>
            </Link>
        </Breadcrumps>
        <div className="border border-gray-200 my-5"></div>
        <div className="flex flex-col gap-4">
            {jourenys && <ol className="relative border-s border-gray-700">
                {jourenys.map((item) => (
                    <Link href={`/trajects/${item.id}`} key={item.id}>
                        <li className="mb-6 ms-4">
                            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 borde border-gray-900 bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">{new Date(item.datetime).toLocaleString().split(",")[0]}</time>
                            <div className="bg-white mt-2 px-3 py-2 rounded-xl hover:bg-primary">
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                <p className="my-2 px-2 text-base font-normal text-gray-800">{item.description.slice(0, 120)} {item.description.length > 120 ? "..." : ""}</p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ol>}
            {!jourenys && <Loader />}
        </div>
    </MainLayout>
  );
}
