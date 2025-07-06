'use client';

import { Trophy, Users, Building, Globe } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Modernisation des Infrastructures',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      stats: '8 projets réalisés'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Développement des Jeunes',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      stats: '2000+ jeunes formés'
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Football Féminin',
      description: 'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      stats: '12 ligues créées'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Rayonnement International',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      stats: '15 partenariats'
    }
  ];

  const testimonials = [
    {
      quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      author: "Lorem Ipsum",
      title: "Ancien international sénégalais"
    },
    {
      quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      author: "Dolor Sit Amet",
      title: "Présidente Ligue Féminine Dakar"
    },
    {
      quote: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      author: "Consectetur Adipiscing",
      title: "Entraîneur régional"
    }
  ];

  return (
    <section id="realisations" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover group">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
              <div className="text-green-600 font-semibold text-lg">{achievement.stats}</div>
            </div>
          ))}
        </div>

        {/* Featured Project */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Projet Phare : Académie Jeunes Talents</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">14</div>
                  <div className="text-sm opacity-90">Régions couvertes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2000+</div>
                  <div className="text-sm opacity-90">Jeunes formés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Entraîneurs certifiés</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/c8b25cbe-3626-4ebc-a6b9-06dd14278743.jpg"
                alt="Académie Jeunes Talents"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Témoignages
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover">
                <div className="text-4xl text-green-600 mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;