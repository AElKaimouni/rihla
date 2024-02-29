"use client";
import { useAppContext } from "@/states";
import Link from "next/link";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { useRef } from "react";
import userAPi from "@/APis/userAPi";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const {
    controllers: { notice },
  } = useAppContext();
  const handleClick = () => {
    notice.add({
      message: "notice is running",
      type: "success",
    });
    notice.clear();
  };

  const refemail = useRef(null);
  const refpassword = useRef(null);

  const handleLogin = () => {
    const email = refemail.current.value;
    const password = refpassword.current.value;
    userAPi
      .login(email, password)
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        notice.add({
          message: "Error logging in, please try again.",
          type: "fail",
        });
      });
  };

  return (
    <main className="w-full flex min-h-screen flex-col items-center py-5 px-10">
      <DotLottiePlayer className="min-h-full" src="/lotties/travel_animation.lottie" autoplay loop />
      {/* <button className="btn" onClick={handleClick}>
        test notify
      </button> */}
      <div className="w-full my-5">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-gray-400 text-sm">Sign in to continue</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MdOutlineEmail className="text-gray-400" />
          </div>
          <input ref={refemail} className="input" type="text" placeholder="Email or username" />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MdOutlineLock className="text-gray-400" />
          </div>
          <input ref={refpassword} className="input" type="password" placeholder="Password" />
        </div>
        <div className="w-full flex justify-end">
          <p className="text-xs underline">
            <Link href="#">Forgot password?</Link>
          </p>
        </div>
        <button className="btn" onClick={() => handleLogin()}>
          Sign in
        </button>
        <div>
          <p className="text-center">
            Don't have an account?{" "}
            <span className="text-center underline text-primary">
              <Link href="#">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
