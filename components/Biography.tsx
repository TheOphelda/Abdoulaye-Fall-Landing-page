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
            Parcours & Engagement
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
          <div className="space-y-8 md:h-[600px] md:overflow-y-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Débuts et Formation</h3>
              <p className="text-gray-700 leading-relaxed">
                Abdoulaye Fall a forgé son caractère et sa vision à travers un parcours riche et diversifié. 
                Diplômé en gestion et management, il a très tôt développé une passion pour le leadership 
                et l'organisation, qualités qui l'ont naturellement mené vers le monde du football.
              </p>
            </div>

            <div>
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Parcours professionnel</h3>
  <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
    <li><span className="font-semibold">2003 – 2004 :</span> Fondé de pouvoir du Trésorier Payeur Régional de Louga</li>
    <li><span className="font-semibold">2004 – 2006 :</span> Receveur Percepteur Municipal de Diourbel</li>
    <li><span className="font-semibold">2006 – 2009 :</span> Receveur Percepteur Municipal de Ziguinchor</li>
    <li><span className="font-semibold">2009 – 2011 :</span> Receveur Percepteur Municipal de Mbacké</li>
    <li><span className="font-semibold">2011 – 2012 :</span> Trésorier Payeur Régional de Kolda</li>
    <li><span className="font-semibold">2012 – 2014 :</span> Trésorier Payeur Régional de Diourbel</li>
    <li><span className="font-semibold">2014 – 2015 :</span> Fondé de pouvoir du Payeur Général du Trésor</li>
    <li><span className="font-semibold">2015 – 2020 :</span> Payeur Général du Trésor</li>
    <li><span className="font-semibold">Depuis Juin 2020 :</span> Trésorier Général de l'Etat du Sénégal / Agent Comptable du Trésor</li>
  </ul>
</div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement et Parcours dans le Football</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Personnage éminemment engagé, Monsieur Abdoulaye Fall se consacre depuis trois décennies au développement du football, notamment dans sa région d'origine de Diourbel. Dès sa seizième année en 1982, il accède à la présidence du comité culturel de l’ASC Penth de Bambey, tout en pratiquant le football en catégorie cadet dans deux clubs locaux.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fort de l'obtention de son baccalauréat en 1988, il participe à la genèse de l’ASC Diwane, dont il intègre l’équipe senior. L'année suivante, il rejoint l’ASC Santos de Louga en qualité de dirigeant. Admis à l’ENA en 1999, il prend les rênes de l’ASC Réveil de Bambey durant dix ans, menant l'équipe à un palmarès fourni en trophées. Joueur passionné, il intègre par ailleurs l’équipe dominicale de Ziguinchor.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nommé entre 2010 et 2011 Trésorier Payeur Général à Kolda, il reprend sur demande insistante de la population la présidence de l’ASC Bambey. Il assainit promptement les finances du club et le hisse en division régionale. Porté à la présidence de la Ligue de Football de Diourbel en 2017, Monsieur Fall met en œuvre trois objectifs cardinaux : subventionner les clubs, les doter d'équipements professionnels, et obtenir des financements conséquents. De multiples équipes accèdent alors à des divisions supérieures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tout en intégrant la Fédération Sénégalaise de Football, il rejoint la CAF en 2018 en qualité de membre de la commission d’audit et conformité. En 2021, il entre au COMEX de la Fédération Sénégalaise de Football et préside la commission des finances jusqu’à sa démission en juin 2022.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Réélu président de Ligue en 2021, ses nouvelles priorités sont la rénovation des enceintes sportives régionales, l'édification du siège de la Ligue, et la création d’une académie d'excellence. Cette dernière, Baol Académie, participera dès mars 2023 à un tournoi international U15 à Oulmès au Maroc.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Grâce à son engagement indéfectible et son attachement profond à son terroir, Monsieur Fall contribue largement à structurer et développer le football dans sa région et à l'échelle nationale. Il incarne l'avenir du football sénégalais. Ses qualités de stratège et de gestionnaire garantissent l'accomplissement des projets ambitieux qu'il initie. Monsieur Fall demeure sans conteste un atout majeur pour la concrétisation d'un club de dimension internationale auquel il aspire.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Monsieur Fall est Inspecteur Principal du Trésor. Il est Chevalier de l’Ordre National du Lion et Médaillé d’Honneur de la Gendarmerie Nationale du Sénégal.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
      </div>
    </section>
  );
};

export default Biography;