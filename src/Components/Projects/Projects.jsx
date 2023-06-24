import React from 'react'
import ItemProject from "./ItemProject"
import RItemProject from "./RItemProject"
import ItemProject2 from './ItemProject2'

const Projects = () => {
    return (
        <div className=' dark:bg-primary-dark h-auto py-20 px-4 flex flex-col w-screen gap-4 lg:pl-[200px] lg:pr-[250px]'>
            <h3 className="font-semibold text-[#C938AF] text-[17px]">PROJECTS</h3>
            <h4 className="text-[25px] dark:text-ternary-light font-bold pb-12 text-[#2D2E32]">
                Each project is a unique piece of development 🧩
            </h4>
            <ItemProject />
            <br />
            <RItemProject />
            <br />
            {/* <ItemProject2 /> */}
        </div>
    )
}

export default Projects