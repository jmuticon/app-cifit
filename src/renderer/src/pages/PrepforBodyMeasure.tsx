import TextNav from '@renderer/components/navs/TextNav'
function PrepforBodyMeasure(): JSX.Element {
  const navProperties = {
    text: '체형 측정 준비'
  }
  return (
    <div className="flex flex-col w-screen justify-between">
      <TextNav {...navProperties} />
      <div className="flex flex-col justify-center items-center w-full px-[72px]">
        <div className="flex flex-col justify-center items-center  bg-[#FAFAFA] rounded-[20px]">
          <p className="text-[#1A191D] text-center text-[40px] not-italic font-medium leading-[normal] tracking-[-1.2px]">
            측정 안내
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16 mt-10">
        <div className="flex flex-row justify-center gap-12 pb-20">
          <button className="bg-[#E1E1E1] w-[372px] h-[112px] shrink-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.16)] rounded-[20px] text-[#4D5055] text-center text-[40px] not-italic font-medium leading-[100%] tracking-[-2px]">
            측정 다시하기
          </button>
          <button className="bg-[#4582E9] shrink-0 shadow-[0px_4px_4px_0px_rgba(255,255,255,0.25)_inset,0px_4px_4px_0px_rgba(75,111,171,0.30)] w-[372px] h-[112px] rounded-[20px] text-[#FAFAFA] text-center text-[40px] not-italic font-medium leading-[100%] tracking-[-2px]">
            저장하기
          </button>
        </div>
      </div>
    </div>
  )
}
export default PrepforBodyMeasure
