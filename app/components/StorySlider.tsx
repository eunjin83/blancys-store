"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/story-1.jpg",
    href: "/shop/suede-shirring-hobo-bag",
    label: "Suede Shirring Hobo Bag",
  },
  {
    image: "/story-2.jpg",
    href: "/shop/city-shoulder-bag",
    label: "City Shoulder Bag",
  },
  {
    image: "/story-3.jpg",
    href: "/shop/nylon-hobo-bag",
    label: "Nylon Hobo Bag",
  },
  {
    image: "/story-4.jpg",
    href: "/shop/cookie-and-cream-bag",
    label: "Cookie and Cream Bag",
  },
  {
    image: "/story-5.jpg",
    href: "/shop/espresso-black-bag",
    label: "Espresso Black Bag",
  },
];

const sliderItems = [...slides, slides[0]];

export default function StorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const resettingRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!resettingRef.current) {
        setTransitionEnabled(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      resettingRef.current = true;

      setTransitionEnabled(false);
      setCurrentIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          resettingRef.current = false;
          setTransitionEnabled(true);
        });
      });
    }
  };

  return (
    <div className="storySlider">
      <div
        className="storySliderTrack"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionEnabled
            ? "transform 0.8s ease-in-out"
            : "none",
        }}
      >
        {sliderItems.map((slide, index) => (
          <Link
            key={`${slide.image}-${index}`}
            href={slide.href}
            className="storySlide"
            aria-label={`View ${slide.label}`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="storySlideImage"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}