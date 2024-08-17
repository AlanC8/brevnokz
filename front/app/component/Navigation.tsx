import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={`${styles.navigation} shadow-custom-dark shadow-ml`}>
      <Link href='/'><span className='logo mb-[30px] hidden md:block'>BrevnoKZ</span></Link>
      <ul>
        <li><Link href="/" className='flex items-center gap-1'>
          <img src='icons/home.svg'/>
          <span className='hidden md:block'>
            Home
          </span>
        </Link></li>
        <li><Link href="/about" className='flex items-center gap-1'>
          <img src='icons/location.svg'/>
          <span className='hidden md:block'>
          Location
          </span>
        </Link></li>
        <li><Link href="/services" className='flex items-center gap-1'>
          <img src='icons/group.svg'/>
          <span className='hidden md:block'>
          Group
          </span>
        </Link></li>
        <li><Link href="/contact" className='flex items-center gap-1'>
          <img src='icons/person.svg'/>
          <span className='hidden md:block'>
          Person
          </span>
        </Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
