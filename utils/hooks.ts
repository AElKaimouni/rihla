import { useState } from "react";

export const useLoader = (init: boolean = false) => {
    const [loading, setLoading] = useState<boolean>(init);
    const loader = {
        start: () => setLoading(true),
        end: () => setLoading(false),
        process: async (callBack: () => Promise<any>) => {
            setLoading(true);
            await callBack();
            setLoading(false);
        }
    };

    return [loading, loader] as [typeof loading, typeof loader];
};