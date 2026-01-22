import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import ProductLines from './components/ProductLines';
import EmailForm from './components/EmailForm';
import AdminView from './components/AdminView';

// Helper component to group landing page sections
const LandingPage = () => (
  <div className="min-h-screen bg-white text-slate-900 font-sans">
    <nav className="p-6 flex justify-between items-center">
        <span className="font-bold text-lg">BentoVeda</span>
        {/* Hidden link for you to access admin easily */}
        <Link to="/admin" className="text-sm text-slate-400 hover:text-slate-900">Admin</Link>
    </nav>
    <Hero />
    <ProductLines />
    <EmailForm />
    <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
      &copy; 2026 BentoVeda. All rights reserved.
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </Router>
  );
}

export default App;