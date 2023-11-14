import { Navbar } from 'flowbite-react'
// import { useState } from 'react'
import logo from '../assets/Logo.svg'
import qrCode from '../assets/qrcode.svg'
function LoginNav(): JSX.Element {
  //   const [versions] = useState(window.electron.process.versions)

  return (
    <div className="flex-col">
      <Navbar fluid rounded className="w-screen bg-transparent mb-5 mt-3">
        <Navbar.Brand href="#">
          <img src={logo} className="ml-14 mt-14 " alt="CIFIT" />
        </Navbar.Brand>
        {/* <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Electron v{versions.electron}</Navbar.Link>
        <Navbar.Link href="#">Node v{versions.node}</Navbar.Link>
      </Navbar.Collapse> */}
      </Navbar>
      <div className="ml-40 mt-24 w-auto">
        <div className="flex flex-row mt-3 mb-20">
          <div className="">
            <img src={qrCode} className="w-60mb-3" alt="Qrcode" />
          </div>
          <div className="ml-14 pt-5">
            <p className="rounded-2xl bg-[#4582E9] text-center text-[#FAFAFA] text-2xl px-6 py-3 mb-6 w-fit">
              기기번호 12481359
            </p>
            <p className="text-4xl tracking-wider font-sans font-medium leading-normal">
              QR코드를 통해 쉽고
            </p>
            <p className="text-4xl tracking-wider font-sans font-medium leading-normal">
              빠르게 로그인 해보세요!
            </p>
          </div>
        </div>
        <hr className="border-1 border-[#4582E9] w-4/5" />
      </div>
    </div>
  )
}
export default LoginNav
