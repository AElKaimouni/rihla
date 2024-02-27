import { ReactNode, useMemo, useState } from "react"

interface Props {
    panels: {
        [key: string] : ReactNode;
    };
    ctl: ReturnType<typeof useStepsPanel>;
}

export const useStepsPanel = (panels: (string | number)[]) => {
    const [step, setStep] = useState<number>(0);
    const panel = useMemo(() => panels[step], [step]);
    const canNext = useMemo(() => {
        return step < panels.length - 1;
    }, [step]);
    const canPrev = useMemo(() => {
        return step > 0;
    }, [step]);

    return {
        next: () => {
            if(canNext) setStep(s => s + 1)
        },
        prev: () => {
            if(canPrev) setStep(s => s - 1)
        },
        activePanel: panel,
        canNext,
        canPrev
    };
}

export default function StepsPanel({ ctl, panels } : Props) {
    const { activePanel } = ctl;

    return panels[activePanel];
}