import smallLeftArrow from '../../assets/img/bxs_left_arrow.svg'

function BodyMeasureNav(): JSX.Element {
  return (
    <div className="flex flex-row justify-start items-center px-[72px] pb-10">
      <p className="text-[#4582E9] text-[40px] not-italic font-medium leading-[70px] tracking-[-2px]">
        정면
      </p>
      <img src={smallLeftArrow} alt="" className="px-3" />
      <p className="text-[#A8ABAC] text-[40px] not-italic font-medium leading-[70px] tracking-[-2px]">
        측면
      </p>
      <img src={smallLeftArrow} alt="" className="px-3" />
      <p className="text-[#A8ABAC] text-[40px] not-italic font-medium leading-[70px] tracking-[-2px]">
        후면
      </p>
      <img src={smallLeftArrow} alt="" className="px-3" />

      <p className="text-[#A8ABAC] text-[40px] not-italic font-medium leading-[70px] tracking-[-2px]">
        보행
      </p>
    </div>
  )
}

export default BodyMeasureNav
