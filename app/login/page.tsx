"use client";
import { useAppContext } from "@/states";
import Link from "next/link";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { FormEvent, useRef, useState } from "react";
import userAPi from "@/APis/userAPi";
import { useLoader } from "@/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const { controllers: { user } } = useAppContext();
  const [email, setEmail] = useState<string>("abdo2@gmail.com");
  const [password, setPassword] = useState<string>("pass1234");
  const [loading, loader] = useLoader();
  const router = useRouter();

  const submit = (e: FormEvent<HTMLFormElement>) => loader.process(async () => {
    e.preventDefault();
    const res = await userAPi.login(email, password);
    
    if(res) {
      user.login(res);
      router.push("/");
    }

  })

  return (
    <main className="w-full flex min-h-screen flex-col justify-center py-5 px-10">
      <Image src="/images/logo/logo2.png" alt="" width={300} height={300} />
      <div className="w-full my-5">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-gray-400 text-sm">Sign in to continue</p>
      </div>
      <form onSubmit={e => submit(e)} className="w-full flex flex-col gap-2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MdOutlineEmail className="text-gray-400" />
          </div>
          <input value={email} onChange={e => setEmail(e.target.value)} className="input" type="text" placeholder="E-mail" />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MdOutlineLock className="text-gray-400" />
          </div>
          <input value={password} onChange={e => setPassword(e.target.value)} className="input" type="password" placeholder="Password" />
        </div>
        <div className="w-full flex justify-end">
          <p className="text-xs underline">
            <Link href="#">Forgot password?</Link>
          </p>
        </div>
        <button disabled={loading} type="submit" className="btn">
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
      </form>
    </main>
  );
}
