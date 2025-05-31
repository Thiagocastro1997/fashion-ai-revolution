
import React from 'react';
import { TrendingDown, Users, Clock, Database } from 'lucide-react';

const CurrentScenarioSlide = () => {
  const stats = [
    {
      icon: TrendingDown,
      percentage: "70%",
      description: "das lojas não têm controle preciso de estoque",
      source: "SEBRAE, 2024",
      color: "text-red-500"
    },
    {
      icon: Cash,
      percentage: "8-10%",
      description: "perdas médias ao ano por falhas em cadastro",
      source: "Análise setorial",
      color: "text-orange-500"
    },
    {
      icon: Users,
      percentage: "60%",
      description: "das clientes consultam online antes de ir à loja",
      source: "Think With Google, 2024",
      color: "text-blue-500"
    },
    {
      icon: Database,
      percentage: "25%",
      description: "dos sistemas têm integração online/offline eficaz",
      source: "Pesquisa PMEs",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="slide-container bg-gradient-silver">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            O Cenário Atual do <span className="text-gold">Varejo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Os números revelam uma realidade preocupante no varejo de moda feminina
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl bg-gray-50 ${stat.color}`}>
                    <IconComponent size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-charcoal mb-2">
                      {stat.percentage}
                    </div>
                    <p className="text-lg text-gray-700 mb-3">
                      {stat.description}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      Fonte: {stat.source}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Issues */}
        <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold">
              INEFICIÊNCIA
            </div>
            <div className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
              PERDAS
            </div>
            <div className="bg-gold text-black px-6 py-3 rounded-full font-semibold">
              OPORTUNIDADE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add missing Cash icon component
const Cash = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="m6 16 6-4 6 4"/>
    <path d="m6 8 6 4 6-4"/>
  </svg>
);

export default CurrentScenarioSlide;
