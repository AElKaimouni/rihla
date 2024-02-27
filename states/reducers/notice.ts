import { Dispatch, useReducer } from "react";

export interface AppNotice {
    type: "success" | "fail";
    message: string;
    timer: number;
    animated?: boolean;
    id: number;
}

export enum NoticeActions {
    CREATE,
    DELETE,
    CLEAR
};

export type NoticeAction =
    { type: NoticeActions.CREATE, notice: Omit<AppNotice, "timer" | "id">, dispatch: Dispatch<NoticeAction> } |
    { type: NoticeActions.DELETE, id: number, noClean?: boolean, dispatch: Dispatch<NoticeAction> } |
    { type: NoticeActions.CLEAR }
;

let idCounter = 0;

const noticeReducer = (state: AppNotice[], action: NoticeAction) : AppNotice[] => {
    switch(action.type) {
        case NoticeActions.CREATE:  {
            const id = idCounter++;
            const timer = window.setTimeout(() => {
                action.dispatch({ type: NoticeActions.DELETE, id, noClean: true, dispatch: action.dispatch });
            }, 3000);

            return [
                ...state,
                {...action.notice, timer, id}
            ];
        };
        case NoticeActions.DELETE: {
            const notice = state.find(s => s.id === action.id);

            if(!notice) return state;
            if(!action.noClean && !notice.animated) window.clearTimeout(notice.timer);

            if(!notice.animated) {
                setTimeout(() => action.dispatch(action), 1000);

                return state.map(n => n.id !== action.id ? n : { ...n, animated: true });
            }

            return state.filter(n=> n.id !== action.id);
        };
        case NoticeActions.CLEAR: {
            state.forEach(notice => window.clearTimeout(notice.timer));

            return [];
        };
        default: return state;
    }
};

export const useNotice = () => {
    const [notices, dispatch] = useReducer(noticeReducer, []);
    const controller = {
        add: (notice: Omit<AppNotice, "timer" | "id">) => dispatch({ type: NoticeActions.CREATE, dispatch, notice }),
        remove: (id: number) => dispatch({ type: NoticeActions.DELETE, id, dispatch }),
        clear: () => dispatch({ type: NoticeActions.CLEAR })
    };

    return { state: notices, dispatch, controller };
};