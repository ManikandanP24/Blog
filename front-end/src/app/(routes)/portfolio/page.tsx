import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href='/portfolio/news' className={styles.item}>
          <span className={styles.title}>News</span>
        </Link>

        <Link href='/portfolio/entertainment' className={styles.item}>
          <span className={styles.title}>Entertainment</span>
        </Link>

        <Link href='/portfolio/sports' className={styles.item}>
          <span className={styles.title}>Sports</span>
        </Link>     
      </div>
    </div>
  )
}

export default Portfolio
