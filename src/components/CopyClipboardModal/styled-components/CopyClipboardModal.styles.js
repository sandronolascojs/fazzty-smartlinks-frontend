import { theme } from '@/theme'
import styled from '@emotion/styled'

export const CopyClipboardModalContainer = styled.div`
    display: flex;
    padding: 6px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    border: 4px solid ${theme.colors.borderColorPrincipal};
`
export const CopyClipboardModalSeparator = styled.div`
    border: 2px solid ${theme.colors.borderColorPrincipal};
    padding: 0 0;
    border-radius: 25px;
    width: 1px;
    height: 85px;
`
export const CopyClipboardModalText = styled.p`
    font-size: 18px;
    line-height: 26px;
    color: ${theme.colors.textPrincipal};
    font-weight: ${theme.fonts.black};
`

export const CopyClipboardTextContainer = styled.div`
    align-items: center;
    justify-content: center;
    text-align: left;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-right: 6px;
`
