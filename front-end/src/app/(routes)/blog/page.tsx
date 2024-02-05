import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  desc: string;
  userName: string;
  userPic:string
  mainPic:any
};

const getData= async ()=>{
  const response = await fetch('http://localhost:8100/data',{
    headers: {
      'Cache-Control': 'no-cache',
    },
  })
  
  if(!response.ok){
    throw new Error('Failed to fetch data')
  }
  else{
    // console.log('response .....', response);
    return response.json()
  }
}
// console.log('response', getData)

const Blog = async () => {
 
const posts = await getData();
  
  return (
    <div className={styles.mainContainer}>

      {posts.map((item: Post)=>{
        // console.log('item', item);
        return (
          <div className={styles.container} key={item.id}>
            <Link href={`/blog/${item.id}`} className={styles.container}>
              <div className={styles.imageContainer}>
                <Image
                src={item?.mainPic}
                alt=""
                width={400}
                height={250}
                className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </Link>
          </div>);
      
      })}
    </div>
  )
}
export const newData = getData

export default Blog
