import Match from "@/components/Match";
import Breadcrumps from "@/components/breadcumps";
import MainLayout from "@/components/layouts";
import { macthes } from "@/utils/data";

export default function Matches() {
    
    return (
        <MainLayout className="p-4">
            <Breadcrumps title="CAF 2025 Matches" description="Light your way through the world of programming." />
            {macthes.map((match, index) => <Match match={match} key={index} />)}
        </MainLayout>
    )
}