import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const selectOptions = [
    'Web Application',
    'Mobile Application',
    'UI/UX Design',
    'Branding',
];





const HireMeModal = ({ onClose, onRequest }) => {
    const form = useRef();
    const [isSend, setIsSend] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()
        emailjs.sendForm('service_ms9qgbw', 'template_lhqyyaj', form.current, 'PQ1Y3Jnk0xLrYnM_1')
            .then((result) => {
                console.log(result.text)
                setIsSend(true)
                setTimeout(() => {
                    setIsSend(false)
                }, 2500)
            })
            .catch((error) => {
                console.log(error.text)
            })
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
        >
            {/* Modal Backdrop */}
            <div className="bg-[#5b118d]  bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

            {/* Modal Content */}
            <main className="flex  flex-col items-center justify-center h-full w-full">
                <div className="modal-wrapper flex items-center z-30">
                    <div className="modal max-w-md bg-[#5b118d]  mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg ">
                        <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                            <h5 className=" text-white text-primary-dark dark:text-primary-light text-xl">
                                What project are you looking for?
                            </h5>
                            <button
                                onClick={onClose}
                                className="px-4 font-bold text-primary-dark dark:text-primary-light"
                            >
                                <FiX className="text-3xl" />
                            </button>
                        </div>
                        <div className="modal-body p-5 w-full h-full">
                            <form
                                ref={form} onSubmit={sendEmail}
                                className="max-w-xl m-4 text-left"
                            >
                                <div className="">
                                    <input
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="name"
                                        name="user_name"
                                        type="text"
                                        required=""
                                        placeholder="Name"
                                        aria-label="Name"
                                    />
                                </div>
                                <div className="mt-6">
                                    <input
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="email"
                                        name="user_email"
                                        type="email"
                                        required=""
                                        placeholder="Email"
                                        aria-label="Email"
                                    />
                                </div>
                                <div className="mt-6">
                                    <select
                                        className="w-full px-5 py-2 text-black border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="messageselect"
                                        name="messageselect"
                                        type="text"
                                        required=""
                                        aria-label="Project Category"
                                    >
                                        {selectOptions.map((option) => (
                                            <option
                                                className="text-normal sm:text-md"
                                                key={option}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-6">
                                    <textarea
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="message"
                                        name="message"
                                        cols="14"
                                        rows="6"
                                        aria-label="Details"
                                        placeholder="Project description"
                                    ></textarea>
                                </div>

                                <div className="mt-6 pb-4 sm:pb-1">
                                    <span
                                        className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-[#C938AF]
											hover:opacity-[0.5]
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                                    >
                                        <input type='submit' title="Send Request" value="Send" />
                                        {isSend && (
                                            <div className='issendMessage'>
                                                Email has been sent successfully
                                            </div>
                                        )}
                                    </span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </motion.div>
    );
};
export default HireMeModal