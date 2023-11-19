import logo from '../../assets/img/Logo.svg'
function LogoNav(): JSX.Element {
  return (
    <nav className="bg-transparent pl-[72px] mt-20">
      <div className="flex flex-row items-start container">
        <a className="flex items-center" href="/measure">
          <img src={logo} className="" alt="CIFIT" />
        </a>
      </div>
    </nav>
  )
}

export default LogoNav
