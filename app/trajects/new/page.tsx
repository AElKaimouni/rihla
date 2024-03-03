"use client";

import StepsPanel, { useStepsPanel } from "@/components/StepsPanel";
import FormLayout from "@/components/layouts/form";
import Image from "next/image";
import { Suspense, useEffect, useMemo, useState } from "react";

import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";
import { FaChild } from "react-icons/fa6";
import { useLoader } from "@/utils";
import Loader from "@/components/Loader";
import { cities, macthes } from "@/utils/data";
import Match from "@/components/Match";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { DotLottiePlayer } from "@dotlottie/react-player";
import trajectsAPi from "@/APis/trajectsAPi";
import matchAPI from "@/APis/matchAPI";


enum Steps {
    OBJECTIVE,
    MATCH,
    INFO
}

const objectives = [
    {
        title: "CAF 2025",
        icon: "/images/objectives/football.png"
    },
    {
        title: "Visit Cities",
        icon: "/images/objectives/city.png"
    },
    {
        title: "Sahra Desert",
        icon: "/images/objectives/desert.png",
        scale: 1.5
    },
    {
        title: "Food",
        icon: "/images/objectives/food.png"
    }
]

function NewTrajectPage() {
    const params = useSearchParams();
    const stepParam = params.get("step");
    const cityParam = params.get("city");
    const matchParam = params.get("match");
    const objParam = params.get("obj");

    const router = useRouter();
    const [objective, setObjective] = useState<number>(objParam ? parseInt(objParam as string) : undefined);
    const [city, setCity] = useState<string>();
    const [targetCity, setTargetCity] = useState<string>(cityParam as string);
    const [budget, setBudget] = useState<number>();
    const [days, setDays] = useState<number>(1);
    const [adults, setAdults] = useState<number>(0);
    const [childs, setChilds] = useState<number>(0);
    const [activeMatch, setMatch] = useState<number>(matchParam ? parseInt(matchParam as string) : undefined);
    const [allMatches, setMatches] = useState<typeof macthes>([]);

    useEffect(() => {
        matchAPI.getMatches().then(res =>  setMatches(res));
    }, [])

    const panels = useMemo(() => {
        return {
            [Steps.OBJECTIVE]: (<>
                <h1 className="text-center text-2xl p-4 px-8 text-gray-700">Choose Objective For Your Trip</h1>
                <ul className="flex flex-wrap">
                    {objectives.map((obj, index) => (
                        <li onClick={() => setObjective(index)} className="p-4 basis-1/2 cursor-pointer" key={index}>
                            <div className={`p-4 flex flex-col items-center rounded-full ${objective === index ? "bg-primary text-gray-100" : "bg-white"} hover:bg-primary hover:text-gray-100`}>
                                <Image className="relative" src={obj.icon} alt={obj.title} width={75} height={75} style={{ transform: `scale(${obj.scale || 1})` }} />
                                <h2 className="mt-2 text-lg">{obj.title}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </>),
            ...(objective === 0 ? {
                [Steps.MATCH] : (<>
                    <h1 className="text-center text-2xl p-4 px-8 text-gray-700">Choose CAF 2025 Match For Your Trip</h1>
                    <div className="mx-2">
                        {allMatches.map((match, index) => <Match onClick={() => setMatch(match.id)} active={activeMatch === match.id} match={match} key={index} />)}
                    </div>
                </>)
            } : {}),
            [Steps.INFO]: (<>
                <h1 className="text-center text-2xl p-4 px-4 text-gray-700">Personal Informations</h1>
                <div className="p-2 m-2 bg-white rounded">
                    <div  className="p-2 m-2 bg-white">
                        {objective === 1 && (
                            <div className="mb-4">
                                <label className="mb-2 block">Target City</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <FaLocationDot className="text-gray-400" />
                                    </div>
                                    <select value={targetCity} onChange={e => setTargetCity(e.target.value)} className="input">
                                        <option disabled selected>Select City</option>
                                        {cities.map((city, index) => (
                                            <option key={index}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="mb-2 block">Depart City</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <FaLocationDot className="text-gray-400" />
                                </div>
                                <select value={city} onChange={e => setCity(e.target.value)} className="input">
                                    <option disabled selected>Select City</option>
                                    {cities.map((city, index) => (
                                        <option key={index}>{city}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block">Budget</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <FaMoneyBillWave className="text-gray-400" />
                                </div>
                                <input value={budget} onChange={e => setBudget(parseInt(e.target.value))} className="input" type="number" placeholder="Budget" />
                                <div className="absolute right-0 top-0 h-full bg-white rounded-full py-2 px-4 border">
                                    MAD
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex">
                            <div className="basis-1/3 text-center">
                                <label className="mb-2 block">Days</label>
                                <div className="">
                                    <button onClick={() => setDays(d => Math.max(d - 1, 0))} className="btn-icon">
                                        <FaMinus size={8} />
                                    </button>
                                    <span className="m-2">
                                        {days}
                                    </span>
                                    <button onClick={() => setDays(d => d + 1)} className="btn-icon">
                                        <IoMdAdd size={8}/>
                                    </button>
                                </div>
                            </div>
                            <div className="basis-1/3 text-center">
                                <label className="mb-2 flex justify-center">Adults <MdEmojiPeople size={16} className="mt-[3px]" /></label>
                                <div className="flex justify-center">
                                    <button onClick={() => setAdults(d => Math.max(d - 1, 0))} className="btn-icon">
                                        <FaMinus size={8} />
                                    </button>
                                    <span className="mx-2 flex">
                                        {adults}
                                    </span>
                                    <button onClick={() => setAdults(d => d + 1)} className="btn-icon">
                                        <IoMdAdd size={8}/>
                                    </button>
                                </div>
                            </div>
                            <div className="basis-1/3 text-center">
                                <label className="mb-2 flex justify-center">Childs <FaChild size={12} className="mt-[6px] ml-[2px]" /></label>
                                <div className="flex justify-center">
                                    <button onClick={() => setChilds(d => Math.max(d - 1, 0))} className="btn-icon">
                                        <FaMinus size={8} />
                                    </button>
                                    <span className="mx-2 flex">
                                        {childs}
                                    </span>
                                    <button onClick={() => setChilds(d => d + 1)} className="btn-icon">
                                        <IoMdAdd size={8}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </>)
        }
    }, [objective, activeMatch, days, adults, childs])
 
    const panelsKeys = useMemo(() => Object.keys(panels), [panels])
    const stepsPanelCtl = useStepsPanel(panelsKeys, stepParam ? parseInt(stepParam as string) : 0);

    const validStep = useMemo(() => {
        switch(parseInt(stepsPanelCtl.activePanel as string)) {
            case Steps.OBJECTIVE:  return typeof objective === "number";
            case Steps.MATCH: return typeof activeMatch === "number";
        }

        return true;
    }, [objective, stepsPanelCtl.activePanel, activeMatch]);

    const validForm = useMemo(() => {
        return Boolean(city);
    }, [city]);
    const [loading, loader] = useLoader(true);

    const submit = () => loader.process(async () => {
        let obj = "Cultural", city = "";

        if(targetCity) {
            obj = "visit " + targetCity + " city";
        }
        if(activeMatch)  {
            const match = allMatches.find(m => m.id === activeMatch);

            city = match.city;
            // obj = "watch football match in " + match.city + " city of " + match.country1 + " vs " + match.country2;
            obj = "football";
        }

        const res = await trajectsAPi.new({
            budget,
            city: targetCity,
            number: adults + childs + 1,
            objectif: obj,
            time: days + " days",
            depart: city
        });

        router.push("/trajects/" + res.id);
    });

    return (
        <FormLayout className="flex flex-col h-screen">
            <div className="grow overflow-auto p-2 flex justify-center flex-col">
                {!loading && <StepsPanel ctl={stepsPanelCtl} panels={panels} />}
                {loading && <>
                    <div className="flex flex-col items-center justify-center">
                        <DotLottiePlayer className="min-h-full" src="/lotties/travel_animation.lottie" autoplay loop />
                        <p className="text-center text-gray-700">Please wait while we generating your journey, this procces wont long more that 1 minute.</p>
                    </div>
                </>}
            </div>
            {!loading && <div className="flex px-8 py-4">
                <div className="grow">
                    <button onClick={stepsPanelCtl.canPrev ? stepsPanelCtl.prev : router.back} className="btn">
                        <GrFormPreviousLink size={24}/>
                    </button>
                </div>
                {stepsPanelCtl.canNext && <button disabled={!validStep} onClick={stepsPanelCtl.next} className="btn">
                    <GrFormNextLink size={24} />
                </button>}
                {!stepsPanelCtl.canNext && <button onClick={submit} disabled={!validForm} className="btn">
                    Finish
                </button>}
            </div>}
        </FormLayout>
    )
}

export default function NewTraject() {
    return (
        <Suspense>
            <NewTrajectPage />
        </Suspense>
    )
}