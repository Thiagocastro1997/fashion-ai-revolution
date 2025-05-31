
import React from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

const ROISlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-gray-50 to-white min-h-screen overflow-y-auto">
      <div className="max-w-6xl mx-auto py-8 pb-32">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Impacto <span className="text-gold">Financeiro</span> e ROI
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Investimento que se paga em menos de 12 meses
          </p>
        </div>

        {/* ROI Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Investment Breakdown */}
          <div className="animate-scale-in">
            <h3 className="text-xl font-bold text-charcoal mb-6 text-center">Composição do Investimento</h3>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-charcoal text-sm">Investimento Inicial</span>
                  <span className="text-lg font-bold text-red-600">R$ 50.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-charcoal text-sm">Economia Anual</span>
                  <span className="text-lg font-bold text-green-600">R$ 20.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-charcoal text-sm">Receita Adicional Anual</span>
                  <span className="text-lg font-bold text-blue-600">R$ 30.000</span>
                </div>
                <div className="border-t-2 border-gold pt-3">
                  <div className="flex justify-between items-center p-3 bg-gradient-gold rounded-lg">
                    <span className="font-bold text-black text-base">ROI Esperado</span>
                    <span className="text-xl font-bold text-black">100% em 12 meses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual ROI Chart */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold text-charcoal mb-6 text-center">Retorno Acumulado</h3>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* Simple Bar Chart */}
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gold mb-2">12 meses</div>
                  <p className="text-gray-600 text-sm">para recuperar investimento</p>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-charcoal">Investimento</span>
                      <span className="text-xs font-medium text-red-600">R$ 50k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-charcoal">Economia (12 meses)</span>
                      <span className="text-xs font-medium text-green-600">R$ 20k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-charcoal">Receita Adicional (12 meses)</span>
                      <span className="text-xs font-medium text-blue-600">R$ 30k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-bold text-charcoal">Retorno Total</span>
                      <span className="text-xs font-bold text-gold">R$ 50k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-gold h-4 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">💰</div>
            <div className="text-2xl font-bold text-green-600 mb-2">R$ 50k</div>
            <p className="text-gray-600 text-sm">Retorno Total Anual</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">📈</div>
            <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-gray-600 text-sm">ROI em 12 Meses</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-2xl font-bold text-gold mb-2">25%</div>
            <p className="text-gray-600 text-sm">Aumento na Margem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROISlide;
