import Link from 'next/link';
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation: React.FC = () => {
  return (
    <header className={'flex items-center justify-between bg-customGreen h-[64px]'}>
      <span className='pl-[20px] text-white'>
        title
      </span>
      <ul className={'flex gap-5 pr-5 items-center'}>
        <LanguageSwitcher />
        <li>
          <Link href="/notifications">
            <img src='icons/notification.svg' alt="Notifications" />
          </Link>
        </li>
        <li>
          <Link href="/auth/login" className='text-white'>
            Вход
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
