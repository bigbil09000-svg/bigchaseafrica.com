// Mock data for BIGCHASE GAS website

export const mockData = {
  // Company info
  company: {
    name: "BIGCHASE GAS",
    slogan: "Clean Energy at Your Doorstep",
    tagline: "Safe, reliable LPG delivery for homes and businesses.",
    phone: "+2347039527092",
    email: "bigchaseafricaltd@gmail.com",
    whatsapp: "+2347039527092", // Replace with actual number
    address: "1 Ngozika Avenue, Awka, Anambra, Nigeria",
    businessHours: {
      weekdays: "Monday - Friday: 7:00 AM - 10:00 PM",
      saturday: "Saturday: 7:00 AM - 10:00 PM",
      sunday: "Sunday: Closed"
    }
  },

  // Cylinder sizes and pricing
  cylinderSizes: [
    { value: "3kg", label: "3kg Cylinder", price: "₦5,000" },
    { value: "6kg", label: "6kg Cylinder", price: "₦9,500" },
    { value: "12.5kg", label: "12.5kg Cylinder", price: "₦18,000" },
    { value: "50kg", label: "50kg Cylinder (Commercial)", price: "₦65,000" }
  ],

  // Service types
  serviceTypes: [
    { value: "refill", label: "Refill My Cylinder" },
    { value: "new", label: "Buy New Cylinder" }
  ],

  // Services offered
  services: [
    {
      id: 1,
      title: "LPG Refilling",
      description: "Quick and safe refilling of your gas cylinders with certified quality LPG.",
      icon: "Flame"
    },
    {
      id: 2,
      title: "Cylinder Sales",
      description: "Brand new certified cylinders in various sizes for home and business use.",
      icon: "Package"
    },
    {
      id: 3,
      title: "Home Delivery",
      description: "Fast and reliable doorstep delivery service across the city.",
      icon: "Truck"
    }
  ],

  // Trust features
  trustFeatures: [
    {
      id: 1,
      title: "Safety Checked & Sealed",
      description: "Every cylinder is thoroughly inspected and sealed for your safety.",
      icon: "ShieldCheck"
    },
    {
      id: 2,
      title: "Fast & Reliable Delivery",
      description: "Same-day delivery available for orders placed before 2 PM.",
      icon: "Clock"
    },
    {
      id: 3,
      title: "Professional Service",
      description: "Courteous and trained delivery personnel at your service.",
      icon: "Users"
    }
  ],

  // Business client benefits
  businessBenefits: [
    "Competitive bulk pricing",
    "Dedicated account manager",
    "Priority delivery scheduling",
    "Flexible payment terms",
    "Regular supply contracts",
    "Free cylinder maintenance"
  ],

  // Sample orders (for potential order history feature)
  
};

// Normalize phone numbers for wa.me links (digits only).
export const sanitizeWhatsAppNumber = (value = '') => value.replace(/\D/g, '');

// Helper function to generate WhatsApp order link
export const generateWhatsAppLink = (orderData) => {
  const { name, phone, address, cylinderSize, serviceType } = orderData;
  const message = `Hello BIGCHASE GAS! I would like to place an order:
  
Name: ${name}
Phone: ${phone}
Delivery Address: ${address}
Cylinder Size: ${cylinderSize}
Service Type: ${serviceType}

Please confirm my order. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = sanitizeWhatsAppNumber(mockData.company.whatsapp);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};

// Helper function to generate WhatsApp business inquiry link
export const generateBusinessWhatsAppLink = (inquiryData) => {
  const { companyName, contactPerson, email, phone, businessType, message } = inquiryData;
  const whatsappMessage = `Hello BIGCHASE GAS! I would like to request bulk LPG supply for our business:

Company Name: ${companyName}
Contact Person: ${contactPerson}
Email: ${email}
Phone: ${phone}
Business Type: ${businessType || 'Not specified'}
Requirements: ${message || 'Will share details when contacted'}

Please contact us to discuss pricing and delivery terms. Thank you!`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappNumber = sanitizeWhatsAppNumber(mockData.company.whatsapp);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};

// Mock function to simulate order submission
export const submitOrder = async (orderData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Thank you. Our team will contact you shortly to confirm your delivery.",
        orderId: `ORD${Math.floor(Math.random() * 10000)}`
      });
    }, 1000);
  });
};

// Mock function to simulate business inquiry submission
export const submitBusinessInquiry = async (inquiryData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Thank you for your interest. Our business team will contact you within 24 hours."
      });
    }, 1000);
  });
};
