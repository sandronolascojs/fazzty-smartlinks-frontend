import styled from '@emotion/styled'
import { theme } from '@/theme'

export const FirstSectionImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  position: relative;
`

export const FirstSectionLogoInformation = styled.div`
  position: absolute;
`

export const FirstSectionLogoWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: left;
`
export const FirstSectionSvg = styled.svg`
  width: 64px;
  height: 64px;
  color: ${theme.colors.textPrincipal};
  fill: currentColor;
`

export const FirstSectionPLogo = styled.p`
  color: ${theme.colors.textPrincipal};
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
`
export const FirstSectionPText = styled.p`
  color: ${theme.colors.textColorCuaternary};
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  margin-top: 4px;
`
