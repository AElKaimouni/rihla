"use client";

import guidesAPI, { Guide } from "@/APis/guidesAPI";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import MainLayout from "@/components/layouts";

export default function Component({ params }: { params: { guide_id: string } }) {
  const [guide, setGuide] = useState<Guide>(null);

  useEffect(() => {
    guidesAPI
      .getOneGuide(params.guide_id)
      .then((data) => setGuide(data))
      .catch((error) => console.log(error));
  }, []);

  const sendEmail = async () => {
    await guidesAPI
      .sendEmailToGuide(guide.email)
      .then(() => console.log("Email sent"))
      .catch((err) => console.log(err));
  };

  if (!guide) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto p-6 rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <Image className="rounded-full" alt="Marie" src={String(guide.avatar)} width={200} height={200} />
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold">{guide.name}</h2>
            <p className="text-md text-gray-500">{guide.email}</p>
            <p className="text-md text-gray-500">{guide.ville}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg text-gray-700">{guide.description}</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button onClick={() => sendEmail()} className="btn">
            <MdOutlineMailOutline className="w-6 h-6 mr-2" />
            Send automated Email
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
