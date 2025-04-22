
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Memory {
  id: number;
  image: string;
  caption: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: 'https://photos.app.goo.gl/HFbjf4BYgwDp1yeCA',
    caption: "✨ Creating memories that last forever"
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/600x400?party',
    caption: "🎉 Celebrating life's beautiful moments"
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/600x400?travel',
    caption: "🌟 Adventures together are the best adventures"
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/random/600x400?celebration',
    caption: "💫 Every moment with you is special"
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/random/600x400?cake',
    caption: "🎂 Sweet memories of celebration"
  },
  {
    id: 6,
    image: 'https://source.unsplash.com/random/600x400?nature',
    caption: "🌈 Beautiful moments, beautiful you"
  }
];

const MemoryLane = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section 
      id="memory-lane" 
      ref={ref}
      className="scroll-section bg-gradient-to-b from-pink-50 to-purple-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            size={24}
            className="absolute text-pink-200 animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>
      
      <h2 className={`section-title text-4xl md:text-5xl font-dancing text-birthday-purple transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Memory Lane
      </h2>
      
      <div className={`w-full max-w-4xl mx-auto relative transition-all duration-1000 delay-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
          <Slider ref={sliderRef} {...settings}>
            {memories.map((memory) => (
              <div key={memory.id}>
                <div className="relative px-2">
                  <img 
                    src={memory.image} 
                    alt={`Memory ${memory.id}`} 
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-2 right-2 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-8 rounded-b-2xl">
                    <p className="text-2xl font-dancing">{memory.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 transition-all transform hover:scale-110 hover:shadow-lg"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 transition-all transform hover:scale-110 hover:shadow-lg"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>
      </div>
    </section>
  );
};

export default MemoryLane;
