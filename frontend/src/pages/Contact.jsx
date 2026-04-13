import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { mockData, sanitizeWhatsAppNumber } from '../mock';

export const Contact = () => {
  const whatsappNumber = sanitizeWhatsAppNumber(mockData.company.whatsapp);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Header */}
      <div className="container mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to help with all your LPG needs. Reach out to us anytime!
        </p>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <Card className="hover:shadow-lg transition-all border-2 hover:border-[#ff6b35]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#ff8555] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a2332] mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">Call us for immediate assistance</p>
                    <a
                      href={`tel:${mockData.company.phone}`}
                      className="text-[#ff6b35] font-semibold hover:underline text-lg"
                    >
                      {mockData.company.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-lg transition-all border-2 hover:border-[#ff6b35]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1a2332] to-[#2d3e50] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a2332] mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">Send us an email anytime</p>
                    <a
                      href={`mailto:${mockData.company.email}`}
                      className="text-[#ff6b35] font-semibold hover:underline text-lg"
                    >
                      {mockData.company.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="hover:shadow-lg transition-all border-2 hover:border-[#ff6b35]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#ff8555] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a2332] mb-2">Location</h3>
                    <p className="text-gray-600 mb-1">Visit our office</p>
                    <p className="text-[#1a2332] font-medium">
                      {mockData.company.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gradient-to-br from-[#1a2332] to-[#2d3e50] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Clock className="w-6 h-6 text-[#ff6b35]" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-[#ff6b35]">{mockData.company.businessHours.weekdays.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Saturday</span>
                  <span className="font-semibold text-[#ff6b35]">{mockData.company.businessHours.saturday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-400">{mockData.company.businessHours.sunday.split(': ')[1]}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full min-h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for Google Maps - Replace with actual embed code */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0989461862316!2d7.0746!3d6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040ed62eb851f33%3A0x300000000000!2s1%20Ngozika%20Avenue%2C%20Awka%2C%20Anambra%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BIGCHASE GAS Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-[#ff6b35] to-[#ff8555] rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Don't wait! Get your clean energy delivered today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#ff6b35] font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              Order via WhatsApp
            </a>
            <a
              href={`tel:${mockData.company.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1a2332] text-white font-semibold rounded-lg hover:bg-[#2d3e50] transition-all hover:scale-105 shadow-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
