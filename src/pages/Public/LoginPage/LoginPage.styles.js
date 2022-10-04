import { theme } from '@/theme'
import styled from '@emotion/styled'

export const LoginPageMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.lightBackground};
`
export const LoginPageSectionLogo = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.lightBackground};
`

export const LoginPageSectionForm = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.darkBackground};
`
export const LoginPageContainerWelcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 32px;
`

export const LoginPageWelcomeP = styled.p`
  color: ${theme.colors.textSecundary};
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
`

export const LoginPageWelcomePText = styled.p`
  color: ${theme.colors.textColorTerceary};
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  margin-top: 4px;
`
