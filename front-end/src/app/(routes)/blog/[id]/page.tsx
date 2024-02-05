"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import axios from 'axios';

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


const getData = async (id : number)=>{


  const response = await fetch(`http://localhost:7000/${id}`);

  if (!response.ok){
    throw new Error('Could not find post')
  }
  else{
    return response.json()
  }
}

const postData =(id : number) =>{
  const [post,setPost]= useState<Post | null>(null);

  useEffect(() =>{
    const fetchData = async()=>{
      const data = await getData(id);
      setPost(data);
    };
    fetchData();
  },[id]);
  return post;
}

const BlogPost = (props: any) => {

  // console.log('props', props);
  const { id } = props.params

  const [post,setPost] =useState({
    userId: 0,
    id: 0,
    title: "",
    body: "",
    desc: "",
    userName: "",
    userPic:"",
    mainPic:""})
  // console.log('post', post);
  useEffect(() => {
    axios.get('http://localhost:7000/data').then((res) => {
     setPost(res.data[id-1])
    //  console.log('post', res.data[id-1])
    })
  },[])

// console.log(post)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {post?.title}
          </h1>
          <p className={styles.desc}>
            {post?.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={post?.userPic}
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{post?.userName}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={post?.mainPic}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        {post?.body}
        </p>
      </div>
    </div>
  )
}

export default BlogPost
