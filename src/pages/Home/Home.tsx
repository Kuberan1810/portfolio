import HorizontalLine from "../../components/HorizontalLine";
import Hero from "./section/hero";
import About from "./section/about";
import WhoIam from "./section/WhoIam";
import Skills from "./section/skills";
import PortfolioShowcase from "./section/portfolioShowcase";
import CareerTimeline from "./section/careerTimeline";
import Footer from "./section/footer";

const Home = () => {
  return (
    <div>
      <div id="home">
        <HorizontalLine />
        <Hero />
      </div>
      
      {/* Blurred transition boundary between Hero and About */}
      <div className="relative z-10 w-full font-urbanist">
        <div 
          className="absolute left-0 right-0 -translate-y-1/2 h-40 bg-gradient-to-b from-transparent via-[#F5F5F3]/40 to-transparent backdrop-blur-lg pointer-events-none z-0"
          style={{ top: '50%' }}
        />
        <HorizontalLine className="relative z-10" />
      </div>

      <div id="about">
        <About />
        <HorizontalLine />
        <WhoIam />
      </div>
      
      <HorizontalLine />
      
      <div id="skills">
        <Skills />
      </div>
      
      <HorizontalLine />
      
      <div id="projects">
        <PortfolioShowcase />
      </div>
      
      <HorizontalLine />
      
      <div id="experience">
        <CareerTimeline />
      </div>
      
      <HorizontalLine />
      
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
