import { theme } from '@/theme'
import styled from '@emotion/styled'

export const LinksWithContentContainer = styled.main`
  margin: 0px 256px;
`

export const LinksWithContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 24px 0;
  width: 100%;
  height: 100%;
`
export const LinksWithContentSearchContainer = styled.div`
  position: relative;
`

export const LinksWithContentSearchInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.textPrincipal};
  background-color: ${theme.colors.boxColorPrincipal};
  font-weight: ${theme.fonts.medium};
  width: 100%;
  height: 40px;
  padding: 10px 40px 10px 40px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.borderColorPrincipal};
  :focus {
    border: ${theme.colors.lightSkyBlue};
  }
  ::placeholder {
    color: ${theme.colors.textColorTerceary};
  }
`

export const LinksWithContentSearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 0;
  left: 0;
  margin-bottom: 0;
  width: 30px;
  height: 30px;
  color: ${theme.colors.textColorTerceary};
  padding-left: 12px;
  position: absolute;
  pointer-events: none;
  font-size: 20px;
  line-height: 24px;
`

export const LinksWithContentLimitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
`

export const LinksWithContentLimitSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    font-size: 14px;
    line-height: 20px;
    color: ${theme.colors.textColorTerceary};
    font-weight: ${theme.fonts.medium};
    display: block;
  }
  select {
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.textPrincipal};
    background-color: ${theme.colors.boxColorPrincipal};
    font-weight: ${theme.fonts.semibold};
    width: 100%;
    height: 40px;
    padding: 10px 20px 10px 20px;
    margin-top: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.borderColorPrincipal};
    :focus {
      border: ${theme.colors.lightSkyBlue};
    }
  }
`

export const LinksWithContentLinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    justify-content: center;
    align-items: center;
    gap: 28px;
    margin-top: 8px;
`
export const LinksWithContentLinkPaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 8px;
`

export const LinksWithContentLinkPaginationButton = styled.button`
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.textPrincipal};
    background-color: ${theme.colors.boxColorPrincipal};
    font-weight: ${theme.fonts.semibold};
    width: 40px;
    height: 40px;
    padding: 10px 20px 10px 10px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.borderColorPrincipal};
    :focus {
        border: ${theme.colors.lightSkyBlue};
    }
    :disabled {
        color: ${theme.colors.textColorTerceary};
    }
`

export const LinksWithContentPaginationSpan = styled.span`
    font-size: 18px;
    line-height: 24px;
    align-items: center;
    justify-content: center;
    margin: 0px 5px 0 5px;
    color: ${theme.colors.textPrincipal};
    font-weight: ${theme.fonts.bold};
`

export const LinksWithContentLinkPaginationLabelResults = styled.label`
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    color: ${theme.colors.textColorCuaternary};
    font-weight: ${theme.fonts.semibold};
`
