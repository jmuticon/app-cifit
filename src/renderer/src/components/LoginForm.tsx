import { Label, TextInput, Button } from 'flowbite-react'

function LoginForm(): JSX.Element {
  return (
    <div className="ml-14 mt-24">
      <form className="flex max-w-md flex-col gap-4 space-x-2 text-base">
        <div>
          <div className="mb-3 block">
            <Label className="font-semibold text-6xl" htmlFor="email1" value="로그인" />
          </div>
        </div>
        <div>
          {/* <input
            type="text"
            placeholder="전화번호"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /> */}

          <TextInput sizing="lg" id="email1" type="email" placeholder="전화번호" required />
        </div>
        <div>
          {/* <input
            type="password"
            placeholder="비밀번호"
            id="password1"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /> */}
          <TextInput sizing="lg" id="password1" placeholder="비밀번호" required />
        </div>
        {/* <div className="w-auto"> */}
        <Button type="submit" className="min-w-fit h-14 bg-[#4582E9]">
          Submit
        </Button>
        {/* </div> */}
      </form>
    </div>
  )
}

export default LoginForm
