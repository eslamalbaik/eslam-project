import React from 'react'
import { GoMailRead } from "react-icons/go"
import { BsPinMap } from "react-icons/bs"

const Contact = () => {
    return (
        <div className='h-auto py-20 px-8  dark:bg-primary-dark  flex flex-col lg:flex-col w-screen gap-4 lg:pl-[200px] lg:pr-[250px]'>
            <h3 className="  dark:text-ternary-light font-semibold text-[#C938AF] text-[17px]">CONTACT</h3>
            <h4 className="dark:text-ternary-light text-[25px] font-bold pb-12 text-[#2D2E32] ">
                Don't be shy! Hit me up! 👇
            </h4>
            <div className='flex justify-start gap-16 lg:items-center lg:flex-row flex-col'>
                <div className='flex items-center gap-4'>
                    <button className='p-6 shadow-xl rounded-full  bg-white'>
                        <BsPinMap className='!text-[#C938AF]' size={32} />
                    </button>
                    <div>
                        <h4 className='font-bold text-[20px] text-balck dark:text-ternary-light'>Location</h4>
                        <p className='font-light text-sm lg:text-[18px] text-[#9EA8A6] hover:text-[#C938AF]'>Gaza , Palestine</p>
                    </div>
                </div>
                <div className='flex items-center  gap-4 space-y-2'>
                    <button className='p-6 shadow-xl rounded-full bg-white'>
                        <GoMailRead className='!text-[#C938AF]' size={32} />
                    </button>
                    <div>
                        <h4 className='font-bold text-[20px] text-balck dark:text-ternary-light'>Mail</h4>
                        <p className='font-light text-sm lg:text-[18px] text-[#9EA8A6] hover:text-[#C938AF]'>eslamahmad2000t@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact