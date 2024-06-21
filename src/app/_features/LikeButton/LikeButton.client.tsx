'use client';
import { useState, useEffect } from 'react';
import { ButtonIcon } from '@/ui/ButtonIcon';
import { IconHeart } from '@/ui/Icons/IconHeart';

export const STORAGE = { LIKE_POST_IDS: 'likePostIds' } as const;

const getStoragedLikePostIds = (): string[] => {
  const storagedLikePostsId = window.localStorage.getItem(STORAGE.LIKE_POST_IDS);
  if (!storagedLikePostsId) {
    return [];
  }

  try {
    return JSON.parse(storagedLikePostsId);
  } catch {
    window.localStorage.removeItem(STORAGE.LIKE_POST_IDS);
    return [];
  }
};

export type LikeButtonProps = {
  postId: string;
  className?: string;
};
export const LikeButton = (props: LikeButtonProps) => {
  const { postId, className } = props;
  const [likePostIds, setLikePostIds] = useState<string[]>([]);
  const isLike = likePostIds.includes(postId);

  useEffect(() => {
    const storagedLikePostsId = getStoragedLikePostIds();
    setLikePostIds(storagedLikePostsId);
  }, []);

  const handleClickLikeButton = (postId: string) => {
    const newLikePosts = !isLike
      ? [...likePostIds, postId]
      : likePostIds.filter((id) => id !== postId);

    setLikePostIds(newLikePosts);
    window.localStorage.setItem(STORAGE.LIKE_POST_IDS, JSON.stringify(newLikePosts));
  };

  return (
    <ButtonIcon
      className={className}
      icon={<IconHeart isLike={isLike} />}
      onClick={(event) => {
        event.preventDefault();
        handleClickLikeButton(postId);
      }}
    />
  );
};
