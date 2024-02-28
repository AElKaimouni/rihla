"use client";

import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

// export const metadata = {
//   title: "Journeys",
//   description: "Your latest journeys",
// };

const journyes = [
  {
    id: "1",
    title: "Custom title made by the user",
    description:
      "lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "February 2022",
  },
  {
    id: "2",
    title: "Application UI code in Tailwind CSS",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.",
    date: "March 2022",
  },
  {
    id: "3",
    title: "Application UI code in Tailwind CSS",
    description: "lorem ipsum dolor sit amet , consectetur ut labore et dolore magna aliqua.",
    date: "December 2023",
  },
];

export default function TrajectsPage() {
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
            <ol className="relative border-s border-gray-700">
                {journyes.map((item) => (
                    <Link href={`/trajects/${item.id}`} key={item.id}>
                        <li className="mb-6 ms-4">
                            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 borde border-gray-900 bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.date}</time>
                            <div className="bg-white mt-2 px-3 py-2 rounded-xl">
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                <p className="my-2 px-2 text-base font-normal text-gray-700">{item.description}</p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ol>
        </div>
    </MainLayout>
  )
}
