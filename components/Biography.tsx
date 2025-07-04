'use client';

import { Award, Users, Target, Heart } from 'lucide-react';

const Biography = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Intégrité',
      description: 'Une gestion transparente et éthique de la fédération'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Unité',
      description: 'Rassembler tous les acteurs du football sénégalais'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Viser les plus hauts standards internationaux'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'Un amour inconditionnel pour le football sénégalais'
    }
  ];

  return (
    <section id="biographie" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Biographie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un parcours dédié au service du football et du développement du Sénégal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Portrait */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/94ced81b-3665-41e7-8fd1-ef421153aab4.jpg"
                alt="Abdoulaye Fall - Portrait"
                className="w-full h-[600px] object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Débuts et Formation</h3>
              <p className="text-gray-700 leading-relaxed">
                Abdoulaye Fall a forgé son caractère et sa vision à travers un parcours riche et diversifié. 
                Diplômé en gestion et management, il a très tôt développé une passion pour le leadership 
                et l'organisation, qualités qui l'ont naturellement mené vers le monde du football.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expériences Professionnelles Clés</h3>
              <p className="text-gray-700 leading-relaxed">
                Fort de plus de 15 années d'expérience dans la gestion d'organisations complexes, 
                Abdoulaye Fall a occupé des postes de direction dans plusieurs secteurs stratégiques. 
                Son expertise en gouvernance et sa capacité à fédérer les équipes font de lui un leader reconnu.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement dans le Football</h3>
              <p className="text-gray-700 leading-relaxed">
                Passionné de football depuis son plus jeune âge, Abdoulaye Fall s'est progressivement 
                impliqué dans la gouvernance du football sénégalais. Membre actif de plusieurs commissions, 
                il a contribué à de nombreuses réformes structurelles et initiatives de développement.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Valeurs et Vision
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Ma vision pour le football sénégalais s'articule autour de quatre piliers fondamentaux : 
              la modernisation des infrastructures, le développement des jeunes talents, 
              la professionnalisation de la gestion, et le rayonnement international de notre football. 
              Ensemble, nous pouvons faire du Sénégal une référence mondiale en matière de football.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;