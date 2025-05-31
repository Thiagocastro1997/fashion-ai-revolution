
import React from 'react';
import { Camera, Database, MessageSquare, ArrowRight } from 'lucide-react';

const SolutionSlide = () => {
  const steps = [
    {
      number: "1",
      icon: Camera,
      title: "Cadastro Automático",
      description: "Foto + IA classifica, cadastra SKU, variações",
      color: "bg-blue-500"
    },
    {
      number: "2", 
      icon: Database,
      title: "Consulta Inteligente",
      description: "Cliente manda imagem, IA busca no banco",
      color: "bg-green-500"
    },
    {
      number: "3",
      icon: MessageSquare,
      title: "Chatwoot Integrado",
      description: "Centraliza WhatsApp, Instagram, e loja física num CRM único",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="slide-container bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Nossa <span className="text-gold">Solução</span>
          </h1>
          <h2 className="text-3xl font-light text-gray-600 mb-4">
            ERP Integrado com IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma completa que automatiza processos e unifica o atendimento
          </p>
        </div>

        {/* Solution Flow */}
        <div className="relative mb-16">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gray-300 z-0"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 animate-scale-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <IconComponent size={40} className="text-gray-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-charcoal mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <ArrowRight size={20} className="text-gold" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-gold rounded-2xl p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <h3 className="text-2xl font-bold text-black mb-6">
            Resultado: Automação Completa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/10 rounded-xl p-4">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold text-black">Velocidade</p>
            </div>
            <div className="bg-black/10 rounded-xl p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-semibold text-black">Precisão</p>
            </div>
            <div className="bg-black/10 rounded-xl p-4">
              <div className="text-3xl mb-2">🔄</div>
              <p className="font-semibold text-black">Integração</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;
