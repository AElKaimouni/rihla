import { guides } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

interface Props {
  guide: (typeof guides)[0];
}

export default function Guide({ guide }: Props) {
  return (
    <Link href={`/guides/${guide.id}`}>
      <div className="bg-white py-4 px-2 mt-4 rounded flex focus:bg-slate-200">
        <div className="grow min-w-[70px]">
          <Image className="rounded-full" src={guide.avatar} alt="" width={120} height={120} />
        </div>
        <div className="px-4 flex flex-col">
          <div className="flex items-center">
            <h2 className="font-semibold grow">{guide.name}</h2>
            <p className="text-xs text-primary font-semibold mx-2">{guide.ville.replace(", Morocco", "")}</p>
          </div>
          <p className="text-xs text-gray-700">
            {guide.description.slice(0, 90)} {guide.description.length > 90 ? "..." : ""}
          </p>
        </div>
      </div>
    </Link>
  );
}
