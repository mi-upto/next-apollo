'use client';

import type { ReactNode } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { BaseErrorBoundary } from '@/app/_components/ErrorBoundary/base';
import { ErrorDisplay } from '@/app/_components/ErrorDisplay';

type ErrorBoundaryAppProps = {
  children: ReactNode;
};
export const ErrorBoundaryApp = ({ children }: ErrorBoundaryAppProps) => {
  const createErrorDisplay = (err: FallbackProps) => {
    const { error } = err;

    return <ErrorDisplay errorText={error.title} />;
  };

  return <BaseErrorBoundary fallbackFunc={createErrorDisplay}>{children}</BaseErrorBoundary>;
};
