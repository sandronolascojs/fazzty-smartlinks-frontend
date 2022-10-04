import styled from '@emotion/styled'
import { theme } from '@/theme'

export const NavbarHeader = styled.header`
    background-color: ${theme.colors.boxColorPrincipal};
    border: 1px solid ${theme.colors.borderColorPrincipal};
    box-shadow: ${theme.boxShadowPrincipal};
`

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 256px;
`
export const NavbarList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    list-style: none;
    margin: 0;
    padding: 0;
`
export const NavbarListItem = styled.li`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 8px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: ${theme.colors.textPrincipal};
    cursor: pointer;
    :hover {
        color: ${theme.colors.lightSkyBlue};
    }
    transition: ease-in-out 0.2s;
`

export const NavbarButtonsContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const NavbarLogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const NavbarLogo = styled.svg`
    width: 40px;
    height: 40px;
    fill: currentColor;
    color: ${theme.colors.textPrincipal};
`

export const NavbarLogoText = styled.p`
    font-size: 24px;
    line-height: 32px;
    font-weight: 900;
    color: ${theme.colors.textPrincipal};
    margin: 0;
    padding: 0;
`
