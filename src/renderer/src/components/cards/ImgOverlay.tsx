import { cardProps } from '@renderer/types/proptypes'
import arrow from '../../assets/img/arrow-right-bold.svg'
function ImgOverlay(_props?: cardProps): JSX.Element {
  console.log(_props)
  console.log(typeof _props)
  return (
    <div className="grid grid-cols-2 gap-2">
      {_props?.cards.map((card) => (
        <div className="relative" key={card.id}>
          <img className="h-auto max-w-full rounded-lg" src={card.cardImage} alt="" />
          <div className="absolute bottom-14 left-0 w-full h-full flex flex-col justify-end pl-12 items-baseline text-white  rounded-lg z-10">
            <div className="flex flex-row justify-start items-center">
              <p className="text-plain text-5xl font-bold mr-4">{card.cardTitle}</p>
              <a href={card.cardLink}>
                <img src={arrow} alt="link" />
              </a>
            </div>
            <p className="text-plain text-[28px] pt-8">{card.cardText}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImgOverlay
