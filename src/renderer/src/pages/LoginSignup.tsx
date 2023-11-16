import LoginNav from '@renderer/components/navs/LoginNav'
import LoginForm from '@renderer/components/LoginForm'
import LogoNav from '@renderer/components/navs/LogoNav'
function LoginSignup(): JSX.Element {
  return (
    <div className="flex flex-col w-screen p-0 m-0">
      <LogoNav />
      <div className="flex justify-center w-full">
        <div className="w-[calc(100vw-351px)]">
          <LoginNav />
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
