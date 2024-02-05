import React, { ReactNode } from 'react';
import Styles from './page.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <h1 className={Styles.mainTitle}>Today Trending</h1>
      {children}
    </div>
  );
};

export default Layout;
