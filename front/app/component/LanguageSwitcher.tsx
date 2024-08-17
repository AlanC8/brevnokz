"use client";
import { useState } from 'react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('kk'); // Начальный язык: 'kk' для казахского, 'ru' для русского

  // Функция для смены языка
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'kk' ? 'ru' : 'kk'));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center px-3 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none"
    >
      {/* Отображение флага в зависимости от выбранного языка */}
      {language === 'kk' ? (
        <>
          <img src="/flag/russian.svg" alt="Русский" className="w-6 h-6 mr-2" />
          <span>Русский</span>
        </>
      ) : (
        <>
          <img src="/flag/kazakhstan.svg" alt="Қазақ" className="w-6 h-6 mr-2" />
          <span>Қазақ</span>
        </>
      )}
    </button>
  );
}
