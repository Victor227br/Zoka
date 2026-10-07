import { useState, useEffect } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

export const Carousel = ({ slides }) => {
  const getVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
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
    <div className="relative w-full min-w-0 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / visibleSlides)}%)`,
        }}>

        {slides.map((slide, index) => (
          <div
            key={index}
              className="
              w-full
              sm:w-1/2
              lg:w-1/3
              flex-shrink-0
              px-1.5
              sm:px-2">
            <img src={slide} alt="" className="h-80 w-full rounded-xl object-cover sm:h-96 lg:h-[50vh]"/>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center text-gray-300 justify-between px-4 text-2xl lg:text-3xl">
        <button type="button" onClick={prevSlide} aria-label="Previous coffee image">
          <IoIosArrowDropleftCircle />
        </button>

        <button type="button" onClick={nextSlide} aria-label="Next coffee image">
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};
