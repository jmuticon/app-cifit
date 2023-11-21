import { useState } from 'react'
import activeleftarrow from '../../assets/img/activeleftarrow.svg'
import activerightarrow from '../../assets/img/activeRightarraow.svg'
import BodyShapeBars from '@renderer/components/bodyShape/BodyShapeBars'
import { BodyShapeBarsProps, ItemProps, PageInnerContent2 } from '@renderer/types/proptypes'

function BodyShapeTabs(_props: ItemProps): JSX.Element {
  const [inerContent, setInerContent] = useState('자세 측정 결과')

  const bodyShapeBarsProps: BodyShapeBarsProps[] = _props.barprops
  const fatfemail = _props.img1
  const skeleteton = _props.img2
  const page2 = _props.pageInnerContent2
  const handleChangeInnnerContent = (): void => {
    if (inerContent === '자세 측정 결과') {
      setInerContent('근육 이완도')
    } else {
      setInerContent('자세 측정 결과')
    }
  }
  return (
    <>
      <div className="flex flex-row justify-between">
        <img src={fatfemail} alt="" />
        <img src={skeleteton} alt="" />
      </div>
      <div className="flex flex-col gap-16 mt-10">
        <div className="flex flex-row justify-center ">
          <img src={activeleftarrow} alt="" onClick={handleChangeInnnerContent} />
          <p className="px-[59px] font-plain text-center text-[40px] not-italic font-medium leading-[70px] tracking-[-2px]">
            {inerContent}
          </p>
          <img src={activerightarrow} alt="" onClick={handleChangeInnnerContent} />
        </div>
        {inerContent === '자세 측정 결과' && (
          <div className="grid grid-cols-2 gap-16 justify-between ">
            {bodyShapeBarsProps.map((props, index) => (
              <BodyShapeBars key={index} {...props} />
            ))}
          </div>
        )}

        {inerContent === '근육 이완도' && (
          <div className="flex flex-col justify-start w-full gap-16">
            {page2?.map((props: PageInnerContent2, index) => (
              <div key={index} className="flex flex-col justify-start items-start w-full gap-6">
                <p className="text-[#4D5055] text-center text-[24px] not-italic font-medium leading-[normal] tracking-[-0.72px]">
                  {props.title}
                </p>
                <div className="grid grid-cols-4 justify-start gap-4">
                  {props.buttons.map((button, index) => (
                    <button
                      key={index}
                      className="bg-[#fafafa] w-[222px] h-[87px] rounded-[20px] text-[#1A191D] text-center text-[32px] not-italic font-medium leading-[100%] tracking-[-1.6px] font-plain"
                      onClick={button.onClick}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-row justify-start">
          <div className="flex flex-row justify-start mr-6">
            <div className="bg-[#F5432B] w-6 h-6 rounded-lg"></div>
            <p className="pl-2">비정상</p>
          </div>
          <div className="flex flex-row justify-start">
            <div className="bg-[#4582E9] w-6 h-6 rounded-lg"></div>
            <p className="pl-2">정상</p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-12 pb-20">
          <button className="bg-[#E1E1E1] w-[372px] h-[112px] shrink-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.16)] rounded-[20px] text-[#4D5055] text-center text-[40px] not-italic font-medium leading-[100%] tracking-[-2px]">
            측정 다시하기
          </button>
          <button className="bg-[#4582E9] shrink-0 shadow-[0px_4px_4px_0px_rgba(255,255,255,0.25)_inset,0px_4px_4px_0px_rgba(75,111,171,0.30)] w-[372px] h-[112px] rounded-[20px] text-[#FAFAFA] text-center text-[40px] not-italic font-medium leading-[100%] tracking-[-2px]">
            저장하기
          </button>
        </div>
      </div>
    </>
  )
}
export default BodyShapeTabs
