import React, { useState, useEffect } from 'react';

const AdminView = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple check for assignment
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
      <div className="flex justify-center items-center h-screen bg-slate-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Admin Password"
            className="border p-2 rounded w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-slate-900 text-white px-4 py-2 rounded w-full">
            Access Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-6">Submission Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub.id} className="border-b hover:bg-slate-50">
                <td className="py-3 px-4 text-slate-500">{sub.id}</td>
                <td className="py-3 px-4 font-medium">{sub.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {submissions.length === 0 && (
          <p className="p-4 text-slate-500">No submissions yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminView;