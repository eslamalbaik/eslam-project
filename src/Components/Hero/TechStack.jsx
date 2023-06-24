import React from 'react'
import Imghtml from '../../assets/stack/html.svg'
import Imgcss3 from '../../assets/stack/css3.svg'
import Imgjavascript from '../../assets/stack/javascript.svg'
import Imgreact from '../../assets/stack/react.svg'
import Imgtailwind from '../../assets/stack/tailwind.svg'
import Imgbootstrap from '../../assets/stack/bootstrap-5-1.svg'
import TechStackItem from './TechStackItem'

const TechStack = () => {
    return (
        <div className='px-[50px] space-y-7 text-center lg:pl-[200px] lg:flex lg:items-center lg:justify-start  gap-12 py-12'>
            <h3 className='font-[500] pt-0 lg:pt-8 text-[17px] text-[#2d2e32]  text-ternary-dark dark:text-ternary-light'>
                Tech Stack  |
            </h3>
            <div>
                <ul className='flex flex-wrap gap-4'>
                    <TechStackItem image={Imghtml} />
                    <TechStackItem image={Imgcss3} />
                    <TechStackItem image={Imgjavascript} />
                    <TechStackItem image={Imgreact} />
                    <TechStackItem image={Imgtailwind} />
                    <TechStackItem image={Imgbootstrap} />
                </ul>
            </div>
        </div>
    )
}

export default TechStack;