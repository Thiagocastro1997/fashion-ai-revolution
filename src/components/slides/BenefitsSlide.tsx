
import React from 'react';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

const BenefitsSlide = () => {
  const metrics = [
    {
      icon: AlertTriangle,
      label: "Erros no cadastro",
      before: "~30%",
      after: "<5%",
      improvement: "↓ 83%"
    },
    {
      icon: TrendingUp,
      label: "Giro de estoque",
      before: "Lento",
      after: "+30% agilidade",
      improvement: "↑ 30%"
    },
    {
      icon: Clock,
      label: "Atendimento por consulta",
      before: "Demorado (manual)",
      after: "Instantâneo (IA)",
      improvement: "↑ 90%"
    },
    {
      icon: Cart,
      label: "Conversão de vendas",
      before: "Média",
      after: "+25%",
      improvement: "↑ 25%"
    },
    {
      icon: Users,
      label: "Satisfação do cliente (NPS)",
      before: "60-70",
      after: "85+",
      improvement: "↑ 21%"
    },
    {
      icon: DollarSign,
      label: "Custos operacionais",
      before: "Elevados",
      after: "-20%",
      improvement: "↓ 20%"
    }
  ];

  return (
    <div className="slide-container bg-gradient-silver">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Benefícios <span className="text-gold">Operacionais</span>
          </h1>
          <h2 className="text-3xl font-light text-gray-600 mb-4">
            Antes vs Depois
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformação mensurável em todos os indicadores-chave
          </p>
        </div>

        {/* Metrics Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Table Header */}
          <div className="bg-gradient-gold text-black p-6">
            <div className="grid grid-cols-4 gap-4 font-bold text-lg">
              <div>Indicador</div>
              <div className="text-center">Antes</div>
              <div className="text-center">Depois</div>
              <div className="text-center">Melhoria</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-50 transition-colors duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Indicator */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <IconComponent size={20} className="text-gray-600" />
                    </div>
                    <span className="font-medium text-charcoal">{metric.label}</span>
                  </div>

                  {/* Before */}
                  <div className="text-center">
                    <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                      {metric.before}
                    </span>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {metric.after}
                    </span>
                  </div>

                  {/* Improvement */}
                  <div className="text-center">
                    <span className="inline-block bg-gold text-black px-3 py-1 rounded-full text-sm font-bold">
                      {metric.improvement}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 bg-green-50 border-l-4 border-green-500 p-8 rounded-r-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Transformação Comprovada
            </h3>
            <p className="text-lg text-green-600">
              Resultados mensuráveis que impactam diretamente o seu faturamento e operação
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add missing components
const AlertTriangle = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/>
    <path d="m12 17 .01 0"/>
  </svg>
);

const Cart = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

export default BenefitsSlide;
