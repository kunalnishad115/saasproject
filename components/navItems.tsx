
"use client";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import  Link  from 'next/link';
const navtems=[
  
    {label:'Home',href:'/'},
    {label :'Companions',href:'/companions'},
    {label :'My Journey',href:'/my-journey'},

  
]
export default function NavItems() {
    const pathname=usePathname();
  return (
    <nav className='flex itme-center gap-4'>
      {navtems.map(({label,href})=>(
         <Link 
         href={href} 
         key={label} 
         className={cn(pathname===href && 'text-primary font-semibold')}>
{label}

         </Link>
      ))}
       
    </nav>


  )
}