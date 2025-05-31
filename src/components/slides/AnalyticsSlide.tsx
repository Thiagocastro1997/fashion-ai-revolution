
import React from 'react';
import InteractiveChart from './InteractiveChart';
import CaseStudyCard from './CaseStudyCard';

const AnalyticsSlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Transformação <span className="text-gold">Comprovada</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dados reais de performance e casos de sucesso implementados
          </p>
        </div>

        {/* Interactive Chart and Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Chart */}
          <div className="animate-scale-in">
            <InteractiveChart />
          </div>

          {/* Case Studies */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CaseStudyCard />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-gold to-dark-gold rounded-2xl p-6 text-black">
            <h3 className="text-xl font-bold mb-2">
              🎯 Resultados Mensuráveis em Semanas, Não Meses
            </h3>
            <p className="text-sm opacity-90">
              Cada implementação é acompanhada com métricas claras de performance e ROI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSlide;
