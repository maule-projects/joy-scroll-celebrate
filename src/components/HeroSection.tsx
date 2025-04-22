
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Heart } from "lucide-react";

interface HeroSectionProps {
  name: string;
}

const HeroSection = ({ name }: HeroSectionProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="scroll-section relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-white overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated background elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.1
            }}
          >
            {i % 2 === 0 ? (
              <Heart className="text-white" size={20} />
            ) : (
              <Sparkles className="text-white" size={16} />
            )}
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 
          className={`text-6xl md:text-8xl font-dancing mb-4 transform transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
          }`}
        >
          Happy Birthday,
        </h1>
        
        <h2 
          className={`text-7xl md:text-9xl font-bold mb-8 transform transition-all duration-1000 delay-300 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
          }`}
        >
          {name}!
        </h2>
        
        <p 
          className={`text-2xl md:text-3xl mb-12 transform transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          ✨ Today is your special day — let's make it unforgettable! ✨
        </p>
      </div>
      
      <a 
        href="#memory-lane" 
        className={`absolute bottom-8 animate-bounce transition-all duration-1000 delay-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown size={48} strokeWidth={1} className="text-white hover:text-pink-200 transition-colors" />
      </a>
    </section>
  );
};

export default HeroSection;
