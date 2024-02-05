// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import BlogLayout from './page';
// import styles from './page.module.scss';

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
//   desc: string;
//   userName: string;
//   userPic: string;
//   mainPic: any;
// };
// const fetchData = async (): Promise<Post[]> => {
//   const response = await fetch('http://localhost:7000/data', {
//     headers: {
//       'Cache-Control': 'no-cache',
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return response.json();
// };

// const BlogPage: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   const getPosts = async () => {
//     try {
//       const data = await fetchData();
//       setPosts(data);
//       console.log('Fetched data:', data); // Log the fetched data
//     } catch (error) {
//       // console.error('Error fetching data:', error.message);
//     }
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return (
//     <BlogLayout>
//       {posts.map((item: Post) => (
//         <div className={styles.container} key={item.id}>
//           <Link href={`/blog/${item.id}`} passHref>
//             <a className={styles.container}>
//               <div className={styles.imageContainer}>
//                 <Image
//                   src={item?.mainPic}
//                   alt=""
//                   width={400}
//                   height={250}
//                   className={styles.image}
//                 />
//               </div>
//               <div className={styles.content}>
//                 <h1 className={styles.title}>{item.title}</h1>
//                 <p className={styles.desc}>{item.desc}</p>
//               </div>
//             </a>
//           </Link>
//         </div>
//       ))}
//     </BlogLayout>
//   );
// };
// export default BlogPage;