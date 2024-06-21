import Link from 'next/link';
import { ErrorDisplay } from '@/app/_components/ErrorDisplay';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <ErrorDisplay errorText={'404 Page Not'}>
        <Link href="/">Return to Home</Link>
      </ErrorDisplay>
    </div>
  );
}
