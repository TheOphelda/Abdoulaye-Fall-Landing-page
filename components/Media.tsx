'use client';

import { useState } from 'react';
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
      alt: 'Rencontre avec les acteurs du football',
      category: 'Rencontres'
    },
    {
      src: '/images/a1cd0dcb-95a1-4151-a6ec-1e7d23198480.jpg',
      alt: 'Conférence de presse',
      category: 'Événements'
    },
    {
      src: '/images/c8b25cbe-3626-4ebc-a6b9-06dd14278743.jpg',
      alt: 'Visite terrain',
      category: 'Terrain'
    }
  ];

  const videos = [
    {
      title: 'Discours de candidature - Vision 2030',
      thumbnail: '/images/5a24bd0b-032c-40db-8f9f-331c4216641c.jpg',
      duration: '12:45',
      description: 'Présentation complète du programme pour le football sénégalais'
    },
    {
      title: 'Interview RTS1 - Les enjeux du football moderne',
      thumbnail: '/images/94ced81b-3665-41e7-8fd1-ef421153aab4.jpg',
      duration: '25:30',
      description: 'Échange sur les défis et opportunités du football sénégalais'
    },
    {
      title: 'Rencontre avec les jeunes footballeurs',
      thumbnail: '/images/c8b25cbe-3626-4ebc-a6b9-06dd14278743.jpg',
      duration: '8:15',
      description: 'Dialogue avec la nouvelle génération de talents'
    }
  ];

  const categories = ['Tous', 'Portrait', 'Événements', 'Rencontres', 'Terrain'];
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredPhotos = selectedCategory === 'Tous' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ objectPosition: '50% 25%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium">{photo.alt}</p>
                    <span className="text-sm text-gray-300">{photo.category}</span>
                  </div>
                  <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30">
                    <Download size={20} className="text-white" />
                  </button>
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
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                    style={{ objectPosition: '50% 30%' }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
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
    </section>
  );
};

export default Media;