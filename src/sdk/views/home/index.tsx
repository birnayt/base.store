import React from 'react'
import { PrismicRenderer } from 'src/components/cms/PrismicRenderer'
import Carousel from 'src/components/sections/Carousel'
import type { Props as PageProps } from 'src/pages/index'

import Seo from './Seo'

export type Props = PageProps

const blocks = {
  carousel: Carousel,
}

function View(props: Props) {
  // Send event to analytics
  // usePixelSendEvent(() => {
  //   const event: PageViewData = {
  //     pageType: 'home',
  //     pageUrl: window.location.href,
  //     pageTitle: document.title,
  //     referrer: '',
  //     accountName: process.env.GATSBY_STORE_ID!,
  //   }

  //   return { type: 'vtex:pageView', data: event }
  // })

  return (
    <>
      {/* Seo Components */}
      <Seo {...props} />

      {/* Visual Sections */}
      <PrismicRenderer
        blocks={blocks}
        slices={props.data.prismicHome?.data?.body ?? []}
      />
    </>
  )
}

export default View
