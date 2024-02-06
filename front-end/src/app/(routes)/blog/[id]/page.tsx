"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import axios from 'axios';
import Link from 'next/link';

// type dyanmaicId ={
//   id: number;
// }

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
  desc: string,
  userName: string,
  userPic:any,
  mainPic:any
};
const BlogPost = (props: any) => {

  // console.log('props', props);
  const { category, id } = props.params;
  console.log(typeof(id))
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  console.log('id',id)
  
  console.log('Fetching data :', props.params.category)

  useEffect (()=>{
    const fetch = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8001/blog`)
        setSelectedPost (res.data)
        console.log('.......',res.data)
      }
      catch(err){
        console.log(err)
    }
  }
  fetch()
  // console.log('...............',fetch())
  },[])

  console.log('selectedPost',selectedPost)

  // const blogId = selectedPost && selectedPost[parseInt(id)-1]


  const blogId = selectedPost&& selectedPost.find((obj: Post ) => obj.id === parseInt(id))
  console.log(blogId)

  

// console.log(post)
  return (
    <div className={styles.container}>
      
      <div className={styles.top}>
        <div className={styles.info}>


          <h1 className={styles.title}>
            {blogId?.title}
           
          </h1>
          <p className={styles.desc}>
            {blogId?.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={blogId?.userPic}
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{blogId?.userName}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={blogId?.mainPic}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        {blogId?.body}
        </p>
      </div>
      <Link href={'./'}><button className={styles.back} >back</button></Link>
    </div>
  )
}

export default BlogPost
