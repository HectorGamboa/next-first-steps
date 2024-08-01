'use client';
import Link from "next/link"
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";


interface Props{
  path : string,
  text:string 
}


export const ActiveLink = ({path, text}:Props) => {
  const pathName = usePathname ();
  
  return (
    <div>
        <Link  
        className={`${style.link} ${(pathName=== path) && style['active-Link']}` }
        href={path}> 
        {text}
        </Link>
    </div>
  )
}

