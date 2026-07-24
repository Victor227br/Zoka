import { useState, useEffect } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


export const Carousel = ({ slides }) => {
  const getVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 3;
    return 2; // Mobile e Tablet
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
      setCurrent(0);
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(slides.length - visibleSlides, 0);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / visibleSlides)}%)`,
        }}>

        {slides.map((slide, index) => (
          <div
            key={index}
            className="
              w-1/2
              md:w-1/2
              lg:w-1/3
              flex-shrink-0
              px-2">
            <img src={slide} alt="" className="w-full h-[34vh] lg:h-[50vh] object-cover rounded-xl"/>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center text-gray-300 justify-between px-4 text-2xl lg:text-3xl">
        <button onClick={prevSlide}>
          <IoIosArrowDropleftCircle />
        </button>

        <button onClick={nextSlide}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};