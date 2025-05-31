
import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

interface ChartData {
  label: string;
  before: number;
  after: number;
  improvement: string;
  icon: React.ComponentType<any>;
  color: string;
}

const InteractiveChart = () => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null);

  const chartData: ChartData[] = [
    {
      label: "Erros no Cadastro",
      before: 30,
      after: 5,
      improvement: "↓ 83%",
      icon: TrendingUp,
      color: "bg-red-500"
    },
    {
      label: "Tempo de Atendimento",
      before: 15,
      after: 2,
      improvement: "↓ 87%",
      icon: Clock,
      color: "bg-blue-500"
    },
    {
      label: "Taxa de Conversão",
      before: 15,
      after: 35,
      improvement: "↑ 133%",
      icon: Users,
      color: "bg-green-500"
    },
    {
      label: "Margem de Lucro",
      before: 20,
      after: 32,
      improvement: "↑ 60%",
      icon: DollarSign,
      color: "bg-gold"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-bold text-charcoal mb-6 text-center">
        Transformação Operacional - Antes vs Depois
      </h3>
      
      <div className="space-y-4">
        {chartData.map((item, index) => {
          const IconComponent = item.icon;
          const maxValue = Math.max(item.before, item.after);
          const beforeWidth = (item.before / maxValue) * 100;
          const afterWidth = (item.after / maxValue) * 100;
          
          return (
            <div
              key={index}
              className="cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 rounded-lg"
              onMouseEnter={() => setSelectedMetric(index)}
              onMouseLeave={() => setSelectedMetric(null)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${item.color}/20`}>
                    <IconComponent size={16} className={`${item.color.replace('bg-', 'text-')}`} />
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-gold">{item.improvement}</span>
              </div>
              
              <div className="space-y-2">
                {/* Before Bar */}
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500 w-12">Antes:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animationProgress ? `${beforeWidth}%` : '0%',
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-red-600 w-8">{item.before}%</span>
                </div>
                
                {/* After Bar */}
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500 w-12">Depois:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: animationProgress ? `${afterWidth}%` : '0%',
                        animationDelay: `${index * 0.2 + 0.5}s`
                      }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-green-600 w-8">{item.after}%</span>
                </div>
              </div>
              
              {selectedMetric === index && (
                <div className="mt-3 p-3 bg-gold/10 rounded-lg border-l-4 border-gold animate-fade-in-up">
                  <p className="text-xs text-charcoal font-medium">
                    💡 Clique para ver caso real de impacto nesta métrica
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveChart;
