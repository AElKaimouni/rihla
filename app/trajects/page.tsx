"use client";

import { api } from "@/APis";
import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";

// export const metadata = {
//   title: "Journeys",
//   description: "Your latest journeys",
// };

type Journey = {
  id: string;
  date: string;
  budget: number;
  ville: string;
  time: string;
  person_number: number;
  title: string;
  description: string;
  short_description: string;
};

function getRandomDateIn2024() {
  // Define the start and end dates for 2024
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  // Calculate a random time between the start and end dates
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());

  // Create a new Date object with the random time
  const randomDate = new Date(randomTime);

  return randomDate;
}
export default function TrajectsPage() {
  const [journyes, setJournyes] = useState<Journey[]>([]);

  const getTrajects = async () => {
    api
      .get("/Trajects/")
      .then((res) => {
        const data: Journey[] = res.data;
        data.forEach((item: Journey) => {
          item.date = getRandomDateIn2024().toDateString();
        });
        data.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setJournyes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTrajects();
  }, []);
  return (
    <MainLayout className="p-4">
      <Breadcrumps title="Journeys" description="Light your way with us.">
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
                  <p className="my-2 px-2 text-base font-normal text-gray-700">
                    {item.description.length > 100 ? item.description.substring(0, 90) + "..." : item.description}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ol>
      </div>
    </MainLayout>
  );
}
