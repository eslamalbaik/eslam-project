import React from 'react'
import hero from "../../assets/hero.png"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import TechStack from './TechStack'

const Hero = () => {
    return (
        <section>
            <div className='box-border flex items-center px-4 lg:flex-row flex-col-reverse lg:justify-center
        w-screen lg:pl-[200px]  lg:pt-16  text-[#2d2e32] mt-24 lg:mt-14'>
                <div className='space-y-6 p-2 lg:w-1/2 mt-4'>
                    <h1 className='font-[700] text-[35px] dark:text-ternary-light  lg:text-[55px] leading-[76px]'>
                        Front-End React
                        Developer <span class="wave">👋</span>
                    </h1>
                    <p className='text-[18px] font-[500] text-ternary-dark dark:text-ternary-light  text-[#767676] leading-7'>
                        Hi, I'm Eslam AlBaik. A passionate Front-end React
                        <br /> Developer  and software Engineer based in  Palestine 📍.
                    </p>

                    <div className='text-[#2d2e32] text-ternary-dark dark:text-ternary-light flex justify-center lg:justify-start gap-2'>
                        <BsGithub className='hover:text-[#C938AF] cursor-pointer ' size={28} />
                        <BsLinkedin className='hover:text-[#C938AF] cursor-pointer  ' size={28} />
                    </div>
                </div>
                <div className='lg:w-1/2 h-auto'>
                    <div className=' relative morph  transition-all duration-1000 ease-in-out bg-cover bg-center border-[3px]
                     border-gray-700 h-[370px] w-[380px]  overflow-hidden shadow-[#C938AF] shadow-2xl '
                    >
                        <img className=' relative  morph transition-all duration-1000 ease-in-out object-cover  
               w-full h-full ' src={hero} alt="hero-img" />
                    </div>
                </div>
            </div >
            <TechStack />
            <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
                class="fixed bottom-4 right-4 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md">
                <i class="fab fa-whatsapp text-2xl"></i>
            </a>

        </section>

    )
}

export default Hero


