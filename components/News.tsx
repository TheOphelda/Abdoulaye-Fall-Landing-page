'use client';

import Link from 'next/link';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "Présent lors du match de gala pour la remise des trophées Ligue 1 et Ligue 2 (LSFP) 2024/2025",
      excerpt: "Retour en images sur la cérémonie de remise des trophées de la Ligue 1 et Ligue 2, saison 2024/2025, lors du match de gala du 8 juillet 2025.",
      date: "08 Juillet 2025",
      readTime: "Galerie",
      image: "/images/8july/IMG-20250709-WA0015.jpg",
      category: "Evénement",
      slug: "gala-trophees-ligue1-ligue2-8-juillet-2025"
    },
    {
      title: "Ce jeudi 03 juillet 2025, j’ai eu le privilège d’être le parrain de la grande finale senior de la Ligue Régionale de Football de Saint-Louis, organisée à Ross Béthio",
      excerpt: "Retour sur la grande finale senior à Saint-Louis, une célébration du football local et de l’engagement pour la jeunesse. Cliquez sur lire la suite pour voir toutes les photos et le récit.",
      date: "03 Juillet 2025",
      readTime: "Galerie",
      image: "/images/3july/01dfbe6d-ce65-4081-bfd9-4985c0cb3cc8.JPG",
      category: "Evénement",
      slug: "finale-senior-saint-louis-3-juillet-2025"
    },
    {
      title: "Le mercredi 02 juillet 2025, j'ai eu l'honneur d'être le parrain officiel des finales juniors et seniors de la ligue régionale de football",
      excerpt: "Retour en images sur cette journée mémorable. Cliquez sur lire la suite pour voir toutes les photos.",
      date: "02 Juillet 2025",
      readTime: "Galerie",
      image: "/images/2july/389e83ca-5941-4102-9be8-476d5c26c12b.jpg",
      category: "Evénement",
      slug: "finales-juniors-seniors-2-juillet-2025"
    }
  ];

  const upcomingEvents = [
    { title: "Parrain de la finale de la ligue régionale de football de SEDHIOU", date: "21 JUIN 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de TAMBA", date: "28 JUIN 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de KEDOUGOU", date: "29 JUIN 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de LOUGA", date: "02 JUILLET 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de SAINT LOUIS", date: "03 JUILLET 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de DAKAR", date: "10 JUILLET 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de MATAM", date: "A déterminer" },
    { title: "Parrain de la finale de la ligue régionale de football de KOLDA", date: "15 JUILLET 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de THIES", date: "A déterminer" },
    { title: "Parrain de la finale de la ligue régionale de football de KAOLACK", date: "26 JUILLET 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de KAFFRINE", date: "25 JUILLET 2025" },
    { title: "Parrain de la finale de la ligue régionale de football de DIOURBEL", date: "27 JUILLET 2025" }
  ];

  // Séparation événements à venir / passés
  const moisFr: Record<string, string> = {
    'JANVIER': '01', 'FÉVRIER': '02', 'FEVRIER': '02', 'MARS': '03', 'AVRIL': '04', 'MAI': '05', 'JUIN': '06', 'JUILLET': '07', 'AOÛT': '08', 'AOUT': '08', 'SEPTEMBRE': '09', 'OCTOBRE': '10', 'NOVEMBRE': '11', 'DÉCEMBRE': '12', 'DECEMBRE': '12'
  };
  function parseDateFr(dateStr: string): Date | null {
    if (!dateStr) return null;
    const parts = dateStr.trim().split(' ');
    if (parts.length !== 3) return null;
    const [day, mois, year] = parts;
    const mm = moisFr[mois.toUpperCase()] || '01';
    return new Date(`${year}-${mm}-${day.padStart(2, '0')}T00:00:00`);
  }
  const today = new Date('2025-07-08T12:27:43Z'); // Date du jour (UTC)
  const eventsAVenir = upcomingEvents.filter(e => {
    const d = parseDateFr(e.date);
    return d && d >= today;
  });
  const eventsPasses = upcomingEvents.filter(e => {
    const d = parseDateFr(e.date);
    return d && d < today;
  });

  return (
    <section id="actualites" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nos progrès, événements et engagements au quotidien. 
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
                    {article.slug && (
  <Link
    href={`/news/${article.slug}`}
    className="text-green-600 hover:text-green-700 font-medium flex items-center"
  >
    Lire la suite
    <ExternalLink size={16} className="ml-1" />
  </Link>
)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl p-8 shadow-lg w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prochains Événements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {eventsAVenir.length === 0 && (
                <div className="text-gray-500">Aucun événement à venir.</div>
              )}
              {eventsAVenir.map((event, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-6 py-4 bg-gray-50 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
            {/* Événements passés */}
            <h3 className="text-xl font-bold text-gray-700 mb-4 mt-8">Événements Passés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-60">
              {eventsPasses.length === 0 && (
                <div className="text-gray-400">Aucun événement passé.</div>
              )}
              {eventsPasses.map((event, index) => (
                <div key={index} className="border-l-4 border-gray-400 pl-6 py-4 bg-gray-100 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-700 mb-2">{event.title}</h4>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
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