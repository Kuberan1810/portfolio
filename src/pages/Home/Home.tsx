import HorizontalLine from "../../components/HorizontalLine";
import Hero from "./section/hero";
import About from "./section/about";

const Home = () => {
  return (
    <div>
      <HorizontalLine />
      <Hero />
      
      {/* Blurred transition boundary between Hero and About */}
      <div className="relative z-10 w-full font-urbanist">
        <div 
          className="absolute left-0 right-0 -translate-y-1/2 h-40 bg-gradient-to-b from-transparent via-[#F5F5F3]/40 to-transparent backdrop-blur-lg pointer-events-none z-0"
          style={{ top: '50%' }}
        />
        <HorizontalLine className="relative z-10" />
      </div>

      <About />
      <HorizontalLine />
    </div>
  );
};

export default Home;
