import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  loading?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
};

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  const allClassName = clsx(styles.button, className, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.loading]: loading,
    [styles.disabled]: disabled,
  });

  return (
    <button className={allClassName} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  );
};
