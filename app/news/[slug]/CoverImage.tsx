"use client";
import React, { useState } from "react";

export default function CoverImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover animate-zoom-in"
      onError={() => setImgSrc("/default-cover.jpg")}
    />
  );
}
