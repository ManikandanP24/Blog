'use client'
// import React, { useState } from 'react';
// import styles from './DarkMode.module.scss';

// const DarkModeToggle = () => {
//   const [mode, setMode] = useState<'dark' | 'light'>('dark');

//   const toggleMode = () => {
//     setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
//   };

//   return (
//     <div className={styles.container} onClick={toggleMode}>
//       <div className={styles.icon}>🌚</div>
//       <div className={styles.icon}>🌞</div>
//       <div className={styles.ball} style={mode === 'light' ? { left: '2px' } : { right: '2px' }}  />
//     </div>
//   );
// }

// export default DarkModeToggle;
// DarkModeToggle.jsx

import React, { useState } from 'react';
import styles from './DarkMode.module.scss';

const DarkModeToggle = () => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`${styles.container} ${mode === 'dark' ? styles.darkMode : styles.lightMode}`} onClick={toggleMode}>
      <div className={styles.icon}>🌚</div>
      <div className={styles.icon}>🌞</div>
      <div className={styles.ball} style={mode === 'light' ? { left: '2px' } : { right: '2px' }} />
    </div>
  );
};

export default DarkModeToggle;
