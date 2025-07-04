'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send, Download } from 'lucide-react';

// Icône TikTok SVG personnalisée
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
    <path d="M12.67 2H16.08V8.29C16.08 8.29 18.06 8.32 18.09 8.32C18.09 8.32 18.09 10.08 18.09 10.08C18.09 10.08 16.09 10.07 16.08 10.07V20.24C16.08 21.2 15.28 22 14.32 22H9.68C8.72 22 7.92 21.2 7.92 20.24V10.07C7.92 10.07 5.92 10.08 5.92 10.08C5.92 10.08 5.92 8.32 5.92 8.32C5.92 8.32 7.9 8.29 7.92 8.29V2H11.33V8.29H12.67V2Z" />
  </svg>
);

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
    { icon: <TikTokIcon width={24} height={24} />, href: 'https://www.tiktok.com/@abdoulayefall_officiel?_t=ZM-8xij4zWB165&_r=1', label: 'Tiktok' },
    { icon: <Instagram size={24} />, href: 'https://www.instagram.com/abdoulayefall_officiel?igsh=MWVlOGRtanphZnhzMg==', label: 'Instagram' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/abdoulaye-fall-75a709372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' }
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
              <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-medium">E-mail officiel</div>
                    <div className="text-gray-300">contact@abdoulayefall.sn</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div className="text-gray-300">+221 XX XXX XX XX</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Adresse</div>
                    <div className="text-gray-300">Dakar, Sénégal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
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
            <div className="bg-gray-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Espace Presse</h4>
              <p className="text-gray-300 mb-4">
                Téléchargez notre kit média complet avec communiqués, photos officielles et informations biographiques.
              </p>
              <button className="btn-secondary w-full flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Télécharger le Kit Média
              </button>
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