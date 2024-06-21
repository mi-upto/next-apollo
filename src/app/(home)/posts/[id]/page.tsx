import type { Metadata } from 'next';
import styles from './page.module.css';
import { fetchPost } from '@/api/posts/fetchPost';
import { Post } from '@/models';
import Image from 'next/image';
import { Tag } from '@/ui/Tag';
import { dayjs } from '@/libs/dayjs';
import { LikeButton } from '@/app/_features/LikeButton';

type Props = {
  params: { id: string };
};
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const post: Post = await fetchPost(params.id);
  const MAX_CHAR = 80;
  const description = `${post.body.slice(0, MAX_CHAR)}...`;

  return {
    title: `${post.title}`,
    description,
    openGraph: {
      images: `${post.imageUrl}`,
    },
  };
};

const PostId = async ({ params }: Props) => {
  const post: Post = await fetchPost(params.id);

  return (
    <main>
      <article>
        <div className={styles.postHead}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.postImageContainer}>
            <Image
              src={post.imageUrl}
              alt={post.title}
              width="297"
              height="179"
              quality={60}
              priority={true}
              className={styles.postImage}
            />
          </div>
          <div className={styles.postMeta}>
            <div className={styles.postMetaInner}>
              <Tag label={post.category} className={styles.postCategory} />
              <time
                dateTime={dayjs(post.createdAt).format('YYYY-MM-DD')}
                className={styles.postDate}
              >
                {dayjs(post.createdAt).format('MMMM D, YYYY')}
              </time>
            </div>
            <LikeButton postId={post.id} />
          </div>
        </div>

        <div className={styles.postBody}>
          <p className={styles.postBodyText}>{post.body}</p>
        </div>
      </article>
    </main>
  );
};

export default PostId;
