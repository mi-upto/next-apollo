import React from 'react';
import styles from './layout.module.css';
import { Header } from '@/app/_components/Header';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.headWrap}>
        <Header className={styles.header} />
      </div>
      {children}
    </>
  );
};
export default HomeLayout;
