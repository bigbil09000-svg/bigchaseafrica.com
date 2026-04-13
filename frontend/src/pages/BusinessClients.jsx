import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Briefcase, Building2, Users, TrendingUp, CheckCircle2, MessageCircle } from 'lucide-react';
import { mockData, submitBusinessInquiry, generateBusinessWhatsAppLink } from '../mock';
import { toast } from 'sonner';

export const BusinessClients = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitBusinessInquiry(formData);
      if (result.success) {
        toast.success(result.message);
        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          businessType: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppInquiry = () => {
    if (!formData.companyName || !formData.contactPerson || !formData.phone) {
      toast.error('Please fill company name, contact person, and phone number');
      return;
    }

    const whatsappLink = generateBusinessWhatsAppLink(formData);
    window.open(whatsappLink, '_blank');
    toast.success('Opening WhatsApp...');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Header */}
      <div className="container mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b35]/10 rounded-full mb-6">
          <Briefcase className="w-5 h-5 text-[#ff6b35]" />
          <span className="text-[#ff6b35] font-semibold">Business Solutions</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
          Bulk LPG Supply for Businesses
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Premium LPG solutions for restaurants, hotels, estates, and commercial establishments
        </p>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="hover:shadow-xl transition-all border-2 hover:border-[#ff6b35]">
            <CardHeader>
              <div className="w-12 h-12 bg-[#ff6b35] rounded-xl flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-[#1a2332]">Competitive Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Save more with our bulk supply pricing tailored for businesses
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all border-2 hover:border-[#ff6b35]">
            <CardHeader>
              <div className="w-12 h-12 bg-[#ff6b35] rounded-xl flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-[#1a2332]">Dedicated Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get a dedicated account manager for all your LPG needs
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all border-2 hover:border-[#ff6b35]">
            <CardHeader>
              <div className="w-12 h-12 bg-[#ff6b35] rounded-xl flex items-center justify-center mb-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-[#1a2332]">Flexible Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Custom supply agreements that fit your business requirements
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefits List */}
          <div>
            <Card className="h-full bg-gradient-to-br from-[#1a2332] to-[#2d3e50] text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Why Partner With Us?</CardTitle>
                <CardDescription className="text-gray-300">
                  Exclusive benefits for our business clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {mockData.businessBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                      <span className="text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-2">Industries We Serve</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Restaurants', 'Hotels', 'Estates', 'Hospitals', 'Schools', 'Factories'].map((industry) => (
                      <span key={industry} className="px-3 py-1 bg-[#ff6b35] rounded-full text-sm font-medium">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1a2332]">Get Started Today</CardTitle>
                <CardDescription>
                  Fill in the form and our team will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      placeholder="Full name"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Input
                      id="businessType"
                      name="businessType"
                      placeholder="e.g., Restaurant, Hotel"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <Button
                      type="button"
                      onClick={handleWhatsAppInquiry}
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 text-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Request via WhatsApp
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-6 text-lg"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-bold text-[#1a2332] mb-4">
            Prefer to Talk to Us Directly?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">Call Us</p>
              <p className="font-bold text-[#1a2332] text-lg">{mockData.company.phone}</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Email Us</p>
              <p className="font-bold text-[#1a2332] text-lg">{mockData.company.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
