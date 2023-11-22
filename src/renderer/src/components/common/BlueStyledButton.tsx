function BlueStyledButton(label: { text: string }): JSX.Element {
  return (
    <button className="bg-[#4582E9] shrink-0 shadow-[0px_4px_4px_0px_rgba(255,255,255,0.25)_inset,0px_4px_4px_0px_rgba(75,111,171,0.30)] w-[372px] h-[112px] rounded-[20px] text-[#FAFAFA] text-center text-[40px] not-italic font-medium leading-[100%] tracking-[-2px]">
      {label.text}
    </button>
  )
}

export default BlueStyledButton
