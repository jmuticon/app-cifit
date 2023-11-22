function GrayStyledButton(label: { text: string }): JSX.Element {
  return (
    <button className="bg-[#E1E1E1] w-[372px] h-[112px] shrink-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.16)] rounded-[20px] text-[#4D5055] text-center text-[40px] not-italic font-medium leading-[100%] tracking-[-2px]">
      {label.text}
    </button>
  )
}

export default GrayStyledButton
