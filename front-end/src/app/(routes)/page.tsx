'use client'
import Image from 'next/image'
import styles from './page.module.css'
import hero from '../assets/hero.png'
import Button from '../components/button/button'
import { useContext } from 'react'
import { ThemeContext } from '../components/context/ThemeContext'


export default function Home() {
  const { mode } = useContext(ThemeContext);
  // console.log('mode page :', mode);
  return (
    <div className={styles.container}>
      <div className={styles.item}> 
        <h1 className={styles.title}>
          Read daily news for good knowledge.
        </h1>
        <p className={styles.desc}>
        News article are published in many different languages, read a article in the language of your choice!
        </p>
        <Button url='/portfolio' text='See more'/>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt='sublogo' className={styles.img}/>
      </div>
    </div>
  )
}
