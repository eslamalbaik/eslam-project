import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Footer = () => {
    return (
        <div className='box-border flex items-center lg:flex-row flex-col lg:justify-between
        w-screen p-8 lg:pl-[200px] lg:pr-[200px] lg:pt-10 lg:pb-10 bg-ternary-dark dark:text-ternary-light text-white bg-[#2d2e32]  '>
            <h1 className='text-xl lg:text-[20px] text-center font-bold'>
                Copyright © 2023. All rights are reserved
            </h1>
            <div className='hidden  bg-ternary-dark dark:text-ternary-light lg:flex justify-center lg:justify-start gap-2'>
                <BsGithub className='hover:text-[#C938AF] cursor-pointer ' size={22} />
                <BsLinkedin className='hover:text-[#C938AF] cursor-pointer  ' size={22} />
            </div>
        </div>
    )
}

export default Footer