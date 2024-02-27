import { useForm } from "react-hook-form";

type FormData = {};

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center py-5 px-10">
      <form>
        <h1 className="text-3xl font-bold">Before we start...</h1>
        <p className="text-gray-400 text-sm">We will need to know a little more about your vacation</p>
        <div className="relative w-full">
          <input className="input" type="text" placeholder="First Name" />
        </div>
        <div className="relative w-full">
          <input className="input" type="text" placeholder="Last Name" />
        </div>
      </form>
    </main>
  );
}
