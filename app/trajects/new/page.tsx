"use client";

import StepsPanel, { useStepsPanel } from "@/components/StepsPanel";
import FormLayout from "@/components/layouts/form";
import Image from "next/image";
import { useMemo, useState } from "react";

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


enum Steps {
    OBJECTIVE,
    INFO
}

const objectives = [
    {
        title: "Football",
        icon: "/images/objectives/football.png"
    },
    {
        title: "Football",
        icon: "/images/objectives/football.png"
    },
    {
        title: "Football",
        icon: "/images/objectives/football.png"
    },
    {
        title: "Football",
        icon: "/images/objectives/football.png"
    }
]

const cities = [
    "Tanger",
    "Rabat",
    "Casablanca"
]

export default function NewTraject() {
    const [objective, setObjective] = useState<number>();
    const [city, setCity] = useState<string>();
    const [budget, setBudget] = useState<number>();
    const [days, setDays] = useState<number>(1);
    const [adults, setAdults] = useState<number>(0);
    const [childs, setChilds] = useState<number>(0);

    const panels = {
        [Steps.OBJECTIVE]: (<>
            <h1 className="text-center text-2xl p-4 px-8 text-gray-700">Choose Objective For Your Trip</h1>
            <ul className="flex flex-wrap">
                {objectives.map((obj, index) => (
                    <li onClick={() => setObjective(index)} className="p-4 basis-1/2 cursor-pointer" key={index}>
                        <div className={`p-4 flex flex-col items-center rounded-full ${objective === index ? "bg-primary text-gray-100" : "bg-white"} hover:bg-primary hover:text-gray-100`}>
                            <Image src={obj.icon} alt={obj.title} width={75} height={75} />
                            <h2 className="mt-2 text-lg">{obj.title}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </>),
        [Steps.INFO]: (<>
            <h1 className="text-center text-2xl p-4 px-4 text-gray-700">Personal Informations</h1>
            <div className="p-2 m-2 bg-white rounded">
                <div  className="p-2 m-2 bg-white">
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

    const stepsPanelCtl = useStepsPanel(Object.keys(panels));
    const validStep = useMemo(() => {
        switch(parseInt(stepsPanelCtl.activePanel as string)) {
            case Steps.OBJECTIVE:  return typeof objective === "number";
        }

        return true;
    }, [objective, stepsPanelCtl.activePanel]);
    const validForm = useMemo(() => {
        return Boolean(city);
    }, [city]);
    const [loading, loader] = useLoader();

    const submit = () => {
        loader.start();
    }

    return (
        <FormLayout className="flex flex-col h-screen">
            <div className="grow overflow-auto p-2 flex justify-center flex-col">
                {!loading && <StepsPanel ctl={stepsPanelCtl} panels={panels} />}
                {loading && <Loader />}
            </div>
            {!loading && <div className="flex px-8 py-4">
                <div className="grow">
                    <button disabled={!stepsPanelCtl.canPrev} onClick={stepsPanelCtl.prev} className="btn">
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