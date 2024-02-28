import Guide from "@/components/Guide";
import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import { guides } from "@/utils/data";

export default function Guides() {
    return (
        <MainLayout className="p-4">
            <Breadcrumps title="Tour Guides" description="Light your way through the world of programming." />
            {guides.map((guide, index) => (
                <Guide guide={guide} key={index} />
            ))}
        </MainLayout>
    )
}