# BIGCHASE GAS - Product Requirements Document

## Original Problem Statement
Build a gas station company website for BIGCHASE AFRICA LIMITED with the following features:
- Brand: BIGCHASE GAS - "Clean Energy at Your Doorstep"
- Positioning: Premium • Clean • Trusted
- LPG delivery service for homes and businesses
- WhatsApp order integration
- Multi-page website with services showcase

## Brand Identity
- **Brand Name**: BIGCHASE GAS
- **Slogan**: Clean Energy at Your Doorstep
- **Positioning**: Premium • Clean • Trusted
- **Color Scheme**: Deep navy blue (#1a2332) + White + Orange accents (#ff6b35)
- **Design Philosophy**: Minimal, clean, premium feel with smooth animations

## Architecture
- **Frontend**: React with React Router
- **UI Components**: Shadcn/UI
- **Backend**: FastAPI (not yet implemented)
- **Database**: MongoDB (not yet implemented)
- **Styling**: Tailwind CSS with custom animations

## User Personas
1. **Individual Consumers**: Home users needing LPG refills and cylinder purchases
2. **Business Clients**: Restaurants, hotels, estates requiring bulk LPG supply
3. **Fleet Managers**: Corporate clients managing multiple locations

## Core Features Implemented (December 27, 2024)

### Frontend Pages (COMPLETED)
1. **Homepage**
   - Hero section with brand messaging
   - Two primary CTAs: "Order Gas via WhatsApp" and "Become a Business Client"
   - Trust features section (Safety, Fast Delivery, Professional Service)
   - Services preview
   - Final CTA section

2. **Order Gas Page**
   - Order form with fields: Name, Phone, Address, Cylinder Size, Service Type
   - Cylinder sizes: 3kg, 6kg, 12.5kg, 50kg
   - Service types: Refill or New Cylinder
   - WhatsApp order integration with pre-filled message
   - Submit order functionality
   - Pricing sidebar
   - Delivery info card
   - Help contact card

3. **Services Page**
   - Three main services showcase:
     * LPG Refilling
     * Cylinder Sales
     * Home Delivery
   - Additional features section
   - Pricing table
   - CTA to order

4. **Business Clients Page**
   - Business benefits presentation
   - Industries served badges
   - Business inquiry form
   - Contact information
   - Competitive advantages

5. **Contact Page**
   - Contact information cards (Phone, Email, Address)
   - Business hours display
   - Google Maps integration
   - Quick action CTAs

### Components
- **Header**: Fixed navigation with logo, menu links, and CTA button
- **Footer**: Company info, quick links, services, contact details, social media
- **Mock Data**: Complete mock data structure for all features

## Mock Data Structure
- Company information (name, contact, hours)
- Cylinder sizes with pricing
- Service types
- Services offered
- Trust features
- Business benefits
- Sample orders structure

## What's Implemented (Frontend Only)
✅ Complete 5-page website with routing
✅ Responsive mobile-first design
✅ WhatsApp integration for orders
✅ Form validation with toast notifications
✅ Mock order submission
✅ Google Maps embed
✅ Premium design with smooth animations
✅ Clean navy blue, white, and orange color scheme

## Backend API Contracts (TO BE IMPLEMENTED)

### Order Management
- `POST /api/orders` - Submit new order
  - Body: { name, phone, address, cylinderSize, serviceType }
  - Response: { orderId, message, status }

- `GET /api/orders/:id` - Get order details
- `GET /api/orders` - List all orders (admin)

### Business Inquiries
- `POST /api/business-inquiries` - Submit business inquiry
  - Body: { companyName, contactPerson, email, phone, businessType, message }
  - Response: { inquiryId, message }

### Products/Pricing
- `GET /api/cylinders` - Get cylinder sizes and pricing
- `GET /api/services` - Get available services

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/company-info` - Get company details

## Prioritized Backlog

### P0 - Critical (Next Phase)
1. **Backend Development**
   - Set up FastAPI routes with /api prefix
   - Create MongoDB models for orders, inquiries, products
   - Implement order submission endpoint
   - Implement business inquiry endpoint
   - Add email notification system

2. **Frontend-Backend Integration**
   - Replace mock data with API calls
   - Add loading states
   - Error handling
   - Success confirmations

### P1 - High Priority
1. **Admin Dashboard**
   - View all orders
   - Manage business inquiries
   - Update pricing
   - Order status management

2. **Email Notifications**
   - Order confirmation emails
   - Business inquiry notifications
   - SMS notifications via Twilio

3. **Authentication**
   - Admin login system
   - Customer accounts (optional)

### P2 - Medium Priority
1. **Enhanced Features**
   - Order tracking system
   - Payment gateway integration
   - Customer reviews/testimonials
   - Blog/news section
   - Multi-language support

2. **Analytics**
   - Order analytics dashboard
   - Customer insights
   - Revenue tracking

## Technical Notes
- All backend routes MUST use `/api` prefix for Kubernetes ingress
- Frontend uses REACT_APP_BACKEND_URL from .env
- WhatsApp number needs to be updated in mock.js
- Google Maps location can be customized in Contact page

## Next Tasks
1. ✅ Create frontend with mock data
2. ⏳ Build backend API endpoints
3. ⏳ Integrate frontend with backend
4. ⏳ Test end-to-end functionality
5. ⏳ Add email notification system
6. ⏳ Deploy to production

## Design Guidelines Followed
- Deep navy blue (#1a2332) primary color
- Orange (#ff6b35) accent for CTAs and highlights
- No dark gradients on buttons
- Minimal, clean, premium aesthetic
- Mobile-first responsive design
- Smooth hover transitions
- Generous whitespace
- Professional typography
- Lucide React icons (no emoji icons)

## Notes
- Website is currently frontend-only with mock data
- All forms work with local state and toast notifications
- WhatsApp integration uses wa.me links
- Ready for backend implementation
