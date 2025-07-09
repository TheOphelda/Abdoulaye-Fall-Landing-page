'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SiTiktok, SiYoutube } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Biographie', href: '#biographie' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Actualités', href: '#actualites' }
  ];

  const resources = [
    { name: 'Médias', href: '#medias' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
    { name: 'Espace Presse', href: '#contact' }
  ];

  const socialLinks = [
   { icon: <Facebook size={24} />, href: 'https://www.facebook.com/share/1Agdhw8otE/?mibextid=wwXIfr', label: 'Facebook' },
       { icon: <SiTiktok size={24} />, href: 'https://www.tiktok.com/@abdoulayefall_officiel?_t=ZM-8xij4zWB165&_r=1', label: 'Tiktok' },
       { icon: <Instagram size={24} />, href: 'https://www.instagram.com/abdoulayefall_officiel?igsh=MWVlOGRtanphZnhzMg==', label: 'Instagram' },
       { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/abdoulaye-fall-75a709372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
       { icon: <SiYoutube size={24} />, href: 'https://www.youtube.com/@Abdoulayefallofficiel', label: 'YouTube' }
    
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
            <img
                src="/images/5a24bd0b-032c-40db-8f9f-331c4216641c.jpg"
                alt="Abdoulaye Fall"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">Abdoulaye Fall</h3>
                <p className="text-gray-400">Candidat à la Présidence de la Fédération Sénégalaise de Football</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Un nouveau souffle pour le football sénégalais. Ensemble, bâtissons l'avenir 
              de notre football avec intégrité, passion et excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Ressources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {currentYear} Abdoulaye Fall. Tous droits réservés.
          </p>
          <p className="mt-4 md:mt-0">
            Candidat à la Présidence de la Fédération Sénégalaise de Football
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;