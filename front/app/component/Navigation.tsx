import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={`${styles.navigation} shadow-custom-dark shadow-ml`}>
      <Link href='/' className='!no-underline'>
        <span className='flex text-center h-[57px] hidden md:block text-xl !no-underline font-bold text-white'>
          BrevnoKZ
        </span>
      </Link>
      <ul className=''>
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 p-3 rounded-lg text-white !no-underline hover:bg-[#254D32] active:bg-[#1a3a22] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img src='icons/home.svg' className="w-6 h-6" alt="Home" />
            <span className='hidden md:block'>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="flex items-center gap-2 p-3 rounded-lg text-white !no-underline hover:bg-[#254D32] active:bg-[#1a3a22] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img src='icons/location.svg' className="w-6 h-6" alt="Location" />
            <span className='hidden md:block'>
              Location
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="flex items-center gap-2 p-3 rounded-lg text-white !no-underline hover:bg-[#254D32] active:bg-[#1a3a22] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img src='icons/group.svg' className="w-6 h-6" alt="Group" />
            <span className='hidden md:block'>
              Group
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="flex items-center gap-2 p-3 rounded-lg text-white !no-underline hover:bg-[#254D32] active:bg-[#1a3a22] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img src='icons/person.svg' className="w-6 h-6" alt="Person" />
            <span className='hidden md:block'>
              Person
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;