
'use client'
import React, { useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import contact from '@/app/assets/contact.png'
import Button from '@/app/components/button/button';
import axios from 'axios';

const Contact = () => {

  const [cols, setCols] = useState<number>(30);
  const [rows, setRows] = useState<number>(10);
  const [details, setDetails] = useState({
    id: {},
    name:'',
    phone:'',
    mail:'',
    message:'',
  });

  let length = 0;

  const submit = (e: React.FormEvent) => {
    console.log('Form submit ............');
    e.preventDefault();
    axios.get('http://localhost:2024/message').then((response) => {
      length = response.data.length+1;
      // setDetails({ ...details, id: response.data.length + 1 }); 
      // console.log('Success', response.data.length )
      return response;
     
    }).then((response) => {
      console.log('Post method');
      axios
      .post('http://localhost:2024/message', { ...details, id: length })
      .then((res) => console.log('res', res))
      .catch((err) => console.log('err', err));
    });
    setDetails({
      id: {},
      name:'',
      phone:'',
      mail:'',
      message:'',
    })
  };


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={contact} alt='' layout="fill" className={styles.img} />
      </div>
      <div className={styles.formContainer}> 
        <form action='' className={styles.form}>
          <input 
          type='text' 
          placeholder='Name and Surname'
          value={details.name} 
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
           />
          <input
           type='text'
           placeholder='Email Address'
           value={details.mail} 
            onChange={(e) => setDetails({ ...details, mail: e.target.value })}
           />
          <input
           type='text'
           placeholder='Phone Number (Optional)' 
           value={details.phone} 
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          />
          <textarea
            id='message'
            name='message'
            cols={cols}
            rows={rows}
            placeholder='Message'
            value={details.message} 
            onChange={(e) => setDetails({ ...details, message: e.target.value })}
          
          />
          <button onClick={submit} className={styles.button} > SEND </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

