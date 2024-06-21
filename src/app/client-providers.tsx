'use client';
import React from 'react';
import type { ReactNode } from 'react';
import { makeClient } from '@/libs/apollo/apolloClient';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return <ApolloNextAppProvider makeClient={makeClient}> {children}</ApolloNextAppProvider>;
};
