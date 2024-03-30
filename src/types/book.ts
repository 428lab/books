export type EventItem = {
  eventName: string
  spaceNo: string
}
export type MarketItem = {
  name: string
  url: string
}
export type IndexItem = {
  section: string
  contents: string[]
}

export type MemberItem = {
  role: string
  member: {
    name: string
    url1?: string
    url2?: string
    url3?: string
  }[]
}
export type LinkItem = {
  name: string
  url: string
  page: number
}

export type ErrataItem = {
  target: string
  error: string
  correct: string
}

export type Book = {
  id: string
  title: string
  date: string
  description: string
  h1: string
  ogp?: string
  events?: EventItem[]
  price?: string
  online_price?: string
  online_set_price?: string
  sales_start?: string
  longDescription?: string
  market?: MarketItem[]
  samplePage?: number
  index?: IndexItem[]
  member?: MemberItem[]
  link?: LinkItem[]
  errata?: ErrataItem[]
}
