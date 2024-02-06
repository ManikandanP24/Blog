// 'use client'
// import React, { useEffect, useState } from 'react'
// import styles from './page.module.scss'
// import Link from 'next/link'
// import Image from 'next/image'
// import { MdOutlineDelete } from "react-icons/md";
// import axios from 'axios'


// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
//   desc: string;
//   userName: string;
//   userPic:string
//   mainPic:any
// };

// const Blog =  () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8001/blog`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         } else {
//           const data = await response.json();
//           setPosts(data);
//           console.log("................",data)
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

  
// // const posts = await getData();
  
//   return (
//     <div className={styles.mainContainer}>

//       {posts.map((item: Post)=>{
        
//         const handleDelete = async (id:number) =>{
//           try{
//             await axios.delete (`http://localhost:8001/blog/${item.id}`)
//             window.location.reload()
//           }catch(err){
//             console.log(err)
//           }
//         }
       
//         // console.log('item', item);
//         return (
//           <div className={styles.container} key={item.id}>
//             <Link href={`/blog/${item.id}`} className={styles.container}>
//               <div className={styles.imageContainer}>
//                 <Image
//                 src={item?.mainPic}
//                 alt=""
//                 width={400}
//                 height={250}
//                 className={styles.image}
//                 />
//               </div>
//               <div className={styles.content}>
//                 {/* <MdOutlineDelete className={styles.deleteIcon}/> */}
//                 <div> <h1 className={styles.title}>{item.title}</h1>
//                 <p className={styles.desc}>{item.desc}</p></div>
//                 <div> <button className={styles.delete} onClick={()=>handleDelete(item.id)}>Delete</button> </div>
//               </div>
              
//             </Link>
//           </div>);
      
//       })}
//     </div>
//   )
// }
// // export const newData = getData

// export default Blog
'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineDelete } from "react-icons/md";
import axios from 'axios'
import Pagination from 'react-js-pagination'
import './pagination.css';


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

const Blog =  () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8001/blog`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        } else {
          const data = await response.json();
          setPosts(data);
          console.log("................",data)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDelete = async (id:number) =>{
    try{
      await axios.delete (`http://localhost:8001/blog/${id}`)
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className={styles.mainContainer}>
      {currentPosts.map((item: Post) => (
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
              <div>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
              </div>
              <div>
                <button className={styles.delete} onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {/* Pagination */}
      <div className='page'>
        <Pagination
        activePage={currentPage}
        itemsCountPerPage={postsPerPage}
        totalItemsCount={posts.length}
        pageRangeDisplayed={5}
        onChange={paginate}
        itemClass="pagination-item"
        linkClass="pagination-link"
        activeClass="pagination-active"
      /></div>

    </div>
  )
}

export default Blog

