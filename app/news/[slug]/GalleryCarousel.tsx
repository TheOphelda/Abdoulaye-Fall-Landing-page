"use client";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryCarousel({ images, onImageClick }: { images: string[]; onImageClick?: (src: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollTo = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    const maxIdx = images.length - 1;
    let newIdx = scrollIndex + (dir === "right" ? 1 : -1);
    newIdx = Math.max(0, Math.min(newIdx, maxIdx));
    setScrollIndex(newIdx);
    scrollRef.current.scrollTo({
      left: newIdx * (width * 0.6),
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      <button
        onClick={() => scrollTo("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow border border-gray-200 disabled:opacity-30"
        disabled={scrollIndex === 0}
        aria-label="Précédent"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-4 px-8 snap-x snap-mandatory scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="snap-center flex-shrink-0 group transition-transform duration-300"
            style={{ width: 320, height: 200 }}
          >
            <img
              src={src}
              alt={`Photo ${i + 1}`}
              className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300 cursor-pointer animate-fadein"
              loading="lazy"
              onClick={onImageClick ? () => onImageClick(src) : undefined}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => scrollTo("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow border border-gray-200 disabled:opacity-30"
        disabled={scrollIndex === images.length - 1}
        aria-label="Suivant"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}
