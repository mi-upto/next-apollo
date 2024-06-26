import { Suspense } from 'react';
import styles from './page.module.css';
import { TrackList } from '@/app/_features/TrackList';
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
            <TrackList />
          </Suspense>
        </ErrorBoundaryApp>
      </section>
    </main>
  );
};

export default Home;
