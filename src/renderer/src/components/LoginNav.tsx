import qrCode from '../assets/qrcode.svg'
function LoginNav(): JSX.Element {
  //   const [versions] = useState(window.electron.process.versions)

  return (
    <div className="flex flex-col w-full">
      <div className="mt-20">
        <div className="flex flex-row">
          <div className="">
            <img src={qrCode} className="w-60" alt="Qrcode" />
          </div>
          <div className="pl-12 pt-5">
            <p className="font-plain rounded-2xl bg-[#4582E9] text-center text-[#FAFAFA] text-2xl px-6 py-[10px] mb-6 w-fit">
              기기번호 12481359
            </p>
            <p className="text-[40px] font-plain">QR코드를 통해 쉽고</p>
            <p className="text-[40px] font-plain">빠르게 로그인 해보세요!</p>
          </div>
        </div>
        <hr className="border-1 border-[#4582E9] w-full mt-28" />
      </div>
    </div>
  )
}
export default LoginNav
