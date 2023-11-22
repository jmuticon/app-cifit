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
export type TextNavProps = {
  text: string
  textDecor?: string
}
export type NumberedTextProps = {
  title: string
  bodyTexts: string[]
}

export type MeasureInstruction = {
  img?: string
  bodyTexts: string
  titleText?: string
}
export type MeasureInstructionProps = { instructions: MeasureInstruction[] }

export type MesureItemsTextProps = {
  title: string
  bodyTexts: [
    {
      subHeader: string
      text: string
    }
  ]
}
