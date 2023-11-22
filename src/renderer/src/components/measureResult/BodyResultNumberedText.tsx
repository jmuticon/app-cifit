import { NumberedTextProps } from '@renderer/types/proptypes'

function BodyResultNumberedText(_props: NumberedTextProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center w-full  bg-[#FAFAFA] rounded-[20px]">
      <p className="text-[#1A191D] text-center text-[40px] not-italic font-medium leading-[normal] tracking-[-1.2px] py-14">
        {_props.title}
      </p>
      <div className="flex flex-col justify-start items-start w-full gap-4 px-8 pb-24">
        {_props.bodyTexts.map((bodyText, index) => (
          <p
            key={index}
            className="text-[#1A191D] text-[32px] not-italic font-normal leading-[normal] tracking-[-0.96px]"
          >
            {`${index + 1}. ${bodyText}`}
          </p>
        ))}
      </div>
    </div>
  )
}

export default BodyResultNumberedText
