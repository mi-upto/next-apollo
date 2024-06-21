import React from 'react';
import clsx from 'clsx';
import styles from './Loading.module.css';

type LoadingProps = {
  className?: string;
};
export const Loading = ({ className }: LoadingProps) => {
  return (
    <div className={clsx(styles.loading, className)}>
      <svg className={styles.circle} viewBox="25 25 50 50">
        <circle
          className={styles.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};
