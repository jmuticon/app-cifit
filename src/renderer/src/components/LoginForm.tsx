import { Label, TextInput, Button } from 'flowbite-react'

import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
function LoginForm(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const formik = useFormik({
    initialValues: {
      password: '비밀번호123',
      email: 'a@b.com'
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      console.log(values)
      console.log(from)
      // navigate(from, { replace: true })
      navigate('/home')
    }
  })
  return (
    <div className="mt-[136px] w-full">
      <form className="flex flex-col gap-4  text-base" onSubmit={formik.handleSubmit}>
        <div>
          <div className="px-3 block">
            <Label className="font-plain text-[56px]" htmlFor="email1" value="로그인" />
          </div>
        </div>
        <div>
          <TextInput
            sizing="lg"
            id="email"
            type="email"
            placeholder="a@b.com"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div>
          <TextInput
            sizing="lg"
            id="password"
            type="password"
            placeholder="비밀번호123"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <Button type="submit" className="min-w-fit h-14 bg-[#4582E9]">
          로그인
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
