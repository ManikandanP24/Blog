import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        ©️2024 New Blog Alrights Reserved      
        <div className={styles.social}>
          <Image src="/1.png" alt="SocialMedia" className={styles.icon} width={15} height={15}  />
          <Image src="/2.png" alt="SocialMedia" className={styles.icon} width={15} height={15}  />
          <Image src="/3.png" alt="SocialMedia" className={styles.icon} width={15} height={15}  />
          <Image src="/4.png" alt="SocialMedia" className={styles.icon} width={15} height={15}  />
        </div>
    </div>
  )
}

export default Footer
