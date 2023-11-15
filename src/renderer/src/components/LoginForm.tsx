import { Label, TextInput, Button } from 'flowbite-react'

function LoginForm(): JSX.Element {
  return (
    <div className="mt-[136px] w-full">
      <form className="flex flex-col gap-4  text-base">
        <div>
          <div className="px-3 block">
            <Label className="font-plain text-[56px]" htmlFor="email1" value="로그인" />
          </div>
        </div>
        <div>
          <TextInput sizing="lg" id="email1" type="email" placeholder="전화번호" required />
        </div>
        <div>
          <TextInput sizing="lg" id="password1" placeholder="비밀번호" required />
        </div>
        <Button type="submit" className="min-w-fit h-14 bg-[#4582E9]">
          로그인
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
