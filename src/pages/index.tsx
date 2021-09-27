import React from 'react'
import { graphql } from 'gatsby'
import View from 'src/sdk/views/home'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/HomePageQuery.graphql'

export type Props = PageProps<HomePageQueryQuery>

function Page(props: Props) {
  return <View {...props} />
}

export const query = graphql`
  query HomePageQuery {
    prismicHome {
      data {
        body {
          ...data_CarouselFragment
          ... on PrismicHomeDataBodyShelf {
            id
            slice_type
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
  }
`

export default Page
