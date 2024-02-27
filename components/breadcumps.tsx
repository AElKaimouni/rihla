import { ReactNode } from "react";

interface Props {
    title: string;
    description?: string;
    children?: ReactNode;
}

export default function Breadcrumps({ title, children, description } : Props) {
    return (
        <div className="flex items-center">
            <div className="grow">
                <h1 className="text-xl">{title}</h1>
                <p className="text-gray-500 p-1 text-xs">{description}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}