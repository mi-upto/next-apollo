import React from 'react';
import clsx from 'clsx';
import styles from './CardPost.module.css';
import type { Track } from '@/models';
import Image from 'next/image';
import { LikeButton } from '@/app/_features/LikeButton/LikeButton.client';

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPs7Z3jAwAFaQIEfsCO5gAAAABJRU5ErkJggg==';

type CardPostProps = {
  className?: string;
} & Track;
export const CardPost = ({ className, ...props }: CardPostProps) => {
  return (
    <article className={clsx(className, styles.cardPost)} data-id={`post-${props.id}`}>
      <figure className={styles.cardPostImageContainer}>
        <Image
          loading="lazy"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          src={props.thumbnail}
          width="640"
          height="360"
          alt={props.title}
          quality={60}
          className={styles.cardPostImage}
        />
        <LikeButton postId={props.id} className={styles.cardPostLikeButton} />
      </figure>
      <div className={styles.cardPostBody}>
        <div>
          <h3 className={styles.cardPostTitle}>{props.title}</h3>
          <p className={styles.cardPostText}>{props.title}</p>
        </div>
        <div className={styles.cardPostFooter}>
          <span className={styles.cardPostFooterText}>
            {props.length}
            {props.authorId}
          </span>
        </div>
      </div>
    </article>
  );
};
