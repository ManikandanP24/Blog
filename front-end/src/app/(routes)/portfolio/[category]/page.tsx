"use client"

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Button from '@/app/components/button/button';
import Image from 'next/image';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  desc: string;
  userName: string;
  userPic: string;
  mainPic: any;
};

interface CategoryProps {
  data: any;
  props: string;
  params: {
    category: string;
  };
}

const Category: React.FC<CategoryProps> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8100/${props.params.category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        } else {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.params.category]);

  // console.log('Fetching data', props.params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{props.params.category}</h1>
      {posts.map((item: Post) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See more" url={`/portfolio/${props.params.category}/${item.id}`}/>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              alt=""
              src={item.mainPic}
              height={400}
              width={600}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;


