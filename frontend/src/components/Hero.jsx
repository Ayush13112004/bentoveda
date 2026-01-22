import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-orange-50 to-slate-50 py-24 px-6 text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Traditional Wisdom,<br />Modern Convenience
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Making healthy, balanced eating easy and reliable for busy professionals and families.
        </p>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto mt-6 leading-relaxed">
          Fresh, nutritionally balanced meals inspired by traditional Indian food wisdom — thoughtfully designed to support energy, focus, gut health, and overall well-being.
        </p>
      </div>
    </div>
  );
};

export default Hero;