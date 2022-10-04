import { theme } from '@/theme'
import styled from '@emotion/styled'

export const LinksNoContentContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 256px;
`

export const LinksNoContentText = styled.h2`
    font-size: 26px;
    line-height: 1;
    font-weight: ${theme.fonts.black};
    color: ${theme.colors.textPrincipal};
    text-align: center;
    margin: 26px 0;
`
export const LinksNoContentParagraph = styled.p`
    font-size: 16px;
    line-height: 1.5;
    font-weight: ${theme.fonts.semibold};
    color: ${theme.colors.textColorCuaternary};
    text-align: center;
    margin: 0px 0 40px 0; 
`
