export type cardProp = {
  id: number
  cardTitle: string
  cardLink: string
  cardText: string
  cardImage: string
}
export type cardProps = { cards: cardProp[] }

export type BodyShapeBarsProps = {
  title: string
  leftWidth: number
  rightWidth: number
  leftText: string
  rightText: string
}
export type PageInnerContent2 = {
  title: string
  buttons: {
    text: string
    onClick: () => void
  }[]
}
export type ItemProps = {
  barprops: BodyShapeBarsProps[]
  img1: string
  img2: string
  pageInnerContent2?: PageInnerContent2[]
}
