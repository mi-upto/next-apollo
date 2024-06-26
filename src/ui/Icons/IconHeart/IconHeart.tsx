import React from 'react';
import type { SVGProps } from 'react';
import clsx from 'clsx';
import styles from './IconHeart.module.css';

export type IconHeartProps = {
  isLike: boolean;
  className?: string;
  props?: SVGProps<SVGSVGElement>;
};
export const IconHeart = ({ isLike, className, ...props }: IconHeartProps) => {
  const allClassName = clsx(styles.IconHeart, className, {
    [styles.like]: isLike,
    [styles.notLike]: !isLike,
  });

  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={allClassName}
      {...props}
    >
      <path
        d="M20.147 2.80315L20.1397 2.79538L20.1322 2.7878C19.6528 2.30251 19.0873 1.91068 18.4646 1.63224L18.4565 1.62861L18.4483 1.62516C17.8214 1.36137 17.1506 1.2172 16.4705 1.20025L16.4606 1.2H16.4506C15.267 1.2 14.2785 1.70672 13.4282 2.3956C12.7099 2.97756 12.0458 3.7268 11.4102 4.4871C10.8045 3.75043 10.1422 3.0085 9.41505 2.42245C8.55507 1.72931 7.53825 1.2 6.3505 1.2H6.34053L6.33056 1.20025C5.6505 1.2172 4.9797 1.36137 4.35277 1.62516L4.34457 1.62861L4.33645 1.63224C3.71378 1.91068 3.14829 2.30251 2.66888 2.7878L2.66139 2.79538L2.65411 2.80315C2.18737 3.3015 1.81914 3.88364 1.56884 4.5189C1.31594 5.1592 1.19082 5.84278 1.20052 6.53111C1.20291 8.43456 2.31795 10.2473 3.98441 12.1181C5.65852 13.9975 8.03443 16.0895 10.8251 18.5468L10.8719 18.588L11.3995 19.0526L11.9281 18.589C14.7647 16.1007 17.1581 13.9957 18.836 12.1081C20.4981 10.2382 21.5982 8.43258 21.6006 6.53123C21.6103 5.843 21.4852 5.15951 21.2324 4.51929C20.9821 3.88388 20.6138 3.3016 20.147 2.80315Z"
        stroke="white"
        strokeWidth="1.6"
      />
    </svg>
  );
};
