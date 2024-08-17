import Link from 'next/link';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <header className={'flex items-center justify-between bg-customGreen h-[64px]'}>
      <span className='pl-[20px] text-white'>
          title
      </span>
      <ul className={'flex gap-5 pr-5'}>
        <li><Link href="/about">
          <img src='icons/chat.svg'/>
        </Link></li>
        <li><Link href="/">
          <img src='icons/notification.svg'/>
        </Link></li>
      </ul>
    </header>
  );
};

export default Navigation;
