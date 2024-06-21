'use client';

import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};
type BaseErrorBoundaryProps = {
  fallbackFunc: ({ error, resetErrorBoundary }: ErrorFallbackProps) => JSX.Element;
  children: ReactNode;
};
export const BaseErrorBoundary: FC<BaseErrorBoundaryProps> = ({ fallbackFunc, children }) => {
  const [resetKey, setResetKey] = useState(0);

  return (
    <ErrorBoundary
      onError={onError}
      FallbackComponent={fallbackFunc}
      resetKeys={[resetKey]}
      onReset={() => {
        setResetKey((n) => n + 1);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

const onError = (error: Error) => {
  // FIXME
  console.log(error);
};
