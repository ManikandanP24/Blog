 "use client"

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  desc: string;
  userName: string;
  userPic: any;
  mainPic: any;
};

interface BlogPostProps {
  params: {
    category: string;
    id: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  const { category, id } = props.params;
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const getData = async (category: string) => {
    try {
      const response = await fetch(`http://localhost:8100/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData(category);
  }, [category]);

  useEffect(() => {
    const selected = posts.find((post) => post.id === Number(id));
    setSelectedPost(selected || null);
  }, [id, posts]);

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{selectedPost.title}</h1>
          <p className={styles.desc}>{selectedPost.desc}</p>
          <div className={styles.author}>
            <Image src={selectedPost.userPic} alt="" width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>{selectedPost.userName}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={selectedPost.mainPic} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{selectedPost.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
