import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import DineIn from './components/DineIn';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Menu />
        <DineIn />
        <Reservation />
        <Contact />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;