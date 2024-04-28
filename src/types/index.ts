export type IndexProps = {
  newBookNum: number
  mainVisualPC: string
  mainVisualSP: string
  mainVisualHref: string
  mvItems: mvItem[]
}
export type mvItem = {
  PC: string
  SP: string
  Href: string
}