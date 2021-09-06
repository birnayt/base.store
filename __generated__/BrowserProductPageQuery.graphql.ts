

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type BrowserProductPageQueryQueryVariables = Exact<{
  locator: StoreProductId;
}>;


export type BrowserProductPageQueryQuery = { product: { sku: string, slug: string, name: string, description: string, gtin: string, id: string, seo: { title: string, description: string }, brand: { name: string }, breadcrumbList: { itemListElement: Array<{ item: string, name: string, position: number }> }, image: Array<{ url: string, alternateName: string }> } };


// Query Related Code

export const BrowserProductPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query BrowserProductPageQuery($locator: StoreProductID!) {\n  product(locator: $locator) {\n    sku\n    slug\n    seo {\n      title\n      description\n    }\n    brand {\n      name\n    }\n    name\n    description\n    gtin\n    breadcrumbList {\n      itemListElement {\n        item\n        name\n        position\n      }\n    }\n    image {\n      url\n      alternateName\n    }\n    id: productID\n  }\n}\n",
  sha256Hash: "1f6a22bdd48fee0a2478885922e5a1c5969ecad8fe06f6c775cab8b6fb4725d0",
  operationName: "BrowserProductPageQuery",
}

