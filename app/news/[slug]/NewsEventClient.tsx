"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import ImageModal from "@/components/ImageModal";

const GalleryCarousel = dynamic(() => import("./GalleryCarousel"), { ssr: false });
const MarkdownViewer = dynamic(() => import("./MarkdownViewer"), { ssr: false });
const CoverImage = dynamic(() => import("./CoverImage"), { ssr: false });

export default function NewsEventClient({ event, images }: { event: any; images: string[] }) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white">
      {/* HERO IMMERSIF */}
      <section className="relative w-full h-[320px] md:h-[480px] flex items-end justify-center overflow-hidden group">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <CoverImage
            src={event.cover || images[0] || "/default-cover.jpg"}
            alt={`Couverture de l'événement: ${event.title}`}
          />
          <div className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-10 text-center animate-fadein">
          <span className="inline-block bg-green-600/90 text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider shadow-md">
            Actualité
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-xl mb-4">
            {event.title}
          </h1>
          {event.subtitle && (
            <p className="text-lg md:text-2xl text-white/90 font-medium mb-2 drop-shadow animate-fadein-delay">
              {event.subtitle}
            </p>
          )}
        </div>
        <Link
          href="/"
          className="absolute top-6 left-6 bg-white/90 hover:bg-green-600 hover:text-white text-green-700 px-5 py-2 rounded-full shadow-lg font-semibold text-base transition-all duration-300 ease-in-out hover:scale-105 flex items-center gap-2 border border-green-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </Link>
      </section>

      {/* CONTENU PREMIUM */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="relative bg-white/95 rounded-3xl shadow-2xl p-6 md:p-12 mb-12 border border-gray-100 animate-fadein">
          {/* Barre d’infos */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Publié le : <span className="font-semibold text-gray-700">{new Date().toLocaleDateString('fr-FR')}</span>
              </span>
            </div>
          </div>
          <MarkdownViewer content={event.content} />
        </div>

        {/* GALERIE PREMIUM */}
        {images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center tracking-tight">
              <span className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text px-4 py-1 rounded-xl shadow-sm">
                Moments Forts en Images
              </span>
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 animate-fadein">
              <GalleryCarousel
                images={images}
                onImageClick={(src: string) => {
                  setSelectedImage(src);
                  setShowModal(true);
                }}
              />
            </div>
            <ImageModal
              src={selectedImage || ""}
              open={showModal}
              onClose={() => setShowModal(false)}
            />
          </div>
        )}
      </section>
    </main>
  );
}
