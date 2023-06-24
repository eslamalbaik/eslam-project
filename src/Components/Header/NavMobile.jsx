import React, { useState } from 'react'
// import icons
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const NavMobile = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <nav className='lg:hidden relative z-20'>
            {/* menu icons */}
            <button onClick={() => setisOpen(true)}>
                <span className='content-none absolute  -top-1 -right-1 w-4 h-4 p-4 rounded-sm'></span> <FaBars size={22} className="text-[#C938AF] relative" />
            </button>
            {/* nav list */}
            <ul className={`${isOpen ? 'right-0' : 'right-full'
                }  top-0 w-full h-screen  transition-all flex flex-col
          justify-center items-center space-y-8 text-lg fixed  z-[1000]` }>
                {/* close button */}
                <button onClick={() => setisOpen(false)} className='absolute top-6 left-6'>
                    <AiOutlineClose size={22} className="text-black" />
                </button>
                <li className='ml-6 cursor-pointer   dark:text-ternary-light  hover:text-[#C938AF] transition-all delay-200'>
                   Home
                </li>
                <li className='cursor-pointer   dark:text-ternary-light  hover:text-[#C938AF] transition-all delay-200  '>
                 About 
                </li>
                <li className='cursor-pointer   dark:text-ternary-light  hover:text-[#C938AF] transition-all delay-200  '>
                    Projects
                </li>
                <li className='cursor-pointer   dark:text-ternary-light  hover:text-[#C938AF] transition-all delay-200  '>
                Contact
                </li>
            </ul>
        </nav >

    )
}

export default NavMobile