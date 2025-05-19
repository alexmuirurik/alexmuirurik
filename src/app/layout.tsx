import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import Footer from '@/src/components/template/Footer'
import Navbar from '@/src/components/template/Navbar'
import Sidebar from '@/src/components/template/Sidebar'
import { SidebarContextProvider } from '@/src/context/usesidebar'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'My Resume | Alex Muiruri - https://alexmuiruri.com',
    description:
        'Full-stack Web Developer | Javascript, React, NodeJS | Python, Django | PHP, Laravel| HTML | CSS ',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" data-theme="dark">
            <head>
                <link
                    rel="shortcut icon"
                    href="/img/home//hhjf.webp"
                    type="image/x-icon"
                />
            </head>
            <body className={nunito.className}>
                <NextTopLoader height={1} />
                <SidebarContextProvider>
                    <Sidebar />
                    <main className="main relative w-full lg:w-[calc(100%_-_13rem)] px-2 lg:left-48 bottom-0">
                        <Navbar />
                        {children}

                        <Footer />
                    </main>
                </SidebarContextProvider>
            </body>
        </html>
    )
}

export default RootLayout
