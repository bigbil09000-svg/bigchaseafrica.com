import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Flame, Package, Truck, CheckCircle, Shield, Clock } from 'lucide-react';
import { mockData } from '../mock';

export const Services = () => {
  const iconMap = {
    Flame: Flame,
    Package: Package,
    Truck: Truck
  };

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All cylinders undergo rigorous safety inspections and quality checks'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our customer service team is always available to assist you'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'We guarantee the purity and quality of every LPG refill'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Header */}
      <div className="container mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive LPG solutions tailored to meet your home and business needs
        </p>
      </div>

      <div className="container mx-auto">
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card key={service.id} className="hover:shadow-2xl transition-all group border-2 hover:border-[#ff6b35]">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff8555] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1a2332]">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.id === 1 && (
                      <>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">Quick and efficient refilling process</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">Certified quality LPG from trusted suppliers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">All sizes available (3kg to 50kg)</span>
                        </li>
                      </>
                    )}
                    {service.id === 2 && (
                      <>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">Brand new certified cylinders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">Multiple sizes for different needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">Warranty and safety guarantee</span>
                        </li>
                      </>
                    )}
                    {service.id === 3 && (
                      <>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">Same-day delivery available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">Free delivery within city limits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">Scheduled deliveries available</span>
                        </li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-br from-[#1a2332] to-[#2d3e50] rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why We're Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#ff6b35] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-[#1a2332] text-center mb-8">
            Our Pricing
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.cylinderSizes.map((size) => (
                <div
                  key={size.value}
                  className="flex justify-between items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h3 className="font-bold text-lg text-[#1a2332]">{size.label}</h3>
                    <p className="text-sm text-gray-600">Refill or New Cylinder</p>
                  </div>
                  <div className="text-2xl font-bold text-[#ff6b35]">{size.price}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              * Prices are subject to change. Free delivery within city limits.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1a2332] mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get your LPG delivered today with just a few clicks
          </p>
          <Link to="/order">
            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
