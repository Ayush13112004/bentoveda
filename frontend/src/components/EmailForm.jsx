import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:8000/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start Eating Better Today
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Join our early access list for workplace lunches, institutional partnerships, or subscription plans.
        </p>
        
        {status === 'success' ? (
          <div className="bg-green-500/20 border-2 border-green-500 text-green-300 font-medium py-4 px-6 rounded-xl inline-block backdrop-blur-sm">
            Thank you! We have received your submission.
          </div>
        ) : (
          <div onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="px-6 py-4 rounded-xl w-full sm:flex-1 focus:outline-none focus:ring-4 focus:ring-orange-500/50 text-slate-900 placeholder-slate-400 bg-white shadow-lg text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="button"
              disabled={status === 'loading'}
              onClick={handleSubmit}
              className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {status === 'loading' ? 'Joining...' : 'Join Now'}
            </button>
          </div>
        )}
        
        {status === 'error' && (
          <p className="text-red-400 mt-4 bg-red-500/20 border border-red-500 py-2 px-4 rounded-lg inline-block">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default EmailForm;