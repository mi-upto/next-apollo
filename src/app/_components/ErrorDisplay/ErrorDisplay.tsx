import React from 'react';
import clsx from 'clsx';
import styles from './ErrorDisplay.module.css';

type ErrorDisplayProps = {
  errorText: string;
  className?: string;
  children?: React.ReactNode;
};
export const ErrorDisplay = ({ errorText, className, children }: ErrorDisplayProps) => {
  return (
    <div className={clsx(className, styles.errorDisplay)}>
      <h2 className={styles.errorTitle}>Ooops!! Error occurred</h2>
      <p className={styles.errorDescription}>{errorText}</p>
      {children}
    </div>
  );
};
