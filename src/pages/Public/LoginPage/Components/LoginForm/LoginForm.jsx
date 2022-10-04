import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

// hooks
import useAuthContext from '@/hooks/useAuthContext'

// components
import PrimaryButton from '@/components/PrimaryButton'
import Link from '@/components/Link'

// styles
import {
  LoginFormErrorWrapper,
  LoginFormInput,
  LoginFormInputLabel,
  LoginFormLabelLink,
  LoginFormLinkSpan,
  LoginFormSvg,
  LoginFormTitle,
  LoginFormWrapper,
  LoginFormWrapperInput,
  LoginFormWrapperSvg
} from './LoginForm.styles'
import { authLogin } from '@/services/auth.services'
import { PublicRoutes } from '@/config/routes'

export default function LoginForm () {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const { email, password } = data

  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    setError(null)
    setData({ ...data, [target.name]: target.value })
  }

  const { login } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      return setError('Please fill all fields')
    }
    const response = await authLogin({ email, password })
    if (!response.error) {
      login(response.data)
      return navigate('/dashboard')
    } else {
      return setError(response.message)
    }
  }

  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <LoginFormTitle>Login</LoginFormTitle>

      <LoginFormInputLabel>Email</LoginFormInputLabel>
      <LoginFormWrapperInput>
        <LoginFormWrapperSvg>
          <LoginFormSvg aria-hidden="true" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </LoginFormSvg>
        </LoginFormWrapperSvg>
        <LoginFormInput
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="mail@mail.com"
        />
      </LoginFormWrapperInput>

      <LoginFormInputLabel>Password</LoginFormInputLabel>
      <LoginFormWrapperInput>
        <LoginFormWrapperSvg>
          <LoginFormSvg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.3 68.1"
            enableBackground="new 0 0 56.3 68.1"
          >
            <path
              d="M48.4,27.6h-1.5v-6.9c0-10.3-8.3-18.7-18.6-18.7C18,1.9,9.6,10.3,9.6,20.7v6.9H8.1c-3.1,0-5.7,2.6-5.7,5.7
                    v27.1c0,3.2,2.5,5.7,5.7,5.7h40.3c3.1,0,5.7-2.6,5.7-5.7V33.3C54,30.1,51.5,27.6,48.4,27.6z M30.6,47.2v3.5c0,0.5-0.4,1-1,1h-2.8
                    c-0.5,0-0.9-0.4-0.9-1v-3.5c-1.3-0.8-2.2-2.2-2.2-3.9c0-2.5,2-4.6,4.5-4.6c2.5,0,4.5,2,4.5,4.6C32.8,45,31.9,46.4,30.6,47.2z
                    M38.7,27.6H17.8v-6.9c0-5.8,4.7-10.5,10.4-10.5c5.8,0,10.4,4.7,10.4,10.5V27.6z"
            />
          </LoginFormSvg>
        </LoginFormWrapperSvg>
        <LoginFormInput
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </LoginFormWrapperInput>
      <PrimaryButton>Login</PrimaryButton>

      {error ? <LoginFormErrorWrapper>{error}</LoginFormErrorWrapper> : null}

      <LoginFormLabelLink>
        or{' '}
        <Link href={`/${PublicRoutes.RESET_PASSWORD}`}>
          <LoginFormLinkSpan>Forgot Password</LoginFormLinkSpan>
        </Link>
      </LoginFormLabelLink>

      <LoginFormLabelLink>
        Don&apos;t have an Account?{' '}
        <Link href={`/${PublicRoutes.REGISTER}`}>
          <LoginFormLinkSpan>Sign Up</LoginFormLinkSpan>
        </Link>
      </LoginFormLabelLink>
    </LoginFormWrapper>
  )
}
