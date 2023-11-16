import logo from '../../assets/Logo.svg'
type LogoNavProps = {
  rightIcon1?: string
  rightText1?: string
  rightLink1?: string
  rightIcon2?: string
  rightText2?: string
  rightLink2?: string
}
function LogoNav(_props: LogoNavProps): JSX.Element {
  return (
    <nav className="w-full pl-[72px] pr-[71px] bg-transparent mt-[70px] mb-[52px]">
      <div className="mx-auto flex flex-wrap items-center justify-between container">
        <a className="flex items-center" href="/measure">
          <img src={logo} className="h-[42px]" alt="CIFIT" />
        </a>
        {_props && (
          <div className="flex flex-row justify-between">
            {_props.rightIcon1 && (
              <a className="nav-rightIcon1 mr-4" href={_props.rightLink1 ? _props.rightLink1 : '#'}>
                <img src={_props.rightIcon1} className="" alt="CIFIT" />
              </a>
            )}

            {_props.rightText1 && (
              <a
                className="nav-right-text mr-8 mt-[-3px]"
                href={_props.rightLink1 ? _props.rightLink1 : '#'}
              >
                {_props.rightText1}
              </a>
            )}

            {_props.rightIcon2 && (
              <a className="nav-rightIcon1 mr-4" href={_props.rightLink2 ? _props.rightLink2 : '#'}>
                <img src={_props.rightIcon2} className="" alt="CIFIT" />
              </a>
            )}

            {_props.rightText2 && (
              <a
                className="nav-right-text mt-[-3px]"
                href={_props.rightLink2 ? _props.rightLink2 : '#'}
              >
                {_props.rightText2}
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default LogoNav
