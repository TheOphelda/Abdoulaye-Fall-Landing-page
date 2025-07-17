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
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Parcours & Engagement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un grand commis de l’État au service du football
          </p>
        </div>

        {/* Introduction courte détachée */}
        <div className="max-w-3xl mx-auto mb-12 bg-white/80 rounded-xl shadow p-6 text-center">
          <h3 className="text-2xl font-bold text-indigo-700 mb-2">Un leader engagé pour le football sénégalais</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Abdoulaye Fall, Inspecteur Principal du Trésor, s’est illustré par son engagement sans faille dans le développement du football au Sénégal. Son parcours unique allie expertise en gestion, passion du sport et leadership reconnu.
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
          <div className="flex flex-col gap-12 h-[600px] overflow-y-auto relative">
  {/* Fade effect en bas si scroll */}
  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-10" style={{display: 'none'}} id="bio-fade" />

  {/* Réalisations sportives majeures */}
  <div>
    <h3 className="text-2xl font-bold text-indigo-700 mb-4">Réalisations sportives majeures</h3>
    <div className="grid md:grid-cols-2 gap-6">
  <div className="bg-gradient-to-br from-indigo-100 to-white rounded-xl shadow-lg p-4 border-l-8 border-indigo-600 transition-transform hover:scale-105 hover:shadow-2xl flex items-start gap-3">
    <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.44 4.73L5.8 21z"></path></svg>
    <div>
      <h4 className="font-bold text-base text-gray-900 mb-1">Président de l’ASC Réveil de Bambey</h4>
      <p className="text-gray-700 text-sm">10 ans de présidence, plusieurs trophées remportés et structuration du club.</p>
    </div>
  </div>
  <div className="bg-gradient-to-br from-green-100 to-white rounded-xl shadow-lg p-4 border-l-8 border-green-600 transition-transform hover:scale-105 hover:shadow-2xl flex items-start gap-3">
    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
    <div>
      <h4 className="font-bold text-base text-gray-900 mb-1">Président de la Ligue de Football de Diourbel</h4>
      <p className="text-gray-700 text-sm">Depuis 2017, mise en place de subventions, équipements professionnels et financements pour les clubs. Plusieurs équipes accèdent à des divisions supérieures.</p>
    </div>
  </div>
  <div className="bg-gradient-to-br from-yellow-100 to-white rounded-xl shadow-lg p-4 border-l-8 border-yellow-500 transition-transform hover:scale-105 hover:shadow-2xl flex items-start gap-3">
    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    <div>
      <h4 className="font-bold text-base text-gray-900 mb-1">Création de Baol Académie</h4>
      <p className="text-gray-700 text-sm">Lancement d’une académie d’excellence, participation à un tournoi international U15 au Maroc en 2023.</p>
    </div>
  </div>
  <div className="bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-lg p-4 border-l-8 border-blue-600 transition-transform hover:scale-105 hover:shadow-2xl flex items-start gap-3">
    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
    <div>
      <h4 className="font-bold text-base text-gray-900 mb-1">Membre influent des instances nationales et africaines</h4>
      <p className="text-gray-700 text-sm">Membre de la Fédération Sénégalaise de Football, de la CAF (commission audit et conformité), président de la commission des finances de la FSF (2021-2022).</p>
    </div>
  </div>
</div>
  </div>


</div>
        </div>

        {/* Timeline & Distinctions en bas - version compacte accordéon */}
        <div className="max-w-5xl mx-auto mt-12 flex flex-col gap-6">
          {/* Accordéon Parcours */}
          <div className="bg-white/90 rounded-xl shadow p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Parcours & Engagement</h3>
            <ul className="flex flex-col gap-1">
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">1982</span>Président du comité culturel de l’ASC Penth de Bambey et joueur cadet</li>
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">1988</span>Création et joueur de l’ASC Diwane</li>
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">1989</span>Dirigeant à l’ASC Santos de Louga</li>
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">1999-2009</span>Président de l’ASC Réveil de Bambey, nombreux trophées</li>
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">2010-2011</span>Président de l’ASC Bambey, montée en division régionale</li>
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">2017</span>Président de la Ligue de Football de Diourbel</li>
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">2018</span>Membre de la CAF (commission audit et conformité)</li>
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">2021</span>Président commission finances FSF, réélu président de Ligue, lancement Baol Académie</li>
              <li className="flex text-sm text-gray-700"><span className="w-20 font-bold text-indigo-700">2023</span>Participation de Baol Académie au tournoi international U15 au Maroc</li>
            </ul>
          </div>
          {/* Distinctions compactes */}
          <div className="bg-white/90 rounded-xl shadow p-4 flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <h3 className="text-base font-bold text-gray-900 mb-1 sm:mb-0">Distinctions :</h3>
            <ul className="flex flex-wrap gap-3 text-xs text-gray-700 mb-0 list-none pl-0">
              <li className="bg-indigo-50 px-2 py-1 rounded">Inspecteur Principal du Trésor</li>
              <li className="bg-indigo-50 px-2 py-1 rounded">Chevalier de l’Ordre National du Lion</li>
              <li className="bg-indigo-50 px-2 py-1 rounded">Médaillé d’Honneur de la Gendarmerie Nationale du Sénégal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;