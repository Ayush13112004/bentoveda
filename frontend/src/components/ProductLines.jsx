import React from 'react';
import { Globe, Soup } from 'lucide-react'; // Clean icons

const ProductLines = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      {/* Indian Line */}
      <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
        <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-orange-600">
          <Soup size={24} />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Indian Line</h3>
        <p className="text-slate-600">
          Authentic, homestyle recipes crafted with traditional spices and balanced macros.
        </p>
      </div>

      {/* Global Line */}
      <div className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
          <Globe size={24} />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Global Line</h3>
        <p className="text-slate-600">
          International flavors curated for the modern palate, bringing the world to your desk.
        </p>
      </div>
    </div>
  );
};

export default ProductLines;