'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeMode = () => {
    const [thememode, setthememode] = useState(faSun)
    const changeThemeMode = () => {
        if(thememode === faSun){
            document.documentElement.setAttribute('data-theme', 'light');
            return setthememode(faMoon)
        }

        document.documentElement.setAttribute('data-theme', 'dark');
        return setthememode(faSun)
    }
    return (
        <Link className='theme-mode-changer ease-in-out duration-800 ' href='#' onClick={changeThemeMode}>
            <FontAwesomeIcon className='pt-4 px-2 text-xl' icon={thememode}  />
        </Link>
    )
}

export default ThemeMode