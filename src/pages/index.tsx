import React from 'react'
import { graphql } from 'gatsby'
import View from 'src/views/home'
import Layout from 'src/views/Layout'
import type { PageProps } from 'gatsby'

import type { HomePageQueryQuery } from '../__generated__/HomePageQuery.graphql'

export type Props = PageProps<HomePageQueryQuery>

function Page(props: Props) {
  return <div>Hello World</div>
  // return (
  //   <Layout>
  //     <View {...props} />
  //   </Layout>
  // )
}

export const query = graphql`
  query HomePageQuery {
    cmsSeo {
      seo {
        facebook {
          title
          description
          thumbnail
        }
        siteMetadata {
          title
          description
          titleTemplate
        }
      }
    }
    cmsHome {
      sections {
        name
        props
      }
    }
  }
`

export default Page
