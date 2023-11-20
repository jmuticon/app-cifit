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
}
