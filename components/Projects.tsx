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
            Partagez vos Idées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Call to Action */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Votre Vision Compte</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Clubs et associations sportives</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Entraîneurs et staff technique</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Joueurs et anciens internationaux</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Supporters et passionnés</span>
                </div>
              </div>
            </div>

            {/* Collaboration Visual */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Construisons Ensemble</h3>
              <p className="text-lg leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-white/30 rounded-full animate-pulse delay-75"></div>
                  <div className="absolute inset-8 bg-white/40 rounded-full animate-pulse delay-150"></div>
                  <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Merci pour votre contribution !
                </h3>
                <p className="text-gray-600">
                  Votre idée est précieuse et sera étudiée avec attention. 
                  Ensemble, nous bâtissons l'avenir du football sénégalais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Partagez votre Projet ou Idée
                  </h3>
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Titre de l'idée/projet *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Ex: Développement du football féminin en milieu rural"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description détaillée *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez votre idée, ses objectifs, et comment elle peut contribuer au développement du football sénégalais..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse e-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de téléphone (facultatif)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer ma Contribution
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;