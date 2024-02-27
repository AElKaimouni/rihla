"use client";

import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

export default function TrajectsPage() {
    return (
        <MainLayout className="p-4">
            <Breadcrumps title="Trajects" description="Light your way through the world of programming.">
                <Link href="/trajects/new">
                    <button className="btn btn-small whitespace-nowrap">
                        <IoIosAdd size={24} /> New Traject
                    </button>
                </Link>
            </Breadcrumps>
            <div className="bg-white p-4 mt-4 rounded">
                trajects table
            </div>
        </MainLayout>
    );
}