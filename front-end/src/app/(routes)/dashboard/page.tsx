'use client'
import React, { useState } from 'react';
import styles from './page.module.scss';
import Button from '@/app/components/button/button';
import axios from 'axios';

const Dashboard = () => {
  const [cols, setCols] = useState<number>(30);
  const [rows, setRows] = useState<number>(10);
  const [details, setDetails] = useState({
    id: {},
    title: '',
    desc: '',
    body: '',
    mainPic: '',
    userName: '',
    userPic: '',
  });
  let length = 0;

  const submit = (e: React.FormEvent) => {
    console.log('Form submit ............');
    e.preventDefault();
    axios.get('http://localhost:8001/blog').then((response) => {
      length = response.data.length+1;
      return response;
     
    }).then((response) => {
      console.log('Post method');
      axios
      .post('http://localhost:8001/blog', { ...details, id: length })
      .then((res) => {
        console.log('res', res);
        setDetails({
          id: {},
          title: '',
          desc: '',
          body: '',
          mainPic: '',
          userName: '',
          userPic: '',
        });
      })
      .catch((err) => console.log('err', err));
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {/* <form action='' className={styles.form} onSubmit={(e) => submit(e)}> */}
        <form className={styles.form}>
          <div className={styles.subForm}>
            <div className={styles.one}>
              <input
                className={styles.input}
                type='text'
                value={details.title}
                placeholder='Title'
                onChange={(e) => setDetails({ ...details, title: e.target.value })}
              />
              <input
                type='text'
                value={details.desc}
                placeholder='Description'
                className={styles.input}
                onChange={(e) => setDetails({ ...details, desc: e.target.value })}
              />
            </div>
            <div  className={styles.two}>
              <input
                type='text'
                value={details.userName}
                placeholder='Autor Name'
                className={styles.input}
                onChange={(e) => setDetails({ ...details, userName: e.target.value })}
              />
              <input
                type='text'
                value={details.userPic}
                placeholder='Author Logo'
                className={styles.input}
                onChange={(e) => setDetails({ ...details, userPic: e.target.value })}
              />
            </div>
          </div>
          
          <input
            type='text'
            value={details.mainPic}
            placeholder='Picture'
            onChange={(e) => setDetails({ ...details, mainPic: e.target.value })}
          />
          <textarea
            value={details.body}
            id='message'
            name='message'
            cols={cols}
            rows={rows}
            placeholder='Body'
            onChange={(e) => setDetails({ ...details, body: e.target.value })}
          />
          {/* <Button type='submit' text='Send' url={''} /> */}
          <div className={styles.submit}>
          <button onClick={submit} className={styles.button}> Upload The Blog Data </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
