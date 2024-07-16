import React from 'react'

const Footer = () => {
    const currentdate = new Date()
    const currentyear = currentdate.getFullYear()
    return (
        <footer className='footer w-full bg-platinum-light dark:bg-rich-black mt-4 rounded-t-md px-4 pt-5'>
            <div className="container flex justify-between items-center">
                <p>&copy; Alex Muiruri {currentyear}</p>
            </div>
        </footer>
    )
}

export default Footer