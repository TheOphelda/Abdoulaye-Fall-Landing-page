'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send, Download, Users, Lightbulb, Target } from 'lucide-react';
import { SiTiktok, SiYoutube } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Facebook size={24} />, href: 'https://www.facebook.com/share/1Agdhw8otE/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: <SiTiktok size={24} />, href: 'https://www.tiktok.com/@abdoulayefall_officiel?_t=ZM-8xij4zWB165&_r=1', label: 'Tiktok' },
    { icon: <Instagram size={24} />, href: 'https://www.instagram.com/abdoulayefall_officiel?igsh=MWVlOGRtanphZnhzMg==', label: 'Instagram' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/abdoulaye-fall-75a709372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
    { icon: <SiYoutube size={24} />, href: 'https://www.youtube.com/@Abdoulayefallofficiel', label: 'YouTube' }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Restons en contact pour construire ensemble l'avenir du football sénégalais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
          <div>
          <h4 className="text-xl font-bold mb-4">KÀN MOOY ABDOULAYE FALL ?</h4>
                  <div className="text-gray-300">L’homme de terrain. L’homme de solutions.
Découvrez son parcours, ses réalisations et sa vision pour un football sénégalais plus juste, structuré et performant.
📲 Abonnez-vous à ses pages officielles pour ne rien rater :
</div>
                  </div>
            {/* Social Media */}
            <div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Press Kit */}
            {/*<div className="bg-gray-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Espace Presse</h4>
              <p className="text-gray-300 mb-4">
                Téléchargez notre kit média complet avec communiqués, photos officielles et informations biographiques.
              </p>
              <button className="btn-secondary w-full flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Télécharger le Kit Média
              </button>
            </div>*/}
            <div className="space-y-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Votre Vision Compte</h3>
              </div>
              {/*<p className="text-gray-700 leading-relaxed mb-6">
                Votre avis compte pour bâtir un football sénégalais plus fort et inclusif.
              </p>*/}
              <div className="space-y-7">
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
          </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 text-gray-900">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous répondrons dans les plus brefs délais. 
                    Merci pour votre intérêt et votre soutien.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Envoyez-nous un Message
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom"
                      />
                    </div>
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

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="soutien">Soutien à la candidature</option>
                      <option value="collaboration">Proposition de collaboration</option>
                      <option value="media">Demande média/presse</option>
                      <option value="information">Demande d'information</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        {/* Bio for Press */}
        <div className="mt-16 bg-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">Biographie Courte - Espace Presse</h3>
          <p className="text-gray-300 leading-relaxed">
            Abdoulaye Fall est un passionné du football sénégalais avec une riche expérience en gestion 
            et développement organisationnel. Fort de plus de 15 années d'engagement dans le secteur sportif, 
            il se présente comme candidat à la présidence de la Fédération Sénégalaise de Football avec la vision 
            de moderniser et professionnaliser le football national tout en préservant ses valeurs d'unité et d'excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;