

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type ProductPageQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductPageQueryQuery = { site: Maybe<{ siteMetadata: Maybe<{ title: Maybe<string>, description: Maybe<string>, titleTemplate: Maybe<string>, siteUrl: Maybe<string> }> }>, product: Maybe<{ sku: string, slug: string, name: string, description: string, gtin: string, id: string, seo: { title: string, description: string }, brand: { name: string }, breadcrumbList: { itemListElement: Array<{ item: string, name: string, position: number }> }, image: Array<{ url: string, alternateName: string }> }> };


// Query Related Code

export const ProductPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query ProductPageQuery($id: String!) {\n  site {\n    siteMetadata {\n      title\n      description\n      titleTemplate\n      siteUrl\n    }\n  }\n  product: storeProduct(id: {eq: $id}) {\n    sku\n    slug\n    seo {\n      title\n      description\n    }\n    brand {\n      name\n    }\n    name\n    description\n    gtin\n    breadcrumbList {\n      itemListElement {\n        item\n        name\n        position\n      }\n    }\n    image {\n      url\n      alternateName\n    }\n    id: productID\n  }\n}\n",
  sha256Hash: "25d5bb3a36e208cd35c17bcf6f11327aded9e961cd572969910c98a1cd4c4327",
  operationName: "ProductPageQuery",
}

