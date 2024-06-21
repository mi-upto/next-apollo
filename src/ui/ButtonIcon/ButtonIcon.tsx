import React, { ReactElement } from 'react';
import clsx from 'clsx';
import styles from './ButtonIcon.module.css';

export type ButtonIconProps = {
  onClick?: React.ReactEventHandler<HTMLButtonElement>;
  className?: string;
  icon: ReactElement;
};
export const ButtonIcon = ({ className, icon, ...props }: ButtonIconProps) => {
  return (
    <button type="button" className={clsx(className, styles.buttonIcon)} {...props}>
      {icon}
    </button>
  );
};
