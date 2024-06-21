import { Suspense } from 'react';
import styles from './page.module.css';
import { PostList } from '@/app/_features/PostList';
import { ErrorBoundaryApp } from '@/app/_components/ErrorBoundary/ErrorBoundaryApp';
import { Loading } from '@/ui/Loading';

const Home = () => {
  return (
    <main>
      <section className={styles.container}>
        <ErrorBoundaryApp>
          <Suspense
            fallback={
              <div className={styles.loadingContainer}>
                <Loading />
              </div>
            }
          >
            <PostList />
          </Suspense>
        </ErrorBoundaryApp>
      </section>
    </main>
  );
};

export default Home;
