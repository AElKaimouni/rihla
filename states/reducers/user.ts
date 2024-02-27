import { User } from "@/types";
import { AppContext } from "..";

export enum UserActions {
    LOGIN,
    LOGOUT,
    MODIFY
}

export type UserAction = 
    { type: UserActions.LOGIN, user: User } |
    { type: UserActions.LOGOUT } |
    { type: UserActions.MODIFY, user: Partial<User> }
;

export default function userReducer(state: AppContext["user"], action: UserAction) : AppContext["user"] {
    switch(action.type) {
        case UserActions.LOGIN : return action.user;
        case UserActions.LOGOUT : return null;
        case UserActions.MODIFY : return { ...state, ...action.user } as User;
        default: return state;
    }
}