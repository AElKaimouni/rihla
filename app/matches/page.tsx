import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";

export default function Matches() {
    return (
        <MainLayout className="p-4">
            <Breadcrumps title="CAF 2025 Matches" description="Light your way through the world of programming." />
            <div className="bg-white p-4 mt-4 rounded">
                Matches Table
            </div>
        </MainLayout>
    )
}