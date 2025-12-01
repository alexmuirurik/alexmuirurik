import About from "@/src/components/dashboard/About";
import Contact from "@/src/components/dashboard/Contact";
import PageHero from "../components/template/PageHero";

const Home = () => {
    return (
        <div className="home-wapper">
            <PageHero  pagename="Welcome" />
            <About />
            <Contact />
        </div>
    );
}

export default Home
