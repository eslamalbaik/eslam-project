import React, { useState, useEffect } from 'react'
import { Nav, NavMobile } from './index';

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY < lastScrollY) {
                // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

   
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const styles = {
        mainHeaderStyle: "box-border z-[10000] scroll-smooth w-full top-0 ",
        headerStyle: "p-3 px-8 lg:px-0 w-full  lg:h-[84px]  shadow-lg  dark:text-ternary-light text-[#2d2e32] py-[25px] ",
        innerHeaderStyle: 'lg:px-[50px] flex items-center  justify-between',
        logoStyle: '!font-[700] flex text-[22px] cursor-pointer ',
    }
    return (
        <div className={styles.mainHeaderStyle}>
            <header className={`active ${show && ' shadow-md'} ${styles.headerStyle} `}>
                <div className={styles.innerHeaderStyle}>
                    {/* logo  */}
                    <h3 className={styles.logoStyle}>
                        Eslam.<p className='text-[#C938AF]'>dev 🚀</p>
                    </h3>
                    {/* nav */}
                    <Nav />
                    {/* nav-mobile */}
                    <NavMobile />
                </div>
            </header >
        </div >
    )
}

export default Header