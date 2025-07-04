'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter/X' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 senegal-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Abdoulaye Fall</h3>
                <p className="text-gray-400">Candidat Président FSF</p>
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
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-green-500" />
              <span className="text-gray-300">contact@abdoulayefall.sn</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-green-500" />
              <span className="text-gray-300">+221 XX XXX XX XX</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-green-500" />
              <span className="text-gray-300">Dakar, Sénégal</span>
            </div>
          </div>
        </div>

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