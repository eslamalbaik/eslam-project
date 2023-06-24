import React, { useState } from 'react'
import HireMeModal from './HireMeModal';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import {FiMoon ,FiSun} from  'react-icons/fi';
const Nav = () => {
    const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();


    function showHireMeModal() {
        if (!showModal) {
            document
                .getElementsByTagName('html')[0]
                .classList.add('overflow-y-hidden');
            setShowModal(true);
        } else {
            document
                .getElementsByTagName('html')[0]
                .classList.remove('overflow-y-hidden');
            setShowModal(false);
        }
    }
    return (
        <nav className='hidden lg:flex lg:items-center font-semibold text-[17px]' >
            <ul className='text-black lg:flex space-x-6 items-center text-[18px] leading-6 font-normal lg:mr-32'>
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
                <li >
                    <div className="hidden sm:flex  dark:text-ternary-light justify-between items-center flex-col md:flex-row">
                        <div className="hidden md:flex">
                            <span
                                onClick={showHireMeModal}
                                className="text-md font-general-medium bg-[#C938AF]  text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                                aria-label="Hire Me Button"
                            >
                                <button>Hire Me</button>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <div>
                {showModal ? (
                    <HireMeModal
                        onClose={showHireMeModal}
                        onRequest={showHireMeModal}
                    />
                ) : null}
                {showModal ? showHireMeModal : null}
            </div>
            	{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
        </nav >
    )
}
export default Nav