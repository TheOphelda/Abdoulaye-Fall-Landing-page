'use client';

import { Calendar, Clock, ExternalLink } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "Lorem Ipsum Dolor",
      excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "15 Janvier 2025",
      readTime: "5 min",
      image: "/images/a1cd0dcb-95a1-4151-a6ec-1e7d23198480.jpg",
      category: "Programme"
    },
    {
      title: "Consectetur Adipiscing Elit",
      excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      date: "12 Janvier 2025",
      readTime: "3 min",
      image: "/images/6273a2cb-82d8-44b9-abf5-f0cf3d906137.jpg",
      category: "Terrain"
    },
    {
      title: "Quis Autem Vel Eum",
      excerpt: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      date: "8 Janvier 2025",
      readTime: "4 min",
      image: "/images/c8b25cbe-3626-4ebc-a6b9-06dd14278743.jpg",
      category: "International"
    }
  ];

  const upcomingEvents = [
    {
      title: "Lorem Ipsum Dolor",
      date: "20 Janvier 2025",
      time: "15h00",
      location: "Sed ut perspiciatis"
    },
    {
      title: "Consectetur Adipiscing",
      date: "25 Janvier 2025",
      time: "10h00",
      location: "Quis autem vel eum"
    },
    {
      title: "Quis Autem Vel Eum",
      date: "30 Janvier 2025",
      time: "14h00",
      location: "Nemo enim ipsam"
    }
  ];

  const mediaAppearances = [
    {
      title: "Lorem Ipsum Dolor",
      media: "RTS1 - Journal de 20h",
      date: "18 Janvier 2025",
      type: "Télévision"
    },
    {
      title: "Consectetur Adipiscing",
      media: "Radio Futurs Médias",
      date: "16 Janvier 2025",
      type: "Radio"
    },
    {
      title: "Quis Autem Vel Eum",
      media: "SenFootball Podcast",
      date: "14 Janvier 2025",
      type: "Podcast"
    }
  ];

  return (
    <section id="actualites" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Latest Articles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Articles Récents</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 35%' }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                      Lire la suite
                      <ExternalLink size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prochains Événements</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {event.date} à {event.time}
                    </div>
                    <div className="flex items-center">
                      <ExternalLink size={16} className="mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Appearances */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Passages Médias</h3>
            <div className="space-y-6">
              {mediaAppearances.map((appearance, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">{appearance.title}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{appearance.media}</div>
                    <div className="flex items-center justify-between">
                      <span>{appearance.date}</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {appearance.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;