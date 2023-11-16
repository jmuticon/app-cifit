// import { Navbar } from 'flowbite-react'
import home from '../../assets/home.svg'
type TextNavProps = {
  text: string
}
function TextNav(_props: TextNavProps): JSX.Element {
  return (
    <nav className=" w-full bg-transparent pl-[71px] pr-[72px] mt-[57px] mb-[40px]">
      <div className="mx-auto flex flex-wrap items-center justify-between container">
        <a className="flex items-center nav-text" href="/login">
          {_props.text}
        </a>
        <a className="flex items-center" href="/home">
          <img src={home} className="" alt="CIFIT" />
        </a>
      </div>
    </nav>
  )
}

export default TextNav
