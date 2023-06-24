import React from "react";
import AboutImage from "../../assets/about-img.webp";
import techImage from "../../assets/code.gif";
import text2 from "../../assets/text2.svg";




const AboutUs = () => {
    return (
        <div className="relative max-h-max  dark:bg-primary-dark  py-20 px-6  flex flex-col lg:flex-row w-screen
        gap-4 lg:gap-16 lg:pl-[200px] lg:pr-[200px]">
            <img className="hidden lg:block rocket launch w-[220px] lg:ml-[720px]" src="https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png" alt="rocket" />
            <div className="">
                <img className=" w-full h-full lg:w-[435px] lg:h-[350px] rounded-3xl " src={AboutImage} alt="AboutImage" />
                <span className=" hidden lg:block relative w-[191px] ">
                    <img className="relative -top-28 left-64 bg-white rounded-full w-[191px]   spin-slow" src={text2} alt="text2" />
                    <div>
                        <img className="absolute -top-14 -right-44 w-16 z-50" src={techImage} alt="techImage" />
                    </div>
                </span>
            </div>
            <div className="lg:w-1/2  space-y-4">
                <h3 className="dark:text-ternary-light font-semibold text-[#C938AF] text-[17px]">ABOUT ME</h3>
                <h4 className="dark:text-ternary-light text-[25px] font-bold ">
                    A passionate Front-end React Developer based Gaza in Palestine 📍
                </h4>
                <p className="dark:text-ternary-light  text-[#767676] text-[18px] font-light">
                    Before talking about my skills and what I'm good at, I wanted point
                    out that the most important thing for me is the satisfact of my
                    customers with my work and dealing with them, and I care about
                    punctuality and credibility at work. My passion is design, I have many
                    creative ideas, and I always strive for success and development.I
                    possess an impressive arsenal of skills in HTML, CSS, JavaScript,
                    React, Tailwind, and Bootstrab. I excel in designing and maintaining
                    responsive websites that offer a smooth user experience. My expertise
                    lies in crafting dynamic.
                </p>

            </div>
        </div>
    );
};

export default AboutUs;
