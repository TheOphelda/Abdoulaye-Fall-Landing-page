'use client';

import React, { useState } from 'react';
import { Play, Download, Image as ImageIcon, Video } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    {
      src: '/images/5a24bd0b-032c-40db-8f9f-331c4216641c.jpg',
      alt: 'Abdoulaye Fall - Portrait officiel',
      category: 'Portrait'
    },
    {
      src: '/images/94ced81b-3665-41e7-8fd1-ef421153aab4.jpg',
      alt: 'Abdoulaye Fall - En action',
      category: 'Événements'
    },
    {
      src: '/images/6273a2cb-82d8-44b9-abf5-f0cf3d906137.jpg',
      alt: 'Abdoulaye Fall',
      category: 'Rencontres'
    },
    {
      src: '/images/a1cd0dcb-95a1-4151-a6ec-1e7d23198480.jpg',
      alt: 'Abdoulaye Fall',
      category: 'Événements'
    },
    {
      src: '/images/c8b25cbe-3626-4ebc-a6b9-06dd14278743.jpg',
      alt: 'Abdoulaye Fall',
      category: 'Terrain'
    }
  ];

  const videoFiles = [
    "134d61e5-1db7-49fd-b5b7-04073c6cb745.mp4",
    "d5cc4564-2784-4ad2-8ec0-6a82d74211c3.mp4"
  ];
  const videos = videoFiles.map((file, i) => {
    const base = file.replace(/\.[^/.]+$/, "");
    const jpgThumb = `/images/vid/${base}.jpg`;
    const pngThumb = `/images/vid/${base}.png`;
    const titles = [
      'Parrainage de la finale régionale de Louga',
      'Parrainage de la finale régionale de Saint-Louis'
    ];
    return {
      title: titles[i] || file,
      src: `/images/vid/${file}`,
      thumbnail: jpgThumb,
      fallbackThumbnail: pngThumb,
      defaultThumbnail: "/images/video-default-thumb.jpg",
      duration: '',
      description: ''
    };
  });

  const categories = ['Tous', 'Portrait', 'Événements', 'Rencontres', 'Terrain'];
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const photoModalRef = React.useRef<HTMLDivElement>(null);

  const filteredPhotos = selectedCategory === 'Tous' 
    ? photos 
    : photos.filter((p) => p.category === selectedCategory);

  // Pour navigation entre photos
  // Corrige si selectedPhoto n'est plus dans la liste (ex : changement de catégorie)
  React.useEffect(() => {
    if (showPhotoModal && selectedPhoto && !filteredPhotos.some(p => p.src === selectedPhoto)) {
      setShowPhotoModal(false);
      setSelectedPhoto(null);
    }
  }, [filteredPhotos, showPhotoModal, selectedPhoto]);

  const photoIndex = selectedPhoto ? filteredPhotos.findIndex(p => p.src === selectedPhoto) : -1;
  // Utilitaire pour forcer le plein écran natif sur desktop
  const ensureFullscreen = () => {
    if (photoModalRef.current && typeof window !== 'undefined') {
      if (window.innerWidth >= 768 && photoModalRef.current.requestFullscreen && !document.fullscreenElement) {
        photoModalRef.current.requestFullscreen().catch(() => {});
      }
    }
  };
  const nextPhoto = () => {
    if (filteredPhotos.length < 2) return;
    const nextIdx = (photoIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIdx].src);
    setTimeout(ensureFullscreen, 10);
  };
  const prevPhoto = () => {
    if (filteredPhotos.length < 2) return;
    const prevIdx = (photoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIdx].src);
    setTimeout(ensureFullscreen, 10);
  };


  // Navigation clavier
  React.useEffect(() => {
    if (!showPhotoModal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') setShowPhotoModal(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showPhotoModal, photoIndex, filteredPhotos]);

  // Plein écran natif pour desktop
  React.useEffect(() => {
    if (showPhotoModal) {
      ensureFullscreen();
    }
    // On sort du fullscreen si on ferme le modal
    if (!showPhotoModal && typeof document !== 'undefined' && document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
  }, [showPhotoModal]);



  return (
    <section id="medias" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Médias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Galerie photos et vidéos retraçant le parcours et les actions d'Abdoulaye Fall
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-2 flex">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${
                activeTab === 'photos'
                  ? 'bg-white text-green-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ImageIcon size={20} className="mr-2" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${
                activeTab === 'videos'
                  ? 'bg-white text-green-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Video size={20} className="mr-2" />
              Vidéos
            </button>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => (
  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg card-hover">
    <img
      src={photo.src}
      alt={photo.alt}
      className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl cursor-pointer"
      style={{ objectPosition: '50% 25%' }}
      onClick={() => {
        setSelectedPhoto(photo.src);
        setShowPhotoModal(true);
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="font-medium">{photo.alt}</p>
      <span className="text-sm text-gray-300">{photo.category}</span>
    </div>
    <a
      href={photo.src}
      download
      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
      onClick={e => e.stopPropagation()}
      title="Télécharger la photo"
    >
      <Download size={20} className="text-white" />
    </a>
  </div>
))} 
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="relative">
                  <video
                    src={video.src}
                    className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
                    style={{ objectPosition: '50% 30%' }}
                    preload="metadata"
                    muted
                    playsInline
                    tabIndex={-1}
                    aria-label={video.title}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
  <button
    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
    onClick={() => {
      setSelectedVideo(video.src);
      setShowVideoModal(true);
    }}
    aria-label={`Lire la vidéo ${video.title}`}
  >
    <Play size={24} className="text-white ml-1 group-hover:scale-110 transition-transform" />
  </button>
</div>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    {/* Modal vidéo fullscreen */}
    {showVideoModal && selectedVideo && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fadein">
        <button
          onClick={() => setShowVideoModal(false)}
          className="absolute top-6 right-6 bg-white/80 hover:bg-red-600 hover:text-white text-red-700 px-4 py-2 rounded-full shadow-lg font-semibold text-base transition-all duration-300 ease-in-out focus:outline-none"
          aria-label="Fermer la vidéo"
        >
          ✕
        </button>
        <video
          controls
          autoPlay
          className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white object-contain animate-fadein"
        >
          <source src={selectedVideo || undefined} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de cette vidéo.
        </video>
      </div>
    )}

    {/* Modal photo fullscreen */}
    {showPhotoModal && selectedPhoto && (
      <div ref={photoModalRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fadein">
        <button
          onClick={() => setShowPhotoModal(false)}
          className="absolute top-6 right-6 bg-white/80 hover:bg-red-600 hover:text-white text-red-700 px-4 py-2 rounded-full shadow-lg font-semibold text-base transition-all duration-300 ease-in-out focus:outline-none"
          aria-label="Fermer la photo"
        >
          ✕
        </button>
        {/* Flèche gauche */}
        {filteredPhotos.length > 1 && (
          <button
            onClick={prevPhoto}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-green-600 hover:text-white text-green-700 px-4 py-2 rounded-full shadow-lg font-semibold text-2xl transition-all duration-300 ease-in-out focus:outline-none"
            aria-label="Photo précédente"
          >
            &#8592;
          </button>
        )}
        <img
          src={selectedPhoto}
          alt="Aperçu photo"
          className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white object-contain animate-fadein"
        />
        {/* Flèche droite */}
        {filteredPhotos.length > 1 && (
          <button
            onClick={nextPhoto}
            className="absolute right-20 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-green-600 hover:text-white text-green-700 px-4 py-2 rounded-full shadow-lg font-semibold text-2xl transition-all duration-300 ease-in-out focus:outline-none"
            aria-label="Photo suivante"
          >
            &#8594;
          </button>
        )}
      </div>
    )}
  </section>
  );
};

export default Media;