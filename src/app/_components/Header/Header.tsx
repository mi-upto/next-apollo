import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';
import { LogoApp } from '@/app/_components/LogoApp';
import Link from 'next/link';

type HeaderProps = {
  className?: string;
};
export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <div className={styles.headerInner}>
        <div className={styles.headerLogo}>
          <Link href="/" className={styles.headerLink}>
            <LogoApp />
          </Link>
        </div>
      </div>
    </header>
  );
};
