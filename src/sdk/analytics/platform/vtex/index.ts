import type { AnalyticsEvent } from '@faststore/sdk'

import { sendRCEvent } from './RequestCapture'

export default function sendVTEXEvents(event: AnalyticsEvent) {
  sendRCEvent(event)
}