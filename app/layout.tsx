import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/template/Footer";
import Navbar from "@/components/template/Navbar";
import Sidebar from "@/components/template/Sidebar";
import NextTopLoader from "nextjs-toploader";


const inter = Inter({ subsets: ["latin"] });
const nunito= Nunito({subsets:['latin']})

export const metadata: Metadata = {
	title: "My Resume | Alex Muiruri - https://alexmuiruri.com",
	description: "Full-stack Web Developer | Javascript, React, NodeJS | Python, Django | PHP, Laravel| HTML | CSS ", 
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" data-theme='dark'>
			<head>
				<link rel="shortcut icon" href="/img/hhjf.webp" type="image/x-icon" />
			</head>
			<body className={nunito.className}>
				<NextTopLoader height={1} />
				<Sidebar />
				<main className="main relative w-full lg:w-[calc(100%_-_13rem)] lg:left-48 bottom-0">
					<Navbar />

					{children}					
					
					<Footer />
				</main>
			</body>
		</html>
	);
}
