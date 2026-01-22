import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // We will connect this to the real FastAPI backend in the next step
    // For now, let's simulate a success to style the UI
    try {
      const response = await fetch('http://localhost:8000/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
        // If backend isn't running yet, we might catch error here
        console.error(error);
        setStatus('error');
    }
  };

  return (
    <div className="bg-slate-900 py-16 px-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">
        Join our early access list
      </h2>
      
      {status === 'success' ? (
        <div className="text-green-400 font-medium bg-green-900/20 py-3 px-6 rounded-md inline-block">
          Thank you. We have received your submission.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Joining...' : 'Join Now'}
          </button>
        </form>
      )}
      
      {status === 'error' && (
        <p className="text-red-400 mt-4 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default EmailForm;