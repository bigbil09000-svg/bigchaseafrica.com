import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { mockData } from '../mock';
import logoImage from '../assets/bigchase-logo.png';

export const Footer = () => {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logoImage}
                alt="BIGCHASE AFRICA LIMITED"
                className="h-16 sm:h-20 w-auto max-w-[180px] sm:max-w-[240px] object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">BIGCHASE</h3>
                <p className="text-xs text-gray-400">Africa Limited</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {mockData.company.slogan}
            </p>
            <p className="text-sm text-gray-400">
              Premium • Clean • Trusted
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-[#ff6b35] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-sm text-gray-400 hover:text-[#ff6b35] transition-colors">
                  Order Gas
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-[#ff6b35] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-sm text-gray-400 hover:text-[#ff6b35] transition-colors">
                  Business Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-[#ff6b35] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {mockData.services.map((service) => (
                <li key={service.id}>
                  <span className="text-sm text-gray-400">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#ff6b35] mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">{mockData.company.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#ff6b35] mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">{mockData.company.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff6b35] mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">{mockData.company.address}</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-[#ff6b35] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-[#ff6b35] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-[#ff6b35] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BIGCHASE GAS. All rights reserved. | 
            <span className="text-gray-500"> Premium LPG Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
