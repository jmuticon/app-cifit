import { Navbar } from 'flowbite-react'
// import { useState } from 'react'
import logo from '../assets/Logo.svg'
function LoginNav(): JSX.Element {
  //   const [versions] = useState(window.electron.process.versions)

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="CIFIT" />
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
  )
}
export default LoginNav
