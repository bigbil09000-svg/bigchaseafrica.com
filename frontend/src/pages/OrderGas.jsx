import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { MessageCircle, Package, Truck, Phone } from 'lucide-react';
import { mockData, generateWhatsAppLink, submitOrder } from '../mock';
import { toast } from 'sonner';

export const OrderGas = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    cylinderSize: '',
    serviceType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppOrder = () => {
    // Validate form
    if (!formData.name || !formData.phone || !formData.address || !formData.cylinderSize || !formData.serviceType) {
      toast.error('Please fill in all fields');
      return;
    }

    const whatsappLink = generateWhatsAppLink(formData);
    window.open(whatsappLink, '_blank');
    toast.success('Opening WhatsApp...');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.phone || !formData.address || !formData.cylinderSize || !formData.serviceType) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitOrder(formData);
      if (result.success) {
        toast.success(result.message);
        // Reset form
        setFormData({
          name: '',
          phone: '',
          address: '',
          cylinderSize: '',
          serviceType: ''
        });
      }
    } catch (error) {
      toast.error('Failed to submit order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Order Your Gas
          </h1>
          <p className="text-lg text-gray-600">
            Fill in the form below and we'll deliver to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1a2332]">Order Details</CardTitle>
                <CardDescription>
                  Please provide your delivery information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                  </div>

                  {/* Phone */}
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

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Enter your complete delivery address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]"
                    />
                  </div>

                  {/* Cylinder Size */}
                  <div className="space-y-2">
                    <Label htmlFor="cylinderSize">Cylinder Size *</Label>
                    <Select
                      value={formData.cylinderSize}
                      onValueChange={(value) => handleSelectChange('cylinderSize', value)}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]">
                        <SelectValue placeholder="Select cylinder size" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockData.cylinderSizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label} - {size.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Service Type */}
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => handleSelectChange('serviceType', value)}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-[#ff6b35] focus:ring-[#ff6b35]">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockData.serviceTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="button"
                      onClick={handleWhatsAppOrder}
                      className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 text-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Order via WhatsApp
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-6 text-lg"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Order'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Pricing Info */}
            <Card className="bg-gradient-to-br from-[#1a2332] to-[#2d3e50] text-white">
              <CardHeader>
                <CardTitle className="text-xl">Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockData.cylinderSizes.map((size) => (
                  <div key={size.value} className="flex justify-between items-center pb-2 border-b border-white/20 last:border-0">
                    <span className="text-sm">{size.label}</span>
                    <span className="font-bold text-[#ff6b35]">{size.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#1a2332] flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#ff6b35]" />
                  Delivery Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <p>✓ Same-day delivery available</p>
                <p>✓ Orders before 2 PM delivered same day</p>
                <p>✓ Free delivery within city limits</p>
                <p>✓ Safety-checked cylinders</p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-[#ff6b35] text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Call us directly:</p>
                <p className="font-bold text-lg">{mockData.company.phone}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
