import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Logo Component for Admin
const Logo = () => (
  <Link to="/" className="font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity">
    <span className="text-slate-900">Bento</span>
    <span className="text-orange-600">Veda</span>
  </Link>
);

const AdminView = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchSubmissions();
    } else {
      alert('Invalid credentials');
    }
  };

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/submissions');
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
      }
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <span className="font-bold text-2xl tracking-tight">
                <span className="text-slate-900">Bento</span>
                <span className="text-orange-600">Veda</span>
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Admin Login</h2>
          </div>
          <div onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              className="border-2 border-slate-200 p-4 rounded-xl w-full mb-6 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 text-slate-900 placeholder-slate-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              onClick={handleLogin}
              className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 rounded-xl w-full font-semibold hover:from-slate-800 hover:to-slate-700 transition-all shadow-lg">
              Access Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Logo />
          <span className="text-slate-600 font-medium">Admin Dashboard</span>
        </div>
      </nav>
      
      <div className="max-w-6xl mx-auto py-10 px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6">
            <h1 className="text-2xl font-bold text-white">Email Submissions</h1>
            <p className="text-slate-300 mt-1">Total subscribers: {submissions.length}</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b-2 border-slate-200">
                <tr>
                  <th className="text-left py-4 px-8 font-semibold text-slate-700">ID</th>
                  <th className="text-left py-4 px-8 font-semibold text-slate-700">Email Address</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub, index) => (
                  <tr key={sub.id} className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="py-4 px-8 text-slate-500 font-medium">{sub.id}</td>
                    <td className="py-4 px-8 text-slate-900 font-medium">{sub.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {submissions.length === 0 && (
              <div className="p-12 text-center">
                <p className="text-slate-400 text-lg">No submissions yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;