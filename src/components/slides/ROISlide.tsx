
import React from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

const ROISlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Impacto <span className="text-gold">Financeiro</span> e ROI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investimento que se paga em menos de 12 meses
          </p>
        </div>

        {/* ROI Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Investment Breakdown */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Composição do Investimento</h3>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-charcoal">Investimento Inicial</span>
                  <span className="text-2xl font-bold text-red-600">R$ 50.000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-charcoal">Economia Anual</span>
                  <span className="text-2xl font-bold text-green-600">R$ 20.000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-charcoal">Receita Adicional Anual</span>
                  <span className="text-2xl font-bold text-blue-600">R$ 30.000</span>
                </div>
                <div className="border-t-2 border-gold pt-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-gold rounded-lg">
                    <span className="font-bold text-black text-lg">ROI Esperado</span>
                    <span className="text-3xl font-bold text-black">100% em 12 meses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual ROI Chart */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Retorno Acumulado</h3>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Simple Bar Chart */}
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gold mb-2">12 meses</div>
                  <p className="text-gray-600">para recuperar investimento</p>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal">Investimento</span>
                      <span className="text-sm font-medium text-red-600">R$ 50k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-red-500 h-4 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal">Economia (12 meses)</span>
                      <span className="text-sm font-medium text-green-600">R$ 20k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-green-500 h-4 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal">Receita Adicional (12 meses)</span>
                      <span className="text-sm font-medium text-blue-600">R$ 30k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-blue-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-charcoal">Retorno Total</span>
                      <span className="text-sm font-bold text-gold">R$ 50k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-6">
                      <div className="bg-gradient-gold h-6 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">💰</div>
            <div className="text-3xl font-bold text-green-600 mb-2">R$ 50k</div>
            <p className="text-gray-600">Retorno Total Anual</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">📈</div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-gray-600">ROI em 12 Meses</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <div className="text-3xl font-bold text-gold mb-2">25%</div>
            <p className="text-gray-600">Aumento na Margem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROISlide;
