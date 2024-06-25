import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Author of a complete Track */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  /** Author's first and last name */
  name: Scalars['String']['output'];
  /** Author's profile picture url */
  photo?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  trackList: Array<Track>;
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  /** The track's main author */
  author: Author;
  id: Scalars['ID']['output'];
  /** The track's approximate length to complete, in minutes */
  length?: Maybe<Scalars['Int']['output']>;
  /** The number of modules this track contains */
  modulesCount?: Maybe<Scalars['Int']['output']>;
  /** The track's main illustration to display in track card or track page detail */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The track's title */
  title: Scalars['String']['output'];
};

export type GetTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTracksQuery = { __typename?: 'Query', trackList: Array<{ __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null } }> };


export const GetTracksDocument = gql`
    query GetTracks {
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
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetTracks(variables?: GetTracksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTracksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTracksQuery>(GetTracksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTracks', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;