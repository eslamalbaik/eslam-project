import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BiWorld } from 'react-icons/bi';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    function handleLanguageChange(lang) {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    }

    function handleToggleMenu() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleMouseClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleMouseClick);

        return () => {
            document.removeEventListener('mousedown', handleMouseClick);
        };
    }, []);

    return (
        <div className="relative">
            <button type="button" className="inline-flex items-center justify-center w-28 h-10 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none" onClick={handleToggleMenu}>
                <BiWorld className="mr-2" />
                {i18n.language === 'en' ? 'English' : 'العربية'}
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-28 bg-white rounded-md shadow-xl z-10" ref={menuRef}>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleLanguageChange('en')}>
                        English
                    </a>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleLanguageChange('ar')}>
                        العربية
                    </a>
                </div>
            )}
        </div>
    );
}

export default LanguageSwitcher;