'use client';

import { Button } from '@/ui/Button';
import { ErrorDisplay } from '@/app/_components/ErrorDisplay';
import Link from 'next/link';
import Image from 'next/image';
import styles from './error.module.css';

type ErrorProps = {
  error: Error & { digest?: string };
};
const Error = (props: ErrorProps) => {
  const { error } = props;
  return (
    <div>
      <ErrorDisplay errorText={String(error)} className={styles.errorDisplay}>
        <Image src="/images/image_mv.svg" width="300" height="200" alt="*" />
        <Link href="/">
          <Button variant="secondary">Return to Home</Button>
        </Link>
      </ErrorDisplay>
    </div>
  );
};
export default Error;
