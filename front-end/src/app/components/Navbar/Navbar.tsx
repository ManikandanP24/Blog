import Link from 'next/link';
import React from 'react'
import styles from './navbar.module.scss'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
    {
        id:1,
        title : "Home",
        url :"/"
    },
    {
        id:2,
        title : "Trending",
        url :"/portfolio"
    },
    {
        id:3,
        title : "Blog",
        url :"/blog"
    },
    {
        id:4,
        title : "About",
        url :"/about"
    },
    {
        id:5,
        title : "Contact",
        url :"/contact"
    },
    {
        id:6,
        title : "Dashboard",
        url :"/dashboard"
    },
   
];


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        News
      </Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => ( 
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
        
      </div>
      
    </div>
  )
}

export default Navbar
