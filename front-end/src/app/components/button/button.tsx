import React from "react";
import styles from './button.module.scss'
import Link from "next/link";

interface ButtonProps {
  url: string;
  text: string;
  type?: 'button' | 'submit' | 'reset'; // Define the type property
}

const Button: React.FC<ButtonProps> = ({ url, text, type = 'button' }) => {
  return (
    <Link href={url}>
      <button type={type} className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
