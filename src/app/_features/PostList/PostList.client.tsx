'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './PostList.module.css';
import { useSuspenseQuery } from '@apollo/client';
import { CardPost } from '@/app/_components/CardPost';
import Link from 'next/link';
import { GetTracksDocument, GetTracksQuery } from '@/graphql/dist/client';

type PostListProps = {
  className?: string;
};
export const PostList = ({ className, ...props }: PostListProps) => {
  const { data: queryData } = useSuspenseQuery<GetTracksQuery>(GetTracksDocument, {
    // context: { fetchOptions: { cache: 'force-cache' } },
  });
  const trackList = [...queryData.trackList];

  return (
    <div className={clsx(className, styles.container)} {...props}>
      <div className={styles.postList}>
        {trackList.map((track) => {
          return (
            <Link href={`/tracks/${track.id}`} key={track.id} className={styles.cardPostLink}>
              <CardPost
                id={track.id}
                authorId={track.id}
                length={track.length}
                modulesCount={track.modulesCount}
                title={track.title}
                thumbnail={track.thumbnail}
                className={styles.cardPost}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
