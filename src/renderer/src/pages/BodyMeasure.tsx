import { NumberedTextProps } from '@renderer/types/proptypes'
import TextNav from '@renderer/components/navs/TextNav'
import BodyResultNumberedText from '@renderer/components/measureResult/BodyResultNumberedText'
import FooterButtons from '@renderer/components/common/FooterButtons'
import skeleteton from '../assets/img/frontSkeleton.svg'
import BodyMeasureNav from '@renderer/components/measureResult/BodyMeasureNav'
function BodyMeasure(): JSX.Element {
  const navProperties = {
    text: '체형 측정'
  }
  const numberedTextProps: NumberedTextProps = {
    title: '측정 방법',
    bodyTexts: [
      '화면에서 3미터 떨어진 발매트 위에 서주세요.',
      '모델과 동일하게 정면을 보고 서주세요.',
      '음성 안내에 따라 3초 기다리세요.'
    ]
  }
  return (
    <div className="flex flex-col w-screen justify-between">
      <TextNav {...navProperties} />
      <BodyMeasureNav />
      <div className="flex flex-row w-full justify-center pb-14">
        <img src={skeleteton} alt="skeleteton" />
      </div>
      <div className="flex flex-col justify-center items-center px-[72px]">
        {<BodyResultNumberedText {...numberedTextProps} />}
      </div>
      <FooterButtons {...{ blueText: '저장하기' }} />
    </div>
  )
}
export default BodyMeasure
