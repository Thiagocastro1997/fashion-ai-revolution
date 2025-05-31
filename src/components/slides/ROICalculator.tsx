
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Target } from 'lucide-react';

const ROICalculator = () => {
  const [selectedScenario, setSelectedScenario] = useState(1);
  const [animatedValues, setAnimatedValues] = useState({
    investment: 0,
    savings: 0,
    revenue: 0,
    roi: 0
  });

  const scenarios = [
    {
      id: 1,
      name: "Loja Pequena",
      description: "Faturamento até R$ 500k/ano",
      investment: 30000,
      savings: 15000,
      revenue: 20000,
      roi: 117
    },
    {
      id: 2,
      name: "Loja Média",
      description: "Faturamento R$ 500k - R$ 2M/ano",
      investment: 50000,
      savings: 25000,
      revenue: 35000,
      roi: 120
    },
    {
      id: 3,
      name: "Franquia/Rede",
      description: "Faturamento acima R$ 2M/ano",
      investment: 80000,
      savings: 40000,
      revenue: 60000,
      roi: 125
    }
  ];

  const currentScenario = scenarios.find(s => s.id === selectedScenario)!;

  useEffect(() => {
    const animateValues = () => {
      const duration = 1500;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setAnimatedValues({
          investment: Math.round(currentScenario.investment * easeOut),
          savings: Math.round(currentScenario.savings * easeOut),
          revenue: Math.round(currentScenario.revenue * easeOut),
          roi: Math.round(currentScenario.roi * easeOut)
        });
        
        currentStep++;
        if (currentStep > steps) {
          clearInterval(interval);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    };
    
    animateValues();
  }, [selectedScenario, currentScenario]);

  const impactMessages = [
    "🔑 Transforme estoque morto em receita viva",
    "🔑 Aumente conversão de interesse online em vendas no físico", 
    "🔑 Venda 2x mais para o mesmo cliente, apenas usando dados",
    "🔑 Reduza o time operacional e reinvista em crescimento"
  ];

  return (
    <div className="space-y-6">
      {/* Scenario Selector */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-charcoal mb-4 text-center">
          Calcule seu ROI Personalizado
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedScenario === scenario.id
                  ? 'border-gold bg-gold/10 shadow-md'
                  : 'border-gray-200 hover:border-gold/50'
              }`}
            >
              <h4 className="font-bold text-charcoal mb-1">{scenario.name}</h4>
              <p className="text-xs text-gray-600">{scenario.description}</p>
            </button>
          ))}
        </div>
        
        {/* ROI Display */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center bg-red-50 rounded-xl p-4">
            <DollarSign className="mx-auto mb-2 text-red-500" size={24} />
            <div className="text-2xl font-bold text-red-600">
              R$ {animatedValues.investment.toLocaleString()}
            </div>
            <p className="text-xs text-gray-600">Investimento</p>
          </div>
          
          <div className="text-center bg-green-50 rounded-xl p-4">
            <Target className="mx-auto mb-2 text-green-500" size={24} />
            <div className="text-2xl font-bold text-green-600">
              R$ {animatedValues.savings.toLocaleString()}
            </div>
            <p className="text-xs text-gray-600">Economia/Ano</p>
          </div>
          
          <div className="text-center bg-blue-50 rounded-xl p-4">
            <TrendingUp className="mx-auto mb-2 text-blue-500" size={24} />
            <div className="text-2xl font-bold text-blue-600">
              R$ {animatedValues.revenue.toLocaleString()}
            </div>
            <p className="text-xs text-gray-600">Receita Extra/Ano</p>
          </div>
          
          <div className="text-center bg-gradient-gold rounded-xl p-4">
            <Calculator className="mx-auto mb-2 text-black" size={24} />
            <div className="text-2xl font-bold text-black">
              {animatedValues.roi}%
            </div>
            <p className="text-xs text-black">ROI em 12 meses</p>
          </div>
        </div>
      </div>
      
      {/* Impact Messages */}
      <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-6">
        <h4 className="text-lg font-bold text-charcoal mb-4 text-center">
          O que você realmente ganha:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {impactMessages.map((message, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-lg p-3 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="text-sm font-medium text-charcoal">{message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
