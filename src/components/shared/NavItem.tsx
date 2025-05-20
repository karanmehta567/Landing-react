interface NavItemProps{
    href:string,
    title:string
}
export const NavItem=({href,title}:NavItemProps)=>{
    return (
        <li>
            <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3">
                {title}
            </a>
        </li>
    )
}