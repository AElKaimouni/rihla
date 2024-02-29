"use client";

import MainLayout from "@/components/layouts";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Match from "@/components/Match";
import Guide from "@/components/Guide";
import { useRouter } from "next/navigation";
import matchAPI from "@/APis/matchAPI";
import { useEffect, useState } from "react";
import guidesAPI from "@/APis/guidesAPI";
import { useAppContext } from "@/states";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { user } = useAppContext();

  const [matches, setMatches] = useState([]);
  const getMatches = async () => {
    matchAPI
      .getMatches()
      .then((data) => setMatches(data))
      .catch((error) => console.log(error));
  };

  const [guides, setGuides] = useState([]);
  const getGuides = async () => {
    guidesAPI
      .getGuides()
      .then((data) => setGuides(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMatches();
    getGuides();
  }, []);

  return (
    <MainLayout className="p-4">
      <div className="p-4 rounded-xl bg-white">
        <div className="flex">
          <div>
            <h3>Hi, {user?.name}!</h3>
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
        <Link href="/trajects">
          <button className="btn w-full my-2 text-sm">New Journey</button>
        </Link>
      </div>
      <h1 className="text-xl mt-2">Recomended Locations</h1>
      <div className="flex flex-wrap">
        <div
          onClick={() => router.push("/trajects/new?step=1&obj=1&city=Tanger")}
          className="basis-full p-2 m-2 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url('/images/locations/tanger.webp')`, height: "150px" }}
        >
          <div className="bg-black/75 inline-block px-4 py-1 text-xs text-gray-100 rounded-full">Tanger</div>
        </div>
        <div className="basis-1/2">
          <div
            onClick={() => router.push("/trajects/new?step=1&obj=1&city=Casablanca")}
            className="basis-full p-2 m-2 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url('/images/locations/Casablanca.jpg')`, height: "200px" }}
          >
            <div className="bg-black/75 inline-block px-4 py-1 text-xs text-gray-100 rounded-full">Casablanca</div>
          </div>
        </div>
        <div className="basis-1/2">
          <div
            onClick={() => router.push("/trajects/new?step=1&obj=1&city=Marrakech")}
            className="basis-full p-2 m-2 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url('/images/locations/Marakech.jpg')`, height: "200px" }}
          >
            <div className="bg-black/75 inline-block px-4 py-1 text-xs text-gray-100 rounded-full">Marrakech</div>
          </div>
        </div>
      </div>
      <h1 className="text-xl mt-4">Upcoming Matches CAF 2025</h1>
      {matches.slice(0, 3).map((matche, index) => (
        <Match match={matche} key={index} />
      ))}
      <h1 className="text-xl mt-4">Our Best Tour Guides</h1>
      {guides.slice(0, 3).map((guide, index) => (
        <Guide guide={guide} key={index} />
      ))}
    </MainLayout>
  );
}
