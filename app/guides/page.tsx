import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";

export default function Matches() {
    return (
        <MainLayout className="p-4">
            <Breadcrumps title="Tour Guides" description="Light your way through the world of programming." />
            <div className="bg-white p-4 mt-4 rounded">
            Guides Table
            </div>
        </MainLayout>
    )
}