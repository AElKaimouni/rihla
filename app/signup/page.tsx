"use client";

import userAPi from "@/APis/userAPi";
import Image from "next/image";
import { useState } from "react";
import { useNotice } from "@/states/reducers/notice";
import { useRouter } from "next/navigation";

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const { controller } = useNotice();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    userAPi
      .register(name, email, password)
      .then(() => {
        controller.add({ message: "Account created successfully", type: "success" });
        router.push("/login");
      })
      .catch((err) => controller.add({ message: err, type: "fail" }));
  };

  return (
    <div className="w-full flex min-h-[100dvh] flex-col items-center py-5 px-10">
      <Image src="/images/logo/logo2.png" alt="" width={300} height={300} />
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
        <div className="space-y-2">
          <label className="block" htmlFor="name">
            Name
            <input
              className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary dark:focus:ring-primary-dark"
              id="name"
              placeholder="Ahmed Mohamed"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
          </label>
        </div>
        <div className="space-y-2">
          <label className="block" htmlFor="email">
            Email
            <input
              className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary dark:focus:ring-primary-dark"
              id="email"
              placeholder="email@example.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </label>
        </div>
        <div className="space-y-2">
          <label className="block" htmlFor="password">
            Password
            <input
              className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary dark:focus:ring-primary-dark"
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </label>
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
