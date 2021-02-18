
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
  ID: string
}

// Operation related types
export type StoreProductPageSeoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StoreProductPageSeoQueryQuery = { seo: Maybe<{ extraBlocks: Array<Maybe<{ blocks: Array<{ name: string, props: Maybe<any> }> }>> }> };


// Query Related Code

export const StoreProductPageSEOQuery = {
  query: undefined,
  sha256Hash: "97c4d3ad6a7663c3b0222a71873d74ff87edc013e66c3fa3f8405333f808489a",
  operationName: "StoreProductPageSEOQuery",
}

