// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const navllinkarr = [
//   { label: "Home", redirectLink: "/" },
//   { label: "About", redirectLink: "/About" },
//   { label: "Contact", redirectLink: "/Contact" },
// ]

// const Usecontext = () => {
//   return (
//     <div>
//       <nav className='w-full h-auto bg-red-500'>
//         <div className='flex flex-row justify-around items-center py-10'>
//           <ul className='flex flex-row items-center gap-x-10'>
//             {navllinkarr.map((nav, idx) => {
//               return (
//                 <li key={idx}>
//                   <NavLink to={nav.redirectLink}>
//                     {nav.label}
//                   </NavLink>
//                 </li>
//               )
//             })}
//           </ul>

//           <button>Contact us</button>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Usecontext

import React, { useState } from 'react'
import { NavLink, } from 'react-router'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const navlinkarr =[
    {
        lable: "Home",
        redirectLink: "/"
    },
    {
        lable: "About",
        redirectLink: "/About"
    },
    {
        lable: "Contact",
        redirectLink: "/Contact"
    }
]
const Usecontext = () => {
    const [currentmood, setcurrentmood] = useState("light")
    const handelarmood=()=>{
        setcurrentmood(currentmood === "light" ? "dark" : "light")
    }

  return (
    <div>
        <nav className={`flex flex-row w-full h-auto ${currentmood === "light" ? "bg-gray-200" : "bg-black"}`}>
            <div className='flex  justify-around w-full h-auto  py-10'>
                
                    <ul className='flex  flex-row gap-10'>
                        {navlinkarr.map((nav, idx)=>{
                            return (
                                <li key={idx}>
                                    <NavLink to={nav.redirectLink}>
                                        {nav.lable}

                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                <div className='flex flex-row gap-x-10'>
                    {
                        currentmood === "light" ? <div onClick={handelarmood}>
                            <MdDarkMode/>
                        </div>  : <div onClick={handelarmood}>
                            <CiLight/>
                        </div> 
                    }

                    <button>Contact Us</button>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default Usecontext