import React from 'react'

// components
import LoginForm from '@/pages/Public/LoginPage/Components/LoginForm/LoginForm'
import FirstSection from './Components/FirstSection'

// Styles
import {
  LoginPageContainerWelcome,
  LoginPageMain,
  LoginPageSectionForm,
  LoginPageSectionLogo,
  LoginPageWelcomeP,
  LoginPageWelcomePText
} from './LoginPage.styles'

export default function LoginPage () {
  document.title = 'Fazzty - Login'

  return (
    <LoginPageMain>
      <LoginPageSectionLogo>
        <FirstSection />
      </LoginPageSectionLogo>

      <LoginPageSectionForm>
        <LoginPageContainerWelcome>
          <LoginPageWelcomeP>Welcome Back!</LoginPageWelcomeP>
          <LoginPageWelcomePText>Login to your account</LoginPageWelcomePText>
        </LoginPageContainerWelcome>

        <LoginForm />
      </LoginPageSectionForm>
    </LoginPageMain>
  )
}
