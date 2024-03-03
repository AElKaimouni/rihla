"use client";

import { User } from "@/types";
import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";
import userReducer, { UserAction, UserActions } from "./reducers/user";
import { useLoader } from "@/utils/hooks";
import userAPi from "@/APis/userAPi";
import { AppNotice, NoticeAction, useNotice } from "./reducers/notice";
import { MdErrorOutline, MdFileDownloadDone } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import Loader from "@/components/Loader";
import Image from "next/image";

export interface AppContext {
  user: User | null | undefined;
  notices: AppNotice[];
  loading: boolean;
  controllers: {
    user: {
      login: (user: User) => void;
      logout: () => void;
    };
    loader: ReturnType<typeof useLoader>[1];
    notice: ReturnType<typeof useNotice>["controller"];
  };
  reducers: {
    user: Dispatch<UserAction>;
    notice: Dispatch<NoticeAction>;
  };
}

const appContext = createContext<AppContext>({} as any);

interface Props {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  // notices states
  const { controller: noticeController, dispatch: dispatchNotice, state: notices } = useNotice();

  // user states
  const [user, dispatchUser] = useReducer(userReducer, undefined);

  // loader states
  const [loading, loader] = useLoader(true);

  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);

    handler();
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  // context
  const context: AppContext = {
    user,
    notices,
    loading,
    controllers: {
      loader,
      notice: noticeController,
      user: {
        login: (user) => dispatchUser({ type: UserActions.LOGIN, user }),
        logout: () => {
          window.localStorage.removeItem("auth_token");
          dispatchUser({ type: UserActions.LOGOUT });
        },
      },
    },
    reducers: {
      user: dispatchUser,
      notice: dispatchNotice,
    },
  };

  useEffect(() => {
    // Redirect to login page if user is not authenticated, not on the login or signup page
    if (user === null && !pathname.startsWith("/signup") && !pathname.startsWith("/login")) router.push("/login");
  }, [user]);

  useEffect(() => {
    loader.process(async () => {
      const user = await userAPi.auth();

      if (user) context.controllers.user.login(user);
      else context.controllers.user.logout();
    });
  }, []);

  useEffect(() => {
    if (loading === false) document.body.style.overflowY = "auto";
  }, [loading]);

  return (
    <appContext.Provider value={context}>
      {loading && (
        <div className="flex h-screen items-center justify-center flex-col">
          <Loader />
        </div>
      )}
      {!loading && width <= 500 && children}
      {!loading && width > 500 && (
        <div className="flex h-screen items-center justify-center flex-col">
          <Image src="/images/responsive.png" alt="" width={250} height={250} />
          <p className="text-2xl">
            This app is not responsive yet with big screens yet, please try it on your mobile or shrink your window
          </p>
        </div>
      )}

      <ul className="fixed bottom-0 right-0">
        {notices.map((noticeObject) => (
          <li
            key={noticeObject.id}
            className={`rounded-lg duration-1000 transition-all ease-in-out bg-white shadow py-4 px-4 m-4 flex items-center ${
              noticeObject.animated ? "opacity-0" : ""
            }`}
          >
            {noticeObject.type === "success" && <MdFileDownloadDone className="mr-2 fill-emerald-500" size={24} />}
            {noticeObject.type === "fail" && <MdErrorOutline className="mr-2 fill-red-500" size={24} />}
            <p>{noticeObject.message}</p>
            <button
              onClick={() => noticeController.remove(noticeObject.id)}
              className="ml-2 cursor-pointer rounded-full hover:bg-gray-100"
            >
              <IoIosClose size={24} />
            </button>
          </li>
        ))}
      </ul>
    </appContext.Provider>
  );
};

export const useAppContext = () => useContext(appContext);
