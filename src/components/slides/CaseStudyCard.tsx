
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  revenue: string;
  impact: string;
  timeframe: string;
  category: string;
  icon: React.ComponentType<any>;
  color: string;
  details: string;
}

const CaseStudyCard = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Loja Fashion Bella",
      description: "Faturamento R$ 1M/ano, reduziu perdas de estoque em 15%",
      revenue: "R$ 150.000",
      impact: "ganho direto anual",
      timeframe: "3 meses",
      category: "Cadastro Automático",
      icon: TrendingUp,
      color: "bg-blue-500",
      details: "Implementação do cadastro automático por IA eliminou 90% dos erros manuais e acelerou o processo de entrada de produtos em 5x"
    },
    {
      id: 2,
      title: "Boutique Glamour",
      description: "Atendimento via imagem no WhatsApp aumentou conversão",
      revenue: "+20%",
      impact: "vendas em 2 meses",
      timeframe: "2 meses",
      category: "IA de Busca",
      icon: Users,
      color: "bg-green-500",
      details: "Clientes enviam foto do produto desejado e recebem resposta instantânea com disponibilidade, preço e variações"
    },
    {
      id: 3,
      title: "Franquia Style Plus",
      description: "Integração Chatwoot centralizou atendimento",
      revenue: "R$ 50.000",
      impact: "economia anual",
      timeframe: "6 meses",
      category: "Integração CRM",
      icon: Clock,
      color: "bg-purple-500",
      details: "Unificação de WhatsApp, Instagram e loja física reduziu equipe de atendimento em 30% mantendo qualidade superior"
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">
        Casos Reais de <span className="text-gold">Sucesso</span>
      </h3>
      
      {caseStudies.map((caseStudy, index) => {
        const IconComponent = caseStudy.icon;
        const isExpanded = expandedCase === caseStudy.id;
        
        return (
          <div
            key={caseStudy.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => setExpandedCase(isExpanded ? null : caseStudy.id)}
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`${caseStudy.color} p-3 rounded-xl text-white`}>
                  <IconComponent size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-charcoal">{caseStudy.title}</h4>
                    <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full font-medium">
                      {caseStudy.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{caseStudy.description}</p>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{caseStudy.revenue}</div>
                      <p className="text-xs text-gray-500">{caseStudy.impact}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{caseStudy.timeframe}</div>
                      <p className="text-xs text-gray-500">implementação</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in-up">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-charcoal mb-2">📋 Detalhes da Implementação:</h5>
                    <p className="text-sm text-gray-700 leading-relaxed">{caseStudy.details}</p>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-xs text-gold font-medium">
                      💡 Clique novamente para recolher
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyCard;
