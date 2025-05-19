import About from "@/src/components/dashboard/About";
import Contact from "@/src/components/dashboard/Contact";
import Hero from "@/src/components/dashboard/Hero";

const Home = () => {
    return (
        <div className="home-wapper">
            <Hero />
            <About />
            <Contact />
        </div>
    );
}

export default Home
