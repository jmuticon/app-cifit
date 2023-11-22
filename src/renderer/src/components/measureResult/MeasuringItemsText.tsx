import { MesureItemsTextProps } from '@renderer/types/proptypes'

function MeasuringItemsText(_props: MesureItemsTextProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center w-full  bg-[#FAFAFA] rounded-[20px]">
      <p className="text-[#1A191D] text-center text-[40px] not-italic font-medium leading-[normal] tracking-[-1.2px] py-14">
        {_props.title}
      </p>
      <div className="flex flex-col justify-start items-start w-full gap-4 px-8 pb-24">
        {_props.bodyTexts.map((bodyText, index) => (
          <div key={index} className="flex flex-col justify-start py-12 px-8 w-full">
            <p className="text-[#4582E9] text-[32px] not-italic font-bold leading-[normal] tracking-[-1.6px]">
              {`. ${bodyText.subHeader}`}
            </p>
            <p className="text-[#1A191D] text-[32px] not-italic font-normal leading-[normal] tracking-[-1.6px]">
              {bodyText.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MeasuringItemsText
