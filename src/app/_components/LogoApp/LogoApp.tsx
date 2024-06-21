import React from 'react';
import clsx from 'clsx';
import styles from './LogoApp.module.css';
import Image from 'next/image';

type LogoAppProps = {
  className?: string;
};
export const LogoApp = ({ className, ...props }: LogoAppProps) => {
  return (
    <span className={clsx(className, styles.logoApp)} {...props}>
      <Image
        width="40"
        height="40"
        src="/images/space_cat_logo@2x.png"
        alt="Catstronaut"
        priority={true}
        className={styles.logoImage}
      />
      <span className={styles.logoText}>Catstronaut</span>
    </span>
  );
};
