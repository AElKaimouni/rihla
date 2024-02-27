"use client";

import StepsPanel, { useStepsPanel } from "@/components/StepsPanel";
import FormLayout from "@/components/layouts/form";
import Image from "next/image";
import { useMemo, useState } from "react";

import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

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

export default function NewTraject() {
    const [objective, setObjective] = useState<number>();

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
            <div className="p-2 m-2 bg-white rounded">
                <h1 className="text-center text-2xl p-4 px-4 text-gray-700">Fill Personal Informations</h1>
                <form className="p-2 m-2 bg-white">
                    <div>
                        <label>Depart City</label>
                        <input className="input" placeholder="" />
                    </div>
                </form>
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

    return (
        <FormLayout className="flex flex-col h-screen">
            <div className="grow overflow-auto p-2">
                <StepsPanel ctl={stepsPanelCtl} panels={panels} />
            </div>
            <div className="flex px-8 py-4">
                <div className="grow">
                    <button disabled={!stepsPanelCtl.canPrev} onClick={stepsPanelCtl.prev} className="btn">
                        <GrFormPreviousLink size={24}/> prev
                    </button>
                </div>
                <button disabled={!stepsPanelCtl.canNext || !validStep} onClick={stepsPanelCtl.next} className="btn">
                    next <GrFormNextLink size={24} />
                </button>
            </div>
        </FormLayout>
    )
}