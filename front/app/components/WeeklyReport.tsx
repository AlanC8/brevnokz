"use client"
import React, { useState, useRef, useEffect } from "react";
import { FaRoad, FaTree, FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface WeeklyReportProps {
  distance: string;
  planted: string;
  time: string;
}

const WeeklyReport: React.FC<WeeklyReportProps> = ({ distance, planted, time }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("отчет за неделю");
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectPeriod = (period: string) => {
    setSelectedPeriod(period);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Ваш отчет за {selectedPeriod}</h2>
        <button 
          onClick={toggleAccordion} 
          className="text-gray-500 text-sm flex items-center"
        >
          {selectedPeriod} 
          {isOpen ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
        </button>
      </div>
      {isOpen && (
        <div ref={contentRef} className="bg-white shadow rounded-lg p-3 mb-4 transition-max-height duration-500 ease-in-out overflow-hidden">
          <button 
            onClick={() => handleSelectPeriod("отчет за неделю")} 
            className="w-full text-left p-2 hover:bg-gray-100"
          >
            Отчет за неделю
          </button>
          <button 
            onClick={() => handleSelectPeriod("отчет за месяц")} 
            className="w-full text-left p-2 hover:bg-gray-100"
          >
            Отчет за месяц
          </button>
          <button 
            onClick={() => handleSelectPeriod("отчет за год")} 
            className="w-full text-left p-2 hover:bg-gray-100"
          >
            Отчет за год
          </button>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex items-center justify-center">
          <FaRoad className="text-gray-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Расстояние</p>
            <p className="font-bold text-lg text-gray-800">{distance}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <FaTree className="text-gray-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Посажено</p>
            <p className="font-bold text-lg text-gray-800">{planted}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <FaClock className="text-gray-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Время</p>
            <p className="font-bold text-lg text-gray-800">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReport;
