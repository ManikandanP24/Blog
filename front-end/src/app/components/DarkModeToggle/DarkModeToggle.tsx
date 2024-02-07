'use client'

import React, { useContext } from "react";
import styles from "./DarkMode.module.scss";
import { ThemeContext } from '../context/ThemeContext'

const DarkModeToggle: React.FC = () => {
  const { toggle, mode } = useContext(ThemeContext) as { toggle: () => void; mode: string };
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
