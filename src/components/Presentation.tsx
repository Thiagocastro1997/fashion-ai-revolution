
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CoverSlide from './slides/CoverSlide';
import CurrentScenarioSlide from './slides/CurrentScenarioSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import BenefitsSlide from './slides/BenefitsSlide';
import ROISlide from './slides/ROISlide';
import RoadmapSlide from './slides/RoadmapSlide';
import ConclusionSlide from './slides/ConclusionSlide';

const slides = [
  CoverSlide,
  CurrentScenarioSlide,
  ProblemSlide,
  SolutionSlide,
  BenefitsSlide,
  ROISlide,
  RoadmapSlide,
  ConclusionSlide,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Current Slide */}
      <div className="w-full h-full">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white/90 border-gray-300 hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-gold scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-white/90 border-gray-300 hover:bg-gray-50"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-sm text-gray-500 bg-white/90 px-3 py-1 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
