function MeasureResultText(): JSX.Element {
  return (
    <div className="flex flex-row justify-start mt-[112px]">
      <div className="flex flex-col w-[11px] h-[117px] shrink-0; bg-[#4582E9]"></div>
      <div className="flex flex-col h-[117px] pl-12 mt-[-16px] mesure-result-text">
        <p>조회하려는</p>
        <p>측정 결과를 선택하세요.</p>
      </div>
    </div>
  )
}

export default MeasureResultText
