function BodymeasureInputText(): JSX.Element {
  return (
    <div className="flex flex-col justify-start items-center w-full  gap-8">
      <div className="flex flex-row justify-start items-center w-full gap-4">
        <p className="text-[#4D5055] text-[48px] not-italic font-medium leading-[100%] tracking-[-2.4px]">
          홍길동님의 키는
        </p>
        <input
          type="text"
          value={160}
          className="text-[#4582E9] text-[56px] not-italic font-medium leading-[100%] tracking-[-2.8px] w-64 h-[100px] bg-[#fafafa] border-transparent rounded-[20px] text-center"
        />
        <p className="text-[#4D5055] text-[48px] not-italic font-medium leading-[100%] tracking-[-2.4px]">
          cm 이며,
        </p>
      </div>
      <div className="flex flex-row justify-start items-center w-full gap-4">
        <p className="text-[#4D5055] text-[48px] not-italic font-medium leading-[100%] tracking-[-2.4px]">
          몸무게는
        </p>
        <input
          type="text"
          value={50}
          className="text-[#4582E9] text-[56px] not-italic font-medium leading-[100%] tracking-[-2.8px] w-64 h-[100px] bg-[#fafafa] border-transparent rounded-[20px] text-center"
        />
        <p className="text-[#4D5055] text-[48px] not-italic font-medium leading-[100%] tracking-[-2.4px]">
          kg 입니다.
        </p>
      </div>
    </div>
  )
}

export default BodymeasureInputText
