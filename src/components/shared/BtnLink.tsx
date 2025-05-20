interface ButttonProps{
    href:string,
    text:string,
    className?:''
}
export const BtnLink=({href,text,className=""}:ButttonProps)=>{
    return (
        <a href="" className="px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 transform transition duration-300 cursor-pointer">
            <span className="relative z-10 text-white">{text}</span>
            {className}{href}
        </a>
    )
}