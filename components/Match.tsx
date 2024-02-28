import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    match: {
        title: string;
        country1: string;
        flag1: string;
        country2: string;
        flag2: string;
        date: string;
        stadium: string;
        city: string;
    };
    active?: boolean;
}

export default function Match({ match, active, className, ...props } : Props) {
    const date = new Date(match.date);

    return (
        <div {...props} className={`p-4 mt-4 rounded flex flex-col hover:bg-primary cursor-pointer ${active ? "bg-primary" : "bg-white"} ${className || ""}`}>
            <div className="flex mb-4">
                <h2 className="grow">{match.title}</h2>
                <p className="text-sm">{date.toLocaleDateString()} {date.getHours()}:{("0" + date.getMinutes()).slice(-2)}</p>
            </div>
            <div className="flex w-full">
                <div className="grow flex flex-col items-center">
                    <Image src={match.flag1} alt="" width={120/1.7} height={80/1.7} />
                    <h3>{match.country1}</h3>
                </div>
                <div className="p-4  flex flex-col items-center justify-center">
                    <span className="font-semibold">VS</span>
                    <span className="text-xs">{match.city}</span>
                </div>
                <div className="grow flex flex-col items-center">
                    <Image src={match.flag2} alt="" width={120/1.7} height={80/1.7} />
                    <h3 >{match.country2}</h3>
                </div>
            </div>
        </div>
    )
}