import { MeasureInstructionProps, NumberedTextProps } from '@renderer/types/proptypes'
import TextNav from '@renderer/components/navs/TextNav'
import BodyResultNumberedText from '@renderer/components/measureResult/BodyResultNumberedText'
import exlamatory from '../assets/img/exlamatory.svg'
import crossblue from '../assets/img/crossblue.svg'
import MeasureInstructions from '@renderer/components/measureResult/MeasureInstructions'
import FooterButtons from '@renderer/components/common/FooterButtons'
import BodymeasureInputText from '@renderer/components/measureResult/BodymeasureInputText'

function PrepforBodyMeasure(): JSX.Element {
  const navProperties = {
    text: '체형 측정 준비'
  }
  const numberedTextProps: NumberedTextProps = {
    title: '측정 안내',
    bodyTexts: ['음성 안내에 따라 측정해주세요.', '정면, 측면, 후면, 보행 4가지 측정을 진행합니다.']
  }
  const measureInstructionProps: MeasureInstructionProps = {
    instructions: [
      {
        img: exlamatory,
        bodyTexts: '풀리에서 3미터 떨어진 곳에서 진행해주세요'
      },
      {
        img: crossblue,
        bodyTexts: '측정하는 중에 중단하면 저장이 되지 않습니다.'
      },
      {
        bodyTexts: '총 측정 시간은 약 3분입니다.',
        titleText: '3'
      }
    ]
  }
  return (
    <div className="flex flex-col w-screen justify-between">
      <TextNav {...navProperties} />
      <div className="flex flex-col justify-center items-center px-[72px]">
        {<BodyResultNumberedText {...numberedTextProps} />}
      </div>
      <div className="flex flex-col justify-center items-center px-[72px] pt-10">
        <MeasureInstructions {...measureInstructionProps} />
      </div>
      <div className="flex flex-col justify-center items-center px-[72px] pt-10">
        <BodymeasureInputText />
      </div>
      <FooterButtons {...{ grayText: '측정 다시하기', blueText: '저장하기' }} />
    </div>
  )
}
export default PrepforBodyMeasure
