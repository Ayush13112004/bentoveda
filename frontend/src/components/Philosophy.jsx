import React from 'react';

const Philosophy = () => {
  return (
    <div className="bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Our Philosophy
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-3">Consistency</div>
            <p className="text-slate-600 leading-relaxed">Over excess</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-3">Balance</div>
            <p className="text-slate-600 leading-relaxed">Over indulgence</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-3">Thoughtfulness</div>
            <p className="text-slate-600 leading-relaxed">Over shortcuts</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            In a world of impulsive food choices and inconsistent eating habits, BentoVeda brings clarity and reliability to daily meals.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each meal is structured, balanced, and purpose-driven — thoughtfully designed using time-tested dietary principles and modern nutritional understanding. So everyday eating supports energy, focus, gut health, and overall well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;