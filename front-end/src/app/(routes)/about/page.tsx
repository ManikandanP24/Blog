import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import Button from '@/app/components/button/button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Without fear and without favor</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Digital Storytelling is a short form of digital media production that allows everyday people to share
            experiences and stories. It is a relatively new term which describes the new practice of everyday people
            who use digital tools to tell their ‘story’. Digital stories often present in compelling interactive formats. 
            <br/>
            <br/>
             Digital storytelling can also cover a range of digital narratives (web-based stories, interactive
             stories, hypertexts, and narrative computer games); It is sometimes used to refer to film-making in 
             general, and as of late, it has been used to describe advertising and promotion efforts by commercial 
             and non-profit enterprises.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            News Writers narrate or write news stories, reviews, or commentary for print, broadcast, or other 
            communications media such as newspapers, magazines, radio, or television. 
            May collect and analyze information through,
            <br />
            <br /> - Interview
            <br />
            <br /> - Investigation
            <br />
            <br /> - Observation
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About
