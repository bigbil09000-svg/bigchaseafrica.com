import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Flame, Package, Truck, ShieldCheck, Clock, Users, MessageCircle, Briefcase } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../mock';

export const Home = () => {
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: '',
    cylinderSize: '3kg',
    serviceType: 'refill'
  });

  const iconMap = {
    Flame: Flame,
    Package: Package,
    Truck: Truck,
    ShieldCheck: ShieldCheck,
    Clock: Clock,
    Users: Users
  };

  const handleOrderInputChange = (event) => {
    const { name, value } = event.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
  };

  const openWhatsApp = () => {
    const whatsappLink = generateWhatsAppLink(orderForm);
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#243447] to-[#1a2332]">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">Premium • Clean • Trusted</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              BIGCHASE GAS
            </h1>
            <p className="text-2xl md:text-3xl text-[#ff6b35] font-semibold mb-4">
              {mockData.company.slogan}
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {mockData.company.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/order" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order Gas via WhatsApp
                </Button>
              </Link>
              <Link to="/business" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#1a2332] font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Become a Business Client
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#ff6b35] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#ff6b35] rounded-full blur-3xl opacity-20"></div>
      </section>

      {/* Trust Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
              Why Choose BIGCHASE GAS?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the safest and most reliable Cooking Gas delivery service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.trustFeatures.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={feature.id} className="border-2 hover:border-[#ff6b35] transition-all hover:shadow-lg group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff8555] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive Cooking Gas solutions for homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-xl transition-all group bg-white">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-[#1a2332] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6b35] transition-colors">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-[#1a2332] hover:bg-[#2d3e50] text-white font-semibold px-8 py-6 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#1a2332]">Order Gas</h2>
        <div className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded">
          <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
            <input
              className="w-full p-3 border border-gray-300 rounded"
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={orderForm.name}
              onChange={handleOrderInputChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={orderForm.phone}
              onChange={handleOrderInputChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded"
              type="text"
              name="address"
              placeholder="Delivery Address"
              required
              value={orderForm.address}
              onChange={handleOrderInputChange}
            />
            <select
              className="w-full p-3 border border-gray-300 rounded"
              name="cylinderSize"
              value={orderForm.cylinderSize}
              onChange={handleOrderInputChange}
            >
              <option value="3kg">3kg Cylinder</option>
              <option value="6kg">6kg Cylinder</option>
              <option value="12.5kg">12.5kg Cylinder</option>
              <option value="50kg">50kg Cylinder</option>
            </select>
            <select
              className="w-full p-3 border border-gray-300 rounded"
              name="serviceType"
              value={orderForm.serviceType}
              onChange={handleOrderInputChange}
            >
              <option value="refill">Refill</option>
              <option value="new">New Cylinder</option>
            </select>
            <button
              type="button"
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2" /> Order via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1a2332] to-[#2d3e50]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Order your Cooking Gas today and experience premium, clean energy delivered right to your doorstep
          </p>
          <Link to="/order">
            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Order Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
