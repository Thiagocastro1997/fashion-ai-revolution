
import React from 'react';
import { ArrowRight, Calendar, Zap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConclusionSlide = () => {
  const nextSteps = [
    {
      icon: Calendar,
      title: "Agende uma demonstração exclusiva",
      description: "Veja o sistema funcionando com seus próprios dados",
      action: "Agendar Demo"
    },
    {
      icon: Zap,
      title: "Inicie o piloto em até 30 dias",
      description: "Teste gratuitamente por 30 dias sem compromisso",
      action: "Começar Piloto"
    },
    {
      icon: Trophy,
      title: "Junte-se à revolução do varejo inteligente",
      description: "Seja uma das primeiras lojas com IA integrada",
      action: "Quero Participar"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-black via-charcoal to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Impact Quote */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-6xl mb-8">💡</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            "Com <span className="text-gold">IA</span>, o varejo de moda não apenas vende mais — 
            ele vende <span className="text-gold">melhor</span>, mais <span className="text-gold">rápido</span> e 
            com menos <span className="text-gold">perdas</span>."
          </h1>
        </div>

        {/* Next Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Próximos Passos
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gold rounded-xl">
                      <IconComponent size={32} className="text-black" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-gold text-black hover:bg-dark-gold font-semibold py-3"
                  >
                    {step.action}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-gold rounded-2xl p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl font-bold text-black mb-4">
            Transforme Seu Negócio Hoje
          </h3>
          <p className="text-lg text-black/80 mb-6 max-w-2xl mx-auto">
            Não deixe a concorrência sair na frente. A revolução digital do varejo já começou.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-black text-white hover:bg-charcoal font-bold px-8 py-4 text-lg"
            >
              Solicitar Proposta Comercial
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white font-bold px-8 py-4 text-lg"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-gold font-semibold mb-2">Fashion Tech Solutions</div>
          <div className="text-silver text-sm">
            contato@fashiontech.com | (11) 9999-9999 | www.fashiontech.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlide;
