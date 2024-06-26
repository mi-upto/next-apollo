'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './TrackList.module.css';
import { useSuspenseQuery } from '@apollo/client';
import { TrackCard } from '@/app/_components/TrackCard';
import Link from 'next/link';
import { GetTracksDocument, GetTracksQuery } from '@/graphql/dist/client';

type TrackListProps = {
  className?: string;
};
export const TrackList = ({ className, ...props }: TrackListProps) => {
  const { data: queryData } = useSuspenseQuery<GetTracksQuery>(GetTracksDocument, {
    // context: { fetchOptions: { cache: 'force-cache' } },
  });
  const trackList = [...queryData.trackList];

  return (
    <div className={clsx(className, styles.container)} {...props}>
      <div className={styles.trackList}>
        {trackList.map((track) => {
          return (
            <Link href={`/tracks/${track.id}`} key={track.id} className={styles.TrackCardLink}>
              <TrackCard
                id={track.id}
                author={track.author}
                length={track.length}
                modulesCount={track.modulesCount}
                title={track.title}
                thumbnail={track.thumbnail}
                className={styles.TrackCard}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
