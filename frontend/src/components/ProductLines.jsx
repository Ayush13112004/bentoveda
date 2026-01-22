import React from 'react';
import { Globe, Soup, ArrowRight } from 'lucide-react';

const ProductLines = () => {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
        How We Serve You
      </h2>
      <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
        Fresh, balanced meals delivered through flexible channels that fit modern lifestyles
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Workplace Lunches */}
        <div className="group border-2 border-slate-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 bg-white">
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
            <Soup size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Workplace Lunches</h3>
          <p className="text-slate-600 leading-relaxed">
            Fresh, balanced meals delivered daily to your office. Consistency over chaos, nutrition without guesswork.
          </p>
        </div>

        {/* Institutional Partnerships */}
        <div className="group border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 bg-white">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
            <Globe size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Institutional Partners</h3>
          <p className="text-slate-600 leading-relaxed">
            Scalable meal solutions for organizations that value employee well-being and sustained performance.
          </p>
        </div>

        {/* Subscriptions */}
        <div className="group border-2 border-slate-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl transition-all duration-300 bg-white">
          <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
            <ArrowRight size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Subscriptions</h3>
          <p className="text-slate-600 leading-relaxed">
            Regular, reliable meals for busy professionals and families. Easy, repeatable, and designed for everyday well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductLines;