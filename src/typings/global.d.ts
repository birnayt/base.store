interface Window extends Window {
  dataLayer: any[];
  sendrc: (eventName: string, eventValues?: any) => void
}
