import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1DNNX1SCTE/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/kagatharashubh_9/', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-black border-t border-neon-green/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-display text-neon-green mb-4">
              HUSTLE FOR MUSCLE
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform Your Body. Transform Your Life. Join the ultimate fitness experience
              with world-class facilities and expert trainers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-neon-green rounded-none flex items-center justify-center
                           text-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-neon-green transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 text-neon-green mr-3 mt-1 flex-shrink-0" />
                <span>Dhrol, Dist. Jamnagar, Gujarat</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                <a href="tel:+918799380134" className="hover:text-neon-green transition-colors">
                  +91 8799380134
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                <a href="mailto:kagatharashubham9@gmail.com" className="hover:text-neon-green transition-colors">
                  kagatharashubham9@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-display text-white mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <Clock className="w-5 h-5 text-neon-green mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Monday - Friday</p>
                  <p>6:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start text-gray-400">
                <Clock className="w-5 h-5 text-neon-green mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Saturday - Sunday</p>
                  <p>7:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Hustle For Muscle. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm italic">
              "No Pain, No Gain - Transform Your Limits"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
