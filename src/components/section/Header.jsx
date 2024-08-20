import React from "react";
import {nav} from '@/data/navigation'
import Link from "next/link";
const Header = () => {
  return <div className="w-full mix-blend-exclusion redd h-14 flex items-center justify-between px-20 fixed top-0">
    <Logo/>
    <Nav nav={nav}/>
  </div>;
};

function Logo (){
  return (
    <div className="redd">
      <Link href={'/'}>Titas</Link>
    </div>
  )
}
function Nav({nav}){
  return (
    <div className="redd h-full flex items-center justify-center px-5 gap-5">
        {
          nav.map((data,i)=>{
            return <div key={i}><Link href={data.route}>{data.label}</Link></div>
          })
        }
    </div>
  )
}

export default Header;
