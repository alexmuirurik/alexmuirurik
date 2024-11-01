import About from "@/components/dashboard/About";
import Contact from "@/components/dashboard/Contact";
import Hero from "@/components/dashboard/Hero";

export default function Home() {
    return (
        <div className="home-wapper">
            <Hero />
            <About />
            <Contact />
        </div>
    );
}
