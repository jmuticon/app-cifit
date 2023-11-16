import { cardProps } from '@renderer/types/proptypes'
import cardImage from '../../assets/cardImg.svg'
function ImgOverlay(_props?: cardProps): JSX.Element {
  console.log(_props)
  console.log(typeof _props)
  return (
    <div className="grid grid-cols-2 gap-2">
      <>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={cardImage} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={cardImage} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={cardImage} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={cardImage} alt="" />
        </div>
        {_props?.cards.map((card) => (
          <div className="relative" key={card.id}>
            <img className="h-auto max-w-full rounded-lg" src={card.cardImage} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center rounded-lg">
              <a href={card.cardLink} className="text-2xl font-bold">
                {card.cardText}
              </a>
            </div>
          </div>
        ))}
      </>
    </div>
  )
}

export default ImgOverlay
