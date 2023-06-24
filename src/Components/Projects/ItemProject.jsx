// import React from "react";
import doctor from "../../assets/projects/doctor.png";
import { BsGithub } from "react-icons/bs"
import { HiOutlineExternalLink } from "react-icons/hi"

// const ItemProject = () => {
//     return (
//         <div className="bg-white h-[20rem] p-8   flex justify-between rounded-3xl gap-4 lg:pl-[200px] lg:pr- [200px]">
//             <div className="h-auto w-[1/2] overflow-hidden bg-gray-300 bg-opacity-20 shadow-md">
//                 <img
//                     className=" transform translate-y-0 transition-transform duration-10000 ease-in-out  "
//                     src={car} alt="car" />
//             </div>
//             <div className="flex justify-center flex-col space-y-6 items-center">
//                 <h1 className="text-xl font-bold">CAR RENTAL 🚗</h1>
//                 <p className="text-[#767676] text-[18px] font-normal text-center">
//                     A car rental website is an online platform that allows users to rent
//                     cars for personal or business use. The website provides an interface
//                     for searching, comparing, and reserving cars.
//                 </p>
//                 <div>
//                     <button>React</button>
//                     <button>Tailwind Css</button>
//                 </div>
//                 <div>
//                     <button><BsGithub /></button>
//                     <button><HiOutlineExternalLink /> </button>
//                 </div>
//             </div>
//         </div>
//     );


import { useState, useRef } from 'react';

function ItemProject() {
    const containerRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleMouseEnter() {
        if (containerRef.current && !isAnimating) {
            setIsAnimating(true);
            const container = containerRef.current;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const scrollDuration = 10000; // increase duration for slower scrolling
            const startTime = performance.now();
            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                container.scrollTop = easeInOutQuad(elapsedTime, 0, scrollHeight, scrollDuration);
                if (elapsedTime < scrollDuration) {
                    requestAnimationFrame(animateScroll);
                } else {
                    setIsAnimating(false);
                    container.scrollTop = 0; // reset to beginning for continuous scrolling
                }
            };
            animateScroll(startTime);
        }
    }

    // Easing function for quadratic animation
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    return (
        <div className="bg-white shadow-md lg:w-[960px] h-[45rem] lg:h-[30rem] p-4 lg:p-10 flex flex-col lg:flex-row justify-between rounded-3xl lg:gap-10 ">
            <div className="h-auto w-[1/2]  rounded-xl overflow-hidden " ref={containerRef} onMouseEnter={handleMouseEnter}>
                <img className=" h-auto w-full rounded-xl transform  translate-y-0" src={doctor} alt="doctor" style={{ cursor: 'pointer' }} />
            </div>
            <div className="flex justify-start w-auto flex-col space-y-6 items-center">
                <h1 className="text-xl font-bold pt-4"> DOCTOR APP 🥼</h1>
                <p className="text-[#767676] w-[320px] text-[18px] font-normal text-center">
                 Doctor App, you can easily schedule appointments with your favorite doctors without the hassle of calling and waiting on hold.
                </p>
                <div className="flex gap-4">
                    <span className="font-medium text-[19px] p-2 bg-white  border-1 border-[#f9f9f9] shadow-md">React</span>
                    <span className="font-medium text-[19px] p-2 bg-white  border-1 border-[#f9f9f9] shadow-md">Tailwind CSS</span>
                </div>
                <div className="flex gap-9 pt-6">
                    <a href="https://github.com/eslamD7/website-doctor-react" target="_blank" rel="noopener noreferrer" className=" flex justify-center items-center text-xl gap-2 hover:text-[#C938AF]">Code <BsGithub size={25} /></a>
                    <br />
                    <a href="https://doctorappeslamd7.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-xl gap-2 hover:text-[#C938AF]">Live Demo <HiOutlineExternalLink size={25} /></a>
                </div>
            </div>
        </div>
    );
};

export default ItemProject;
