import React from 'react';
import clsx from 'clsx';
import styles from './Tag.module.css';

export type TagProps = {
  className?: string;
  label: string;
};
export const Tag = ({ className, label, ...props }: TagProps) => {
  return (
    <div className={clsx(className, styles.tag)} {...props}>
      {label}
    </div>
  );
};
