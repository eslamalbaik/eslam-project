// import React from "react";
import food from "../../assets/projects/food.png";
import { BsGithub } from "react-icons/bs"
import { HiOutlineExternalLink } from "react-icons/hi"

import { useState, useRef } from 'react';

function RItemProject() {
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
        <div className="bg-white w-[960px] h-[30rem] p-10 flex justify-between rounded-3xl gap-10 ">
            <div className="flex justify-start w-auto flex-col space-y-6 items-center">
                <h1 className="text-xl font-bold pt-4"> BEST FOOD 🍔</h1>
                <p className="text-[#767676] w-[320px] text-[18px] font-normal text-center">
                The Best Foods Delivered is a service that connects you with local chefs who prepare fresh and tasty dishes using high-quality ingredients.               </p>
                <div className="flex gap-4">
                    <span className="font-medium text-[19px] p-2 bg-white  border-1 border-[#f9f9f9] shadow-md">React</span>
                    <span className="font-medium text-[19px] p-2 bg-white  border-1 border-[#f9f9f9] shadow-md">Tailwind CSS</span>
                </div>
                <div className="flex gap-9 pt-6">
                    <a href="https://github.com/eslamD7/Best-food-react-tailwind" target="_blank" rel="noopener noreferrer" className=" flex justify-center items-center text-xl gap-2 hover:text-[#C938AF]">Code <BsGithub size={25} /></a>
                    <br />
                    <a href="https://besteatseslamd7.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-xl gap-2 hover:text-[#C938AF]">Live Demo <HiOutlineExternalLink size={25} /></a>
                </div>
            </div>
            <div className="h-auto w-[1/2] overflow-hidden bg-gray-300 bg-opacity-20 shadow-md" ref={containerRef} onMouseEnter={handleMouseEnter}>
                <img className="h-auto w-full rounded-xl  transform translate-y-0" src={food} alt="food" style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
};

export default RItemProject;
