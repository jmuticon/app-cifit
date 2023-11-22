import { MeasureInstructionProps } from '@renderer/types/proptypes'

function MeasureInstructions(_props: MeasureInstructionProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-16 bg-[#FAFAFA] rounded-[20px] py-[72px]">
      {_props.instructions.map((measureInstruction, index) => (
        <div key={index} className="flex flex-row justify-start items-center w-full px-24">
          <div className="flex flex-row justify-center items-center bg-[#EBEEF1] rounded-full w-36 h-36">
            {measureInstruction.img && (
              <img src={measureInstruction.img} className="w-[40px] h-[40px]" alt="!" />
            )}
            {measureInstruction.titleText && (
              <p className="text-[#4582E9] text-center text-[64px] not-italic font-bold leading-[100%] tracking-[-3.2px]">
                {measureInstruction.titleText}
              </p>
            )}
          </div>
          <p className="text-[#4D5055] text-[40px] not-italic font-medium leading-[46px] tracking-[-2px] w-[calc(100%-144px)] px-5">
            {measureInstruction.bodyTexts}
          </p>
        </div>
      ))}
    </div>
  )
}

export default MeasureInstructions
