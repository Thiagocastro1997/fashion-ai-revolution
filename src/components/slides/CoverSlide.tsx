
import React from 'react';

const CoverSlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-black via-charcoal to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gold rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center px-8 pb-32">
        {/* Logo/Brand Area */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-16 h-16 bg-gradient-gold rounded-xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-black">FT</span>
          </div>
          <p className="text-silver text-sm font-light tracking-wider">FASHION TECH SOLUTIONS</p>
        </div>

        {/* Main Title */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">ERP</span>
            <span className="text-gold"> + </span>
            <span className="text-white">IA</span>
          </h1>
          <h2 className="text-5xl lg:text-6xl font-light text-gold mb-4">
            para Moda
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl lg:text-2xl font-light text-silver leading-relaxed max-w-4xl mx-auto">
            A Revolução da <span className="text-gold font-medium">Automação</span> e{' '}
            <span className="text-gold font-medium">Atendimento</span> no Varejo Feminino
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-8 animate-fade-in-up mb-12" style={{ animationDelay: '0.6s' }}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>

        {/* Tech Icons */}
        <div className="flex justify-center space-x-12 opacity-60">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-2">
              <span className="text-gold text-lg font-bold">AI</span>
            </div>
            <p className="text-xs text-silver">Inteligência Artificial</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-2">
              <span className="text-gold text-lg font-bold">CRM</span>
            </div>
            <p className="text-xs text-silver">Gestão de Cliente</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-2">
              <span className="text-gold text-lg font-bold">ERP</span>
            </div>
            <p className="text-xs text-silver">Sistema Integrado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSlide;
