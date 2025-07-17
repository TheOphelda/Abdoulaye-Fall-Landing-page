'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/6273a2cb-82d8-44b9-abf5-f0cf3d906137.jpg',
      title: 'Excellence et Intégrité',
      subtitle: 'Au service du développement du football',
      quote: `"Le football est bien plus qu'un jeu, c'est un vecteur d'unité, de développement et de fierté nationale. Mon engagement est total pour l'élever à de nouveaux sommets au Sénégal."`,
      ctas: [
        {
          href: '#biographie',
          label: 'Découvrez ma Biographie',
          style: 'btn-primary',
          icon: <ChevronRight className="ml-2" size={20} />
        },
        {
          href: '#realisations',
          label: 'Mes Projets pour le Football',
          style: 'btn-secondary',
          icon: <Play className="ml-2" size={20} />
        }
      ]
    },
    {
      image: 'images/invitation.png', // À remplacer par le vrai chemin de la bannière d'invitation
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } filter blur-sm`}
        >
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat transform translate-y--1/6"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          {slides[currentSlide].quote && (
            <blockquote className="text-lg md:text-xl text-yellow-300 italic mb-12 max-w-4xl mx-auto border-l-4 border-yellow-400 pl-6">
              {slides[currentSlide].quote}
            </blockquote>
          )}
          {/* CTA Buttons dynamiques */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {slides[currentSlide]?.ctas?.map((cta, idx) => (
              <Link key={idx} href={cta.href} className={`${cta.style} inline-flex items-center`}>
                {cta.label}
                {cta.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Aller au slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full border border-white transition bg-white/30 ${idx === currentSlide ? 'bg-white' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>

      {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce z-10">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-white rounded-full mt-3 animate-pulse" />
        </div>
      </div>*/}
    </section>
  );
};

export default Hero;