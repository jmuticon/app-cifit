import TextNav from '@renderer/components/TextNav'
import MeasureResultCard from '@renderer/components/measureResult/MeasureReslutsCard'
import MeasureResultText from '@renderer/components/measureResult/MeasureResultText'
function MeasureResult(): JSX.Element {
  const navProperties = {
    text: '측정 결과'
  }
  return (
    <div className="flex flex-col w-screen">
      <TextNav {...navProperties} />
      <hr className="border-[#4582E9] border-opacity-50 border-spacing-1" />

      <div className="flex justify-center w-full">
        <div className="w-[calc(100vw-144px)]">
          <MeasureResultText />
          <MeasureResultCard />
        </div>
      </div>
      <div className="flex flex-col w-[calc(100vw-144px)]"></div>
    </div>
  )
}

export default MeasureResult
