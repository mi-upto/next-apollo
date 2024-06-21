'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './PostList.module.css';
import { gql, useQuery } from '@apollo/client';
import { CardPost } from '@/app/_components/CardPost';
import Link from 'next/link';
import { Track } from '@/models';

const TRACKS = gql(`
  query {
    trackList {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

type PostListProps = {
  className?: string;
};
export const PostList = ({ className, ...props }: PostListProps) => {
  const { data } = useQuery(TRACKS);
  console.log('data', data);
  return (
    <div className={clsx(className, styles.container)} {...props}>
      <div className={styles.postList}>
        {data?.trackList.map((track: Track) => {
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
