"use client";

import Guide from "@/components/Guide";
import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import guidesAPI from "@/APis/guidesAPI";
import { useEffect, useState } from "react";

export default function Guides() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    guidesAPI
      .getGuides()
      .then((data) => setGuides(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <MainLayout className="p-4">
      <Breadcrumps title="Tour Guides" description="In this section you'll find all the guides that suits your needs" />
      {guides.map((guide, index) => (
        <Guide guide={guide} key={index} />
      ))}
    </MainLayout>
  );
}
