
import React from 'react';
import { Clock, AlertTriangle, Users, Database } from 'lucide-react';

const ProblemSlide = () => {
  const problems = [
    {
      icon: Clock,
      title: "Cadastro manual demorado",
      description: "Horas perdidas inserindo dados de produtos manualmente"
    },
    {
      icon: AlertTriangle,
      title: "Erros nos SKUs, tamanhos, cores",
      description: "Inconsistências que geram perda de vendas e insatisfação"
    },
    {
      icon: Database,
      title: "Falta de foto no catálogo digital",
      description: "Produtos sem imagem prejudicam vendas online e consultas"
    },
    {
      icon: Users,
      title: "Atendimento não integrado",
      description: "WhatsApp, Instagram e loja física funcionam isoladamente"
    }
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            O Grande <span className="text-red-400">Problema</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As dores reais que todo varejista de moda enfrenta diariamente
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-red-500/20 text-red-400">
                    <IconComponent size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {problem.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Impact */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="mb-6">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              Resultado: Oportunidades Perdidas
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Sem integração e automação, seu negócio perde competitividade, 
              tempo e dinheiro todos os dias. O mercado não espera.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400">↓ 30%</div>
              <p className="text-sm text-gray-400">Produtividade</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">↑ 40%</div>
              <p className="text-sm text-gray-400">Tempo Perdido</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">↓ 25%</div>
              <p className="text-sm text-gray-400">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;
