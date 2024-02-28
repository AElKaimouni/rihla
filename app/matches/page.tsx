import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import Image from "next/image";

const macthes = [
    {
        title: "Round 16 CAF 2025",
        country1: "Morroco",
        flag1: "/images/flags/morroco.webp",
        country2: "Algeria",
        flag2: "/images/flags/algeria.webp",
        date: "Wed Feb 28 2024 14:00:00",
        stadium: "Stadium of Rabat",
        city: "Rabat"
    },
    {
        title: "Round 16 CAF 2025",
        country1: "Morroco",
        flag1: "/images/flags/morroco.webp",
        country2: "Algeria",
        flag2: "/images/flags/algeria.webp",
        date: "Wed Feb 28 2024 14:00:00",
        stadium: "Stadium of Rabat",
        city: "Rabat"
    },
    {
        title: "Round 16 CAF 2025",
        country1: "Morroco",
        flag1: "/images/flags/morroco.webp",
        country2: "Algeria",
        flag2: "/images/flags/algeria.webp",
        date: "Wed Feb 28 2024 14:00:00",
        stadium: "Stadium of Rabat",
        city: "Rabat"
    },
]

export default function Matches() {
    
    return (
        <MainLayout className="p-4">
            <Breadcrumps title="CAF 2025 Matches" description="Light your way through the world of programming." />
            {macthes.map((match, index) => {
                const date = new Date(match.date);

                return (
                    <div key={index} className="bg-white p-4 mt-4 rounded flex flex-col hover:bg-primary cursor-pointer">
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
            })}
        </MainLayout>
    )
}