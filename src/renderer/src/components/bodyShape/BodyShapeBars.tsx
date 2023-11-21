import { BodyShapeBarsProps } from '@renderer/types/proptypes'
import dottedline from '../../assets/img/dottedline.svg'
import { useLayoutEffect, useRef } from 'react'

function BodyShapeBars(_props: BodyShapeBarsProps): JSX.Element {
  const refLeftWidth = useRef<HTMLDivElement>(null)
  const refRightWidth = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (refLeftWidth?.current) {
      refLeftWidth.current.style.width = _props.leftWidth + '%'
    }
    if (refRightWidth?.current) {
      refRightWidth.current.style.width = _props.rightWidth + '%'
    }
  }, [])
  return (
    <div className="flex justify-between pt-[1%]">
      <p className="w-1/4 font-plain text-[24px] not-italic font-medium leading-[normal] tracking-[-0.72px]">
        {_props.title}
      </p>
      <div className="w-3/4 ">
        <div className="flex flex-row w-full justify-center bg-[#D0DEF0] rounded-2xl">
          <div className="w-[calc(50%-2px)] flex flex-row justify-end">
            <div
              className="bg-[#F5432B] h-[46px] rounded-2xl rounded-r-none flex flex-row justify-center items-center text-[#FAFAFA]"
              ref={refLeftWidth}
            >
              {_props.leftWidth}
            </div>
          </div>
          <img src={dottedline} alt="" />
          <div className="w-[calc(50%-2px)] flex flex-row justify-start">
            <div
              className="bg-[#4582E9] h-[46px] rounded-2xl rounded-l-none flex flex-row justify-center items-center text-[#FAFAFA]"
              ref={refRightWidth}
            >
              {_props.rightWidth}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-end w-full">
          <p className="text-[#4582E9] text-[16px] not-italic font-medium leading-[normal] tracking-[-0.48px]">
            {_props.leftText}
          </p>
          <p className="text-[#4582E9] text-[16px] not-italic font-medium leading-[normal] tracking-[-0.48px]">
            {_props.rightText}
          </p>
        </div>
      </div>
    </div>
    //  <div className="flex flex-row justify-between w-[calc(50%-72px)] pl-6">
    //     <p className="text-left">측굴</p>
    //     <div className="flex flex-row justify-center w-3/4 bg-[#D0DEF0] rounded-full h-[46px] ">
    //       <div className="bg-[#F5432B] h-[46px] rounded-full w-[30%]"></div>
    //       <img src={dottedline} alt="" />
    //       <div className="bg-[#4582E9] h-[46px] rounded-full w-[20%]"></div>
    //     </div>
    //   </div>
  )
}

export default BodyShapeBars
