
import React from 'react';
import ROICalculator from './ROICalculator';

const EnhancedROISlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Impacto <span className="text-gold">Financeiro</span> Real
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Números concretos e projeções personalizadas para seu negócio
          </p>
          <div className="bg-gold/20 border border-gold rounded-full px-6 py-2 inline-block">
            <span className="text-gold font-bold text-sm">
              💰 Imagine gerar R$ 300 mil a mais em vendas anuais apenas corrigindo cadastros
            </span>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mb-12 animate-scale-in">
          <ROICalculator />
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-charcoal to-gray-800 rounded-2xl p-8 text-white animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gold">Insights</span> Estratégicos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-bold text-gold mb-2">WhatsApp = Canal de Vendas</h4>
              <p className="text-sm text-gray-300">
                Seu WhatsApp se torna seu maior canal de vendas — automático, rápido, sem atrito
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-gold mb-2">Tempo = Crescimento</h4>
              <p className="text-sm text-gray-300">
                Com menos tempo perdido em operação, mais tempo para pensar em crescer
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold text-gold mb-2">Dados = Vendas</h4>
              <p className="text-sm text-gray-300">
                Transforme cada interação em dados valiosos para vender mais e melhor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedROISlide;
