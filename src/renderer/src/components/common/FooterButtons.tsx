import BlueStyledButton from './BlueStyledButton'
import GrayStyledButton from './GrayStyledButton'

function FooterButtons(label: { grayText?: string; blueText?: string }): JSX.Element {
  return (
    <div className="flex flex-col gap-16 my-20">
      <div className="flex flex-row justify-center gap-12 pb-20">
        {label.grayText && <GrayStyledButton {...{ text: label.grayText }} />}
        {label.blueText && <BlueStyledButton {...{ text: label.blueText }} />}
      </div>
    </div>
  )
}

export default FooterButtons
