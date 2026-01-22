import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import ProductLines from './components/ProductLines';
import EmailForm from './components/EmailForm';
import AdminView from './components/AdminView';

// Logo Component
const Logo = () => (
  <Link to="/" className="font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity">
    <span className="text-slate-900">Bento</span>
    <span className="text-orange-600">Veda</span>
  </Link>
);

// Helper component to group landing page sections
const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Logo />
        <Link to="/admin" className="text-sm text-slate-400 hover:text-slate-900 transition-colors font-medium">
          Admin
        </Link>
      </div>
    </nav>
    
    <Hero />
    <ProductLines />
    <EmailForm />
    
    <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-4">
          <span className="font-bold text-2xl tracking-tight">
            <span className="text-white">Bento</span>
            <span className="text-orange-600">Veda</span>
          </span>
        </div>
        <p className="text-sm">&copy; 2026 BentoVeda. All rights reserved.</p>
      </div>
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