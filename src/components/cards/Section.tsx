import { Paragraph } from "../shared/Paragraph"

interface SectionProps{
    title?:string,
    description?:string,
    icon?:React.ReactNode
}
export const Service=({title,description,icon}:SectionProps)=>{
    return <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
        <div className="rounded-xl bg-gray-300 bg-body p-3 text-heading-1 w-max relative">
            {icon}
        </div>
        <div className="mt-6 space-y-5 relative">
            <h2 className="text-lg font-semibold md:text-xl text-heading-2">{title}</h2>
            <Paragraph>{description}</Paragraph>
        </div>
    </div>
}