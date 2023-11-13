import { Button, Label, TextInput } from 'flowbite-react'
import LoginNav from './components/header-login'

function App(): JSX.Element {
  return (
    <div className="container mx-auto">
      <LoginNav />
      <form className="flex max-w-md flex-col gap-4 items-center space-x-2 text-base">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="로그인" />
          </div>
          <TextInput id="email1" type="email" placeholder="전화번호" required />
        </div>
        <div>
          <TextInput id="password1" placeholder="비밀번호" required />
        </div>
        <Button type="submit" className="max-w-screen-md">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default App
