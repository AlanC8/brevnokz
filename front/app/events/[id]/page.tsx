"use client";
import MapComponent from "@/app/components/MapComponent";
import dynamic from "next/dynamic";
import { useParams } from 'next/navigation';
import React from 'react';
import Image from "next/image";

// Динамический импорт компонента карты

// Пример данных для событий
const eventData: Record<string, {
    title: string;
    description: string;
    maxBonus: number;
    location: string;
    city: string;
    directions: string;
    imageUrl: string;
  }> = {
    "1": {
      title: "Участие в субботнике",
      description: "Примите участие в городском субботнике по очистке парка от мусора. Сбор отходов и их сортировка помогут улучшить экологическую ситуацию в районе.",
      maxBonus: 500,
      location: "Президентский парк",
      city: "Алматы",
      directions: "Собраться у главного входа в парк, пройти инструктаж, затем начать уборку по заранее назначенным участкам.",
      imageUrl: "https://tengrinews.kz/userdata/opinion/opinion_982/aee2c08be93a1d2302841409ea474590.JPG" // Замените на реальный URL изображения
    },
    "2": {
      title: "Высадка деревьев",
      description: "Присоединяйтесь к мероприятию по высадке деревьев в парке. Это поможет улучшить качество воздуха и повысить озеленение города.",
      maxBonus: 800,
      location: "Парк Горького",
      city: "Алматы",
      directions: "Встретиться у южного входа в парк, где вас будут ждать саженцы и необходимый инвентарь.",
      imageUrl: "https://avatars.mds.yandex.net/get-altay/6333331/2a0000017fca11c932081b961f70fd4bd378/orig" // Замените на реальный URL изображения
    },
    "3": {
      title: "Эко-просветительская кампания",
      description: "Примите участие в просветительской кампании по повышению осведомленности о проблемах экологии. Распространяйте информацию среди жителей города, чтобы привлечь больше людей к участию в эко-акциях.",
      maxBonus: 600,
      location: "Центральная площадь",
      city: "Алматы",
      directions: "Собраться на центральной площади у фонтана, где будут раздаваться информационные материалы для распространения.",
      imageUrl: "https://avatars.mds.yandex.net/get-altay/248099/2a00000187476e9e452128d891dad8719690/XXL_height" // Замените на реальный URL изображения
    }
  };
  
  

const EventDetails = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  if (!id || !eventData[id]) {
    return <div className="text-center text-red-500">Событие не найдено</div>;
  }

  const event = eventData[id];

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#254D32]">{event.title}</h1>
      
      <Image src={event.imageUrl} alt={event.title} className="w-full h-72 object-cover rounded-lg shadow-lg mb-8" />
      
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Описание</h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">{event.description}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Макс. бонусы</h3>
            <p className="text-2xl text-[#FFA500] font-bold mt-2">{event.maxBonus} очков</p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Местоположение</h3>
            <p className="text-lg text-gray-600 mt-2">{event.location}</p>
            <p className="text-sm text-gray-500 mt-1">{event.directions}</p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Город</h3>
            <p className="text-lg text-gray-600 mt-2">{event.city}</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Как добраться</h3>
          <div className="h-64 bg-gray-200 rounded-lg shadow-inner mt-4 overflow-hidden">
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
