import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { OrderGas } from './pages/OrderGas';
import { Services } from './pages/Services';
import { BusinessClients } from './pages/BusinessClients';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Ask for location once to avoid prompting on every visit.
    const promptKey = 'bigchase_location_prompted';
    if (localStorage.getItem(promptKey) === 'true') {
      return;
    }
    localStorage.setItem(promptKey, 'true');

    if (!('geolocation' in navigator)) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        localStorage.setItem(
          'bigchase_last_location',
          JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            capturedAt: Date.now()
          })
        );
      },
      () => {
        // User denied location permission or request failed.
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 600000
      }
    );
  }, []);

  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OrderGas />} />
            <Route path="/services" element={<Services />} />
            <Route path="/business" element={<BusinessClients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
