'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState<string | null>(null);
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Simple client-side validation
    if (!username || !email || !password || !city) {
      setError('Please fill in all fields');
      return;
    }

    // Perform registration logic here
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, city }),
      });

      if (response.ok) {
        // Handle successful registration
        console.log('Registration successful');
      } else {
        // Handle registration failure
        setError('Failed to register');
      }
    } catch (error) {
      setError('An error occurred during registration');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#254D32] p-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white bg-opacity-90">
        <div className="text-center text-2xl font-bold text-[#254D32] mb-4">
          BREVNOKZ
        </div>
        <h1 className="text-xl font-bold text-[#254D32] mb-6 text-center">Регистрация</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Имя пользователя:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#254D32] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#254D32] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#254D32] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Город:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#254D32] sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#254D32] text-white font-semibold rounded-md shadow-sm hover:bg-[#1a3a22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#254D32]"
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Уже есть аккаунт?{' '}
            <Link href="/auth/login" className="text-[#254D32] font-semibold">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
