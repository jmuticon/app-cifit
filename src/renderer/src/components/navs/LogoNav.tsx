import logo from '../../assets/Logo.svg'
function LogoNav(): JSX.Element {
  return (
    <nav className=" w-full bg-transparent pl-[72px] mt-20">
      <div className="mx-auto flex flex-wrap items-center justify-between container">
        <a className="flex items-center" href="/measure">
          <img src={logo} className="" alt="CIFIT" />
        </a>
      </div>
    </nav>
  )
}

export default LogoNav
