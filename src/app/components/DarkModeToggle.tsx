"use client"
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button onClick={toggleDarkMode} className="p-2 bg-gray-100 dark:bg-gray-800 dark:text-white rounded">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
    );
};

export default DarkModeToggle;