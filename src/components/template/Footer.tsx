const Footer = () => {
    const currentdate = new Date()
    const currentyear = currentdate.getFullYear()
    return (
        <footer className="footer w-full bg-platinum-light dark:bg-rich-black mt-4 rounded-t-md px-4 pt-5">
            <div className="container flex justify-between items-center">
                <p className="text-sm text-gray-400">&copy; Alex Muiruri</p>
                <p className="text-sm text-gray-400">dev@alexmuiruri.com</p>
            </div>
        </footer>
    )
}

export default Footer
