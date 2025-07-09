'use client';

import { useState } from 'react';
import { Send, Lightbulb, Users, Target } from 'lucide-react';

const Projects = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        title: '',
        description: '',
        name: '',
        email: '',
        phone: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="projets" className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projets : Vision & Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 text-center">
            Découvrez des projets concrets, portés par l’innovation, l’impact et la jeunesse – pour un avenir ambitieux du football sénégalais.
          </p>
        </div>

        {/* Rubrique Projets */}
        <div className="mb-20 font-sans">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Projets Passés */}
            <div>
              <h3 className="text-base uppercase tracking-widest font-bold text-green-700 mb-6 letter-spacing-wide">Projets passés</h3>
              <ul className="space-y-6">
                <li className="bg-white rounded-3xl shadow-lg p-7 transition-transform hover:-translate-y-1 hover:shadow-2xl border border-green-100">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Présidence de l’ASC Penth de Bambey (1982)</h4>
                  <ul className="text-gray-700 text-sm space-y-1 pl-3 list-disc">
                    <li><span className="font-semibold">Impact :</span> Premier engagement associatif, dynamisation de la vie culturelle et sportive locale dès l’adolescence.</li>
                    <li><span className="font-semibold">Innovation :</span> Double rôle de dirigeant et joueur, favorisant la cohésion intergénérationnelle.</li>
                    <li><span className="font-semibold">Jeunesse & Sport :</span> Promotion du football cadet dans deux clubs locaux.</li>
                  </ul>
                </li>
                <li className="bg-white rounded-3xl shadow-lg p-7 transition-transform hover:-translate-y-1 hover:shadow-2xl border border-green-100">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Genèse de l’ASC Diwane & direction à l’ASC Santos de Louga (1988-1989)</h4>
                  <ul className="text-gray-700 text-sm space-y-1 pl-3 list-disc">
                    <li><span className="font-semibold">Impact :</span> Création et structuration de clubs, impulsion de dynamiques collectives nouvelles.</li>
                    <li><span className="font-semibold">Innovation :</span> Passage du statut de joueur à celui de dirigeant très jeune.</li>
                    <li><span className="font-semibold">Jeunesse & Sport :</span> Engagement dans l’équipe senior et accompagnement de jeunes talents.</li>
                  </ul>
                </li>
                <li className="bg-white rounded-3xl shadow-lg p-7 transition-transform hover:-translate-y-1 hover:shadow-2xl border border-green-100">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Présidence de l’ASC Réveil de Bambey (1999-2009)</h4>
                  <ul className="text-gray-700 text-sm space-y-1 pl-3 list-disc">
                    <li><span className="font-semibold">Impact :</span> 10 ans de gestion, palmarès étoffé, club hissé au sommet régional.</li>
                    <li><span className="font-semibold">Innovation :</span> Gestion financière rigoureuse et professionnalisation des pratiques.</li>
                    <li><span className="font-semibold">Jeunesse & Sport :</span> Détection et accompagnement de jeunes joueurs locaux.</li>
                  </ul>
                </li>
                <li className="bg-white rounded-3xl shadow-lg p-7 transition-transform hover:-translate-y-1 hover:shadow-2xl border border-green-100">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Redressement de l’ASC Bambey (2010-2011)</h4>
                  <ul className="text-gray-700 text-sm space-y-1 pl-3 list-disc">
                    <li><span className="font-semibold">Impact :</span> Assainissement des finances, accession du club en division régionale.</li>
                    <li><span className="font-semibold">Innovation :</span> Mobilisation de la population locale pour soutenir le club.</li>
                    <li><span className="font-semibold">Jeunesse & Sport :</span> Relance de la formation des jeunes joueurs.</li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Projets en cours */}
            <div>
              <h3 className="text-base uppercase tracking-widest font-bold text-blue-700 mb-6 letter-spacing-wide">Projets en cours</h3>
              <ul className="space-y-6">
                <li className="bg-white rounded-3xl shadow-lg p-7 transition-transform hover:-translate-y-1 hover:shadow-2xl border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Présidence de la Ligue de Football de Diourbel (depuis 2017)</h4>
                  <ul className="text-gray-700 text-sm space-y-1 pl-3 list-disc">
                    <li><span className="font-semibold">Impact :</span> Subventions, équipements professionnels, financements accrus, montée de plusieurs clubs en divisions supérieures.</li>
                    <li><span className="font-semibold">Innovation :</span> Nouvelles méthodes de gestion et de développement local du football.</li>
                    <li><span className="font-semibold">Jeunesse & Sport :</span> Soutien massif aux jeunes clubs et écoles de football.</li>
                  </ul>
                </li>
                <li className="bg-white rounded-3xl shadow-lg p-7 transition-transform hover:-translate-y-1 hover:shadow-2xl border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Engagement à la CAF & Fédération Sénégalaise de Football (2018-2022)</h4>
                  <ul className="text-gray-700 text-sm space-y-1 pl-3 list-disc">
                    <li><span className="font-semibold">Impact :</span> Représentation du Sénégal à la CAF, présidence de la commission des finances de la fédération.</li>
                    <li><span className="font-semibold">Innovation :</span> Renforcement de la gouvernance et de la conformité financière.</li>
                    <li><span className="font-semibold">Jeunesse & Sport :</span> Défense des intérêts des jeunes joueurs et clubs sénégalais à l’international.</li>
                  </ul>
                </li>
                <li className="bg-white rounded-3xl shadow-lg p-7 transition-transform hover:-translate-y-1 hover:shadow-2xl border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Baol Académie (depuis 2021)</h4>
                  <ul className="text-gray-700 text-sm space-y-1 pl-3 list-disc">
                    <li><span className="font-semibold">Impact :</span> Création d’une académie d’excellence, participation à un tournoi international U15 au Maroc.</li>
                    <li><span className="font-semibold">Innovation :</span> Programme d’accompagnement sportif et éducatif sur-mesure.</li>
                    <li><span className="font-semibold">Jeunesse & Sport :</span> Formation de jeunes talents et rayonnement régional.</li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Projets & Ambitions */}
            <div>
              <h3 className="text-base uppercase tracking-widest font-bold text-orange-700 mb-6 letter-spacing-wide">Projets & Ambitions</h3>
              <div className="bg-white rounded-3xl shadow-lg p-7 border border-orange-100 mb-6">
                <p className="text-gray-700 mb-4">
                  Homme de projets, Monsieur Fall ambitionne de porter le football de sa région et du Sénégal vers un niveau d’excellence durable.
                </p>
                <p className="text-gray-700 mb-4">
                  Ses nouvelles priorités en tant que président de la Ligue de Football de Diourbel s'articulent autour de trois axes majeurs :
                </p>
                <ul className="text-gray-700 text-sm space-y-2 pl-5 list-disc mb-4">
                  <li>
                    <span className="font-semibold">La rénovation des infrastructures sportives régionales</span> pour offrir aux jeunes talents des enceintes modernes et sécurisées.
                  </li>
                  <li>
                    <span className="font-semibold">La construction du siège officiel de la Ligue</span>, pour doter l'institution d'une base administrative solide.
                  </li>
                  <li>
                    <span className="font-semibold">La création d’une académie d’excellence : Baol Académie</span>, destinée à former la future élite du football sénégalais. Cette académie a d’ailleurs participé dès mars 2023 à un tournoi international U15 à Oulmès, au Maroc, illustrant son ancrage dans le football international de jeunes.
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Monsieur Fall aspire à la structuration d’un club de dimension internationale, capable de rivaliser sur les scènes continentale et mondiale. Sa solide expérience de gestionnaire et ses qualités de stratège lui permettent de mener à bien des projets ambitieux, tout en conservant un attachement profond à son terroir et à la jeunesse sénégalaise.
                </p>
                <p className="text-gray-700">
                  Parallèlement à son engagement sportif, Monsieur Abdoulaye Fall poursuit une brillante carrière dans l'administration publique sénégalaise, où il occupe depuis juin 2020 les fonctions de <span className="font-semibold">Trésorier Général de l'État / Agent Comptable du Trésor</span>. Il est également <span className="font-semibold">Chevalier de l’Ordre National du Lion</span> et <span className="font-semibold">Médaillé d’Honneur de la Gendarmerie Nationale du Sénégal</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Call to Action */}
        </div>
      </div>
    </section>
  );
};

export default Projects;