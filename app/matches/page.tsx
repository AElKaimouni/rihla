"use client";

import matchAPI from "@/APis/matchAPI";
import Match from "@/components/Match";
import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import { useEffect, useState } from "react";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const getMatches = async () => {
    matchAPI
      .getMatches()
      .then((data) => setMatches(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getMatches();
  }, []);
  return (
    <MainLayout className="p-4">
      <Breadcrumps title="CAF 2025 Matches" description="Light your way through the world of programming." />
      {matches.map((match, index) => (
        <Match match={match} key={index} />
      ))}
    </MainLayout>
  );
}
