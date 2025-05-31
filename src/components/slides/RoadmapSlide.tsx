
import React from 'react';
import { Calendar, CheckCircle, Settings, TrendingUp } from 'lucide-react';

const RoadmapSlide = () => {
  const phases = [
    {
      month: "Mês 1",
      title: "Diagnóstico e planejamento",
      description: "Análise do negócio, definição de requisitos e cronograma",
      icon: Calendar,
      status: "planned",
      color: "bg-blue-500"
    },
    {
      month: "Mês 2-3",
      title: "Desenvolvimento ERP e integração IA",
      description: "Criação da plataforma, treinamento da IA e integração de sistemas",
      icon: Settings,
      status: "planned",
      color: "bg-purple-500"
    },
    {
      month: "Mês 4",
      title: "Testes piloto e integração Chatwoot",
      description: "Validação do sistema, testes com usuários reais e ajustes finais",
      icon: CheckCircle,
      status: "planned",
      color: "bg-green-500"
    },
    {
      month: "Mês 5+",
      title: "Monitoramento, KPIs e escalabilidade",
      description: "Acompanhamento de resultados, otimizações e expansão do sistema",
      icon: TrendingUp,
      status: "ongoing",
      color: "bg-gold"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Roadmap de <span className="text-gold">Implementação</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um cronograma claro e estruturado para garantir o sucesso do projeto
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden lg:block"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={index}
                  className="relative flex items-start space-x-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex relative z-10">
                    <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="lg:hidden flex items-center mb-4">
                      <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center text-white mr-4`}>
                        <IconComponent size={20} />
                      </div>
                      <span className="text-lg font-bold text-gold">{phase.month}</span>
                    </div>
                    
                    <div className="lg:grid lg:grid-cols-4 lg:gap-6 lg:items-center">
                      <div className="lg:col-span-1 hidden lg:block">
                        <span className="text-2xl font-bold text-gold">{phase.month}</span>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-charcoal mb-3">
                          {phase.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                      
                      <div className="lg:col-span-1 mt-4 lg:mt-0 text-right">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                          phase.status === 'planned' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {phase.status === 'planned' ? 'Planejado' : 'Contínuo'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-gradient-gold rounded-2xl p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-black mb-6">
            Garantias de Sucesso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/10 rounded-xl p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-semibold text-black">Acompanhamento Semanal</p>
            </div>
            <div className="bg-black/10 rounded-xl p-4">
              <div className="text-3xl mb-2">📊</div>
              <p className="font-semibold text-black">KPIs Mensuráveis</p>
            </div>
            <div className="bg-black/10 rounded-xl p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="font-semibold text-black">Suporte Dedicado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
