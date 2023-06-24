import React from 'react'

const TechStackItem = ({ image }) => {

    return (
        <li className={styles.styleli}>
            <img className={styles.styleImage} src={image} alt={image} />
        </li>
    )
}

export default TechStackItem;

const styles = {
    styleli: 'flex justify-center items-center bg-white dark:border-primary-dark w-20 h-20 rounded-full hover:bg-[#ec8bda] transition-transform duration-500 ease-in-out hover:rotate-[360deg]',
    styleImage: "w-[2.4rem]"
}