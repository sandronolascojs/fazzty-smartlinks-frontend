import styled from '@emotion/styled'
import { theme } from '@/theme'

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 32px;
  border: 1px solid ${theme.colors.borderColorPrincipal};
  box-shadow: ${theme.boxShadowPrincipal};
  border-radius: 6px;
  background-color: ${theme.colors.boxColorPrincipal};
`
export const LoginFormTitle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: 900;
  color: ${theme.colors.textPrincipal};
  margin-bottom: 16px;
`

export const LoginFormInput = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  font-weight: 500;
  border: 1px solid ${theme.colors.borderColorPrincipal};
  border-radius: 6px;
  padding: 10px;
  padding-left: 40px;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.textPrincipal};
  background-color: ${theme.colors.boxColorPrincipal};
  :focus {
    outline: none;
    border: 1px solid ${theme.colors.lightSkyBlue};
  }
  ::placeholder {
    color: ${theme.colors.textColorTerceary};
  }
`

export const LoginFormInputLabel = styled.label`
  position: relative;
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  text-align: left;
  line-height: 24px;
  color: ${theme.colors.textColorCuaternary};
  font-weight: 700;
`

export const LoginFormSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
  color: ${theme.colors.textColorTerceary};
`

export const LoginFormWrapperInput = styled.div`
  position: relative;
  margin-bottom: 24px;
`

export const LoginFormWrapperSvg = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  padding-left: 12px;
  pointer-events: none;
`

export const LoginFormErrorWrapper = styled.div`
  margin-top: 16px;
  background-color: ${theme.colors.lightAppleRed};
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
  border-radius: 6px;
  color: ${theme.colors.textSecundary};
  padding: 8px 16px;
`
export const LoginFormLabelLink = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${theme.colors.textColorPrimary};
  margin: 12px 0;
`

export const LoginFormLinkSpan = styled.span`
  color: ${theme.colors.lightSkyBlue};
  cursor: pointer;
  :hover {
    color: ${theme.colors.darkSkyBlue};
  }
  transition: all ease-in-out 0.2s;
`
