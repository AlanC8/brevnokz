'use client';

import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Simple client-side validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Perform authentication logic here
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
      } else {
        // Handle login failure
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="login-page h-screen w-screen flex flex-col justify-center bg-gray-200">
      <div className="flex gap-1 items-center mx-auto">
        <a>
          <img src="/vercel.svg" className="" width='200px'/>
        </a>
      </div>
      <div className="flex flex-col justify-center w-[500px] min-h-[400px] rounded-xl shadow-md my-20 mx-auto bg-white">
        <h1 className="text-center text-1.5xl text-gray-800 font-medium leading-none m-[15px]">
          C возвращением!
        </h1>
        <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}
