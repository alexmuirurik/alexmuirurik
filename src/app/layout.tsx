import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import Footer from '@/src/components/template/Footer'
import Navbar from '@/src/components/template/Navbar'
import Sidebar from '@/src/components/template/Sidebar'
import { SidebarContextProvider } from '@/src/context/usesidebar'
import './globals.css'
import { Toaster } from '../components/ui/sonner'
import { siteMeta } from '../lib/sitemeta'

const nunito = Nunito({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
    title: 'My Resume | Alex Muiruri - https://alexmuiruri.com',
    description:
        'Full-stack Web Developer | Javascript, React, NodeJS | Python, Django | PHP, Laravel| HTML | CSS ',
    icons: [
        {
            rel: 'icon',
            href: '/img/home/favicon.png',
            type: 'image/png',
            url: '/img/home/favicon.png',
        },
    ],
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" data-theme="dark">
            <body className={nunito.className}>
                <NextTopLoader height={1} />
                <SidebarContextProvider>
                    <Sidebar />
                    <main
                        id="main"
                        className="main relative w-full lg:w-[calc(100%_-_13rem)] px-2 lg:left-48 bottom-0"
                    >
                        {/* <Navbar /> */}
                        {children}
                        <Toaster richColors expand />
                        <Footer />
                    </main>
                </SidebarContextProvider>
            </body>
        </html>
    )
}

export default RootLayout
