// src/components/AutoSlider.tsx

import React from 'react';
import slideChamparan from '@/assets/slider/slide-champaran-handi-mutton.jpg';
import slideBiryaniPot from '@/assets/slider/slide-mutton-biryani-copper-pot.jpg';
import slideDumBiryani from '@/assets/slider/slide-dum-mutton-biryani.jpg';
import slideKolkataBiryani from '@/assets/slider/slide-kolkata-mutton-biryani.jpg';
import slideChickenBiryani from '@/assets/slider/slide-chicken-biryani-herbs.jpg';
import slideSpicyBiryani from '@/assets/slider/slide-spicy-mutton-biryani.jpg';
import slideGrandThali from '@/assets/slider/slide-grand-thali-platter.jpg';
import slideTraditionalThali from '@/assets/slider/slide-traditional-mutton-thali.jpg';

interface Slide {
  id: string;
  image: string;
  title: string;
}

const slides: Slide[] = [
  {
    id: '05',
    image: slideChamparan,
    title: 'Champaran Handi Mutton',
  },
  {
    id: '06',
    image: slideBiryaniPot,
    title: 'Authentic Champaran Ahuna Mutton',
  },
  {
    id: '07',
    image: slideDumBiryani,
    title: 'Dum Style Mutton Biryani',
  },
  {
    id: '08',
    image: slideKolkataBiryani,
    title: 'Rich Mutton Biryani with Egg & Potato',
  },
  {
    id: '09',
    image: slideChickenBiryani,
    title: 'Hyderabadi Chicken Biryani',
  },
  {
    id: '10',
    image: slideSpicyBiryani,
    title: 'Spicy Mutton Biryani South Indian Style',
  },
  {
    id: '11',
    image: slideGrandThali,
    title: 'Grand Mutton Thali Platter',
  },
  {
    id: '12',
    image: slideTraditionalThali,
    title: 'Traditional Indian Mutton Thali',
  },
];
// Duplicate first few items → seamless infinite loop
const duplicatedSlides = [...slides, ...slides.slice(0, 3)];

const AutoSlider: React.FC = () => {
  return (
    <div className="w-full py-12 md:py-16 bg-gray-950 overflow-hidden">
      <div className="relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Our Special Dishes
        </h2>

        {/* Slider wrapper */}
        <div className="overflow-hidden mx-auto">
          <div
            className="flex animate-slideLeftToRight whitespace-nowrap"
            style={{
              animationDuration: '35s',           // change speed here
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {duplicatedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] px-4  "
              >
                <div className="group relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800 hover:border-orange-600/50 transition-all duration-300">
                  {/* Image container */}
                  <div className="relative h-[380px] md:h-[440px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={index < 5 ? 'eager' : 'lazy'}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Number + Title at bottom */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end gap-4">
                      <div className="text-5xl md:text-5xl font-black text-orange-500/90 drop-shadow-lg leading-none">
                        {slide.id}
                      </div>
                      <div className="text-white">
                        <p className="text-md md:text-md font-semibold ">
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation – add this to your global CSS or component */}
      <style>{`
        @keyframes slideLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slideLeftToRight {
          animation: slideLeftToRight var(--duration, 35s) linear infinite;
        }

        /* Pause on hover */
        .overflow-hidden:hover .animate-slideLeftToRight {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AutoSlider;