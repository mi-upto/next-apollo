import React from 'react';
import clsx from 'clsx';
import styles from './TrackCard.module.css';
import type { Track } from '@/app/api/graphql/types';
import Image from 'next/image';
import { LikeButton } from '@/app/_features/LikeButton/LikeButton.client';
import { humanReadableTimeFromSeconds } from './helpers/humanReadableTimeFromSeconds';

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPs7Z3jAwAFaQIEfsCO5gAAAABJRU5ErkJggg==';

type TrackCardProps = {
  className?: string;
} & Track;
export const TrackCard = ({ className, ...props }: TrackCardProps) => {
  const { title, thumbnail, author, length, modulesCount, id } = props;
  return (
    <article className={clsx(className, styles.TrackCard)} data-id={`post-${id}`}>
      <figure className={styles.TrackCardImageContainer}>
        <Image
          loading="lazy"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          src={thumbnail || BLUR_DATA_URL}
          width="640"
          height="360"
          alt={title}
          quality={60}
          className={styles.TrackCardImage}
        />
        <LikeButton postId={id} className={styles.TrackCardLikeButton} />
      </figure>
      <div className={styles.TrackCardBody}>
        <div>
          <h3 className={styles.TrackCardTitle}>{title}</h3>
          <p className={styles.TrackCardText}>{title}</p>
        </div>
        <div className={styles.TrackCardFooter}>
          <span className={styles.TrackCardFooterText}>
            {modulesCount} modules - {humanReadableTimeFromSeconds(length || 0)}
          </span>
        </div>
      </div>
    </article>
  );
};
