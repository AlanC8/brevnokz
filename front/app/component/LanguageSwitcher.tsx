"use client";
import { useState, useEffect } from 'react';
import { translations } from '@/translations'; // Импортируйте файл переводов

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Этот код выполнится только на клиентской стороне
    const storedLanguage = localStorage.getItem('language');
    
    if (storedLanguage) {
      setLanguage(storedLanguage); // Устанавливаем язык из localStorage
    } else {
      // Устанавливаем язык по умолчанию 'kk' для первых пользователей
      setLanguage('kk');
      localStorage.setItem('language', 'kk');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === 'kk' ? 'ru' : 'kk';
      localStorage.setItem('language', newLang); // Сохраняем новый язык в localStorage
      return newLang;
    });
  };

  // Показываем кнопку только после того, как язык установлен
  if (!language) {
    return null; // Или можно добавить loader/spinner
  }

  const { language: currentLanguage, flag, label } = translations[language];

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center px-3 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none"
    >
      <img src={flag} alt={currentLanguage} className="w-6 h-6 mr-2" />
      <span>{label}</span>
    </button>
  );
}
